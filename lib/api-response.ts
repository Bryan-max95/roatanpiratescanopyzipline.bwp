import { NextResponse } from 'next/server';

export function apiError(error: unknown) {
  const message = error instanceof Error ? error.message : 'UNKNOWN';
  if (message === 'UNAUTHORIZED') return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
  if (message === 'FORBIDDEN') return NextResponse.json({ error: 'Administrator access required' }, { status: 403 });
  if (message === 'DATABASE_NOT_CONFIGURED') return NextResponse.json({ error: 'Database service is not configured' }, { status: 503 });
  if (message === 'STORAGE_NOT_CONFIGURED') return NextResponse.json({ error: 'Media storage is not configured' }, { status: 503 });
  console.error('API error', error);
  return NextResponse.json({ error: 'Server request failed' }, { status: 500 });
}
