const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const idx = trimmed.indexOf('=');
    if (idx === -1) return;
    const key = trimmed.slice(0, idx).trim();
    let value = trimmed.slice(idx + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (key) {
      process.env[key] = value;
    }
  });
  console.log(`[start.js] Loaded .env — PORT=${process.env.PORT}, HOSTNAME=${process.env.HOSTNAME}`);
} else {
  console.warn('[start.js] No .env file found, using defaults (PORT=3000, HOSTNAME=0.0.0.0)');
}

require('./server.js');
