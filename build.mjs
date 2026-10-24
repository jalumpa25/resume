import { rm, mkdir, cp } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('index.html', 'dist/index.html');
await cp('_redirects', 'dist/_redirects');
await cp('assets', 'dist/assets', { recursive: true });

console.log('Built dist/ (index.html, _redirects, assets)');
