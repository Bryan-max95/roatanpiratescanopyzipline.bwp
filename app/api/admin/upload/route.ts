import { NextResponse } from 'next/server';
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { audit, db } from '@/lib/db';
import { requireUser } from '@/lib/auth';
import { apiError } from '@/lib/api-response';
import { mediaTypes as allowedTypes, parseMediaPath } from '@/lib/media';

export const runtime = 'nodejs';

function storageProvider() {
  if (process.env.BLOB_READ_WRITE_TOKEN) return 'vercel-blob';
  if (process.env.VERCEL || process.env.NODE_ENV === 'production') throw new Error('STORAGE_NOT_CONFIGURED');
  return 'local';
}

export async function GET() {
  try {
    await requireUser();
    return NextResponse.json({ provider: storageProvider() });
  } catch (error) {
    return apiError(error);
  }
}

export async function POST(request: Request) {
  try {
    if (request.headers.get('content-type')?.includes('application/json')) {
      if (!process.env.BLOB_READ_WRITE_TOKEN) throw new Error('STORAGE_NOT_CONFIGURED');
      const { handleUpload } = await import('@vercel/blob/client');
      const result = await handleUpload({
        request,
        body: await request.json(),
        onBeforeGenerateToken: async (pathname) => {
          const user = await requireUser();
          const media = parseMediaPath(pathname, user.id);
          if (!media) throw new Error('FORBIDDEN');
          return {
            allowedContentTypes: [media.contentType],
            maximumSizeInBytes: media.maxBytes,
            addRandomSuffix: false,
            allowOverwrite: false,
          };
        },
        // The authenticated PUT below verifies and registers the completed file.
        // This also works on localhost without a public webhook/tunnel.
        onUploadCompleted: async () => {},
      });
      return NextResponse.json(result);
    }
    const user = await requireUser();
    if (storageProvider() !== 'local') {
      return NextResponse.json({ error: 'Use direct uploads to media storage' }, { status: 400 });
    }
    const form = await request.formData();
    const file = form.get('file');
    if (!(file instanceof File)) return NextResponse.json({ error: 'Missing media file' }, { status: 400 });
    const config = allowedTypes.get(file.type);
    if (!config) return NextResponse.json({ error: 'Unsupported image or video format' }, { status: 415 });
    if (file.size > config.maxBytes) return NextResponse.json({ error: `${config.kind === 'video' ? 'Video' : 'Image'} is too large` }, { status: 413 });

    const directory = path.join(process.cwd(), 'public', 'uploads', 'gallery');
    await mkdir(directory, { recursive: true });
    const filename = `${Date.now()}-${crypto.randomUUID()}.${config.extension}`;
    const storageKey = `uploads/gallery/${filename}`;
    const publicUrl = `/${storageKey}`;
    await writeFile(path.join(directory, filename), Buffer.from(await file.arrayBuffer()));
    const result = await db.query<{ id: string }>(
      `INSERT INTO media_assets
       (kind,storage_provider,storage_key,public_url,original_name,mime_type,byte_size,uploaded_by)
       VALUES ($1,'local',$2,$3,$4,$5,$6,$7) RETURNING id`,
      [config.kind, storageKey, publicUrl, file.name.slice(0, 255), file.type, file.size, user.id]
    );
    await audit(user.id, 'uploaded', 'media_asset', result.rows[0].id, { kind: config.kind, byteSize: file.size });
    return NextResponse.json({ id: result.rows[0].id, url: publicUrl, type: config.kind }, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}

export async function PUT(request: Request) {
  try {
    const user = await requireUser();
    if (!process.env.BLOB_READ_WRITE_TOKEN) throw new Error('STORAGE_NOT_CONFIGURED');
    const body = await request.json() as { pathname?: string; name?: string };
    const pathname = typeof body.pathname === 'string' ? body.pathname : '';
    const media = parseMediaPath(pathname, user.id);
    if (!media) return NextResponse.json({ error: 'Invalid media path' }, { status: 400 });
    const { head } = await import('@vercel/blob');
    // Look up a path in our own Blob store, never trust a client-supplied URL.
    const blob = await head(pathname);
    if (blob.contentType !== media.contentType || blob.size > media.maxBytes) {
      return NextResponse.json({ error: 'Invalid media type or size' }, { status: 400 });
    }
    const inserted = await db.query<{ id: string }>(
      `INSERT INTO media_assets
       (id,kind,storage_provider,storage_key,public_url,original_name,mime_type,byte_size,uploaded_by)
       VALUES ($1,$2,'vercel-blob',$3,$4,$5,$6,$7,$8)
       ON CONFLICT (id) DO NOTHING RETURNING id`,
      [media.id, media.kind, pathname, blob.url, String(body.name || pathname).slice(0, 255), blob.contentType, blob.size, user.id]
    );
    if (inserted.rows.length) await audit(user.id, 'uploaded', 'media_asset', media.id, { kind: media.kind, byteSize: blob.size });
    return NextResponse.json({ id: media.id, url: blob.url, type: media.kind }, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}

export async function DELETE(request: Request) {
  try {
    const user = await requireUser();
    const { id } = await request.json() as { id?: string };
    if (!id) return NextResponse.json({ error: 'Missing media id' }, { status: 400 });
    const result = await db.query<{ storage_provider: string; storage_key: string }>(
      `SELECT storage_provider, storage_key FROM media_assets WHERE id=$1 AND deleted_at IS NULL`,
      [id]
    );
    const asset = result.rows[0];
    if (!asset) return NextResponse.json({ error: 'Media not found' }, { status: 404 });
    if (asset.storage_provider === 'vercel-blob') {
      if (!process.env.BLOB_READ_WRITE_TOKEN) throw new Error('STORAGE_NOT_CONFIGURED');
      const { del } = await import('@vercel/blob');
      await del(asset.storage_key);
    }
    if (asset.storage_provider === 'local' && !process.env.VERCEL && process.env.NODE_ENV !== 'production') {
      const mediaRoot = path.resolve(process.cwd(), 'public', 'uploads', 'gallery');
      const target = path.resolve(process.cwd(), 'public', asset.storage_key);
      if (target.startsWith(`${mediaRoot}${path.sep}`)) await unlink(target).catch(() => undefined);
    }
    await db.query('UPDATE media_assets SET deleted_at=now() WHERE id=$1', [id]);
    await audit(user.id, 'deleted', 'media_asset', id);
    return NextResponse.json({ ok: true });
  } catch (error) {
    return apiError(error);
  }
}
