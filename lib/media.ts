// Shared validation for local uploads and direct uploads to Vercel Blob.
export const mediaTypes = new Map<string, { extension: string; kind: 'image' | 'video'; maxBytes: number }>([
  ['image/jpeg', { extension: 'jpg', kind: 'image', maxBytes: 20 * 1024 * 1024 }],
  ['image/png', { extension: 'png', kind: 'image', maxBytes: 20 * 1024 * 1024 }],
  ['image/webp', { extension: 'webp', kind: 'image', maxBytes: 20 * 1024 * 1024 }],
  ['image/gif', { extension: 'gif', kind: 'image', maxBytes: 20 * 1024 * 1024 }],
  ['image/avif', { extension: 'avif', kind: 'image', maxBytes: 20 * 1024 * 1024 }],
  ['video/mp4', { extension: 'mp4', kind: 'video', maxBytes: 200 * 1024 * 1024 }],
  ['video/webm', { extension: 'webm', kind: 'video', maxBytes: 200 * 1024 * 1024 }],
  ['video/quicktime', { extension: 'mov', kind: 'video', maxBytes: 200 * 1024 * 1024 }]
]);

export function parseMediaPath(pathname: string, userId: string) {
  const prefix = `gallery/${userId}/`;
  if (!pathname.startsWith(prefix)) return null;
  const match = /^([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\.([a-z0-9]+)$/.exec(pathname.slice(prefix.length));
  if (!match) return null;
  const entry = [...mediaTypes.entries()].find(([, config]) => config.extension === match[2]);
  return entry ? { id: match[1], contentType: entry[0], ...entry[1] } : null;
}
