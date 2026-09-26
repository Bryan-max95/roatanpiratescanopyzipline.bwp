const fs = require('node:fs');
const path = require('node:path');
const { parseEnv } = require('node:util');

module.exports = function loadEnvironment(root) {
  const filename = path.join(root, '.env.local');
  const local = fs.existsSync(filename) ? parseEnv(fs.readFileSync(filename, 'utf8')) : {};
  // Deployed/CI environment variables take precedence over local development.
  return { ...local, ...process.env };
};
