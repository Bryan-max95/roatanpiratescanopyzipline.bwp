import 'server-only';
import { Pool } from 'pg';

declare global {
  var piratesDbPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_NOT_CONFIGURED');
  return new Pool({
    connectionString,
    max: 3,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000
  });
}

// Importing an API route during a build must not require a database connection.
export const db = {
  async query<R = Record<string, unknown>>(text: string, values?: unknown[]) {
    const pool = globalThis.piratesDbPool ??= createPool();
    return pool.query<R>(text, values);
  }
};

export async function audit(actorId: string | null, action: string, entity: string, entityId?: string, details: Record<string, unknown> = {}) {
  await db.query(
    `INSERT INTO audit_log (actor_id, action, entity_type, entity_id, details)
     VALUES ($1, $2, $3, $4, $5::jsonb)`,
    [actorId, action, entity, entityId ?? null, JSON.stringify(details)]
  );
}
