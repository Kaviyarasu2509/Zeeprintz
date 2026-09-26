const fs = require('fs');
const path = require('path');
// A new URL bypasses permanent redirects cached before the domain fix.
const file = path.join(__dirname, '..', 'build', 'index.html');
const version = Date.now().toString(36);
const html = fs.readFileSync(file, 'utf8');
const updated = html.replace(/((?:src|href)="\/static\/[^"?]+\.(?:js|css))"/g, `$1?v=${version}"`);
if (updated === html) throw new Error('No build assets found to version');
fs.writeFileSync(file, updated);
console.log('Build entry assets versioned:', version);
