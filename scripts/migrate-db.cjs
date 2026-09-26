const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { promisify } = require('node:util');
const { Client } = require('pg');
const ts = require('typescript');
const loadEnvironment = require('./load-env.cjs');

require.extensions['.ts'] = (module, filename) => {
  const source = fs.readFileSync(filename, 'utf8');
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true }
  });
  module._compile(compiled.outputText, filename);
};

async function passwordHash(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const derived = await promisify(crypto.scrypt)(password, salt, 64);
  return `scrypt:${salt}:${derived.toString('hex')}`;
}

async function main() {
  const root = path.resolve(__dirname, '..');
  const env = loadEnvironment(root);
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL is required in the environment or .env.local');

  const client = new Client({ connectionString: env.DATABASE_URL });
  await client.connect();
  try {
    await client.query('BEGIN');
    await client.query(fs.readFileSync(path.join(root, 'database', 'schema.sql'), 'utf8'));
    let rootUser = await client.query('SELECT id FROM admin_users WHERE is_root = true LIMIT 1');
    if (!rootUser.rows.length) {
      if (!env.ADMIN_ROOT_USERNAME || !env.ADMIN_ROOT_PASSWORD || env.ADMIN_ROOT_PASSWORD.length < 12 || env.ADMIN_ROOT_PASSWORD.startsWith('change-me')) {
        throw new Error('Set ADMIN_ROOT_USERNAME and a non-placeholder ADMIN_ROOT_PASSWORD of at least 12 characters to initialize the administrator');
      }
      const hash = await passwordHash(env.ADMIN_ROOT_PASSWORD);
      rootUser = await client.query(
        `INSERT INTO admin_users (name, username, password_hash, role, active, is_root)
         VALUES ($1, $2, $3, 'admin', true, true)
         RETURNING id`,
        ['BWP Root Administrator', env.ADMIN_ROOT_USERNAME, hash]
      );
    }
    const productionContent = require(path.join(root, 'lib', 'data.ts'));
    const contentEntries = [
      ['siteConfig', productionContent.initialSiteConfig],
      ['tours', productionContent.initialTours],
      ['prices', productionContent.initialPrices],
      ['gallery', productionContent.initialGallery],
      ['faqs', productionContent.initialFaqs]
    ];
    for (const [key, value] of contentEntries) {
      await client.query(
        `INSERT INTO site_content (key, value, updated_by)
         VALUES ($1, $2::jsonb, $3)
         ON CONFLICT (key) DO NOTHING`,
        [key, JSON.stringify(value), rootUser.rows[0].id]
      );
    }
    await client.query('COMMIT');
    console.log('Database schema and initial content are ready. Existing administrator credentials were preserved.');
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    await client.end();
  }
}

main().catch((error) => {
  console.error('Migration failed:', error.message);
  process.exitCode = 1;
});
