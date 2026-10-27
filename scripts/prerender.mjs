import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
import { readFile, writeFile } from 'node:fs/promises';
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx');
  const html = await readFile('dist/index.html', 'utf8');
  await writeFile('dist/index.html', html.replace('<div id="root"></div>', `<div id="root">${renderToString(createElement(App))}</div>`));
  console.log('Homepage prerendered: content available without JavaScript.');
} finally { await server.close(); }
