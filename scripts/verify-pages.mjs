import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const output = '.output/public';
const base = '/ERRH/';
const pages = ['', 'about', 'contact', 'patients', 'referrals', 'services', 'updates'];
const titles = new Set();

assert(existsSync(join(output, '.nojekyll')), 'Missing .nojekyll');
for (const page of pages) {
  const file = join(output, page, 'index.html');
  assert(existsSync(file), `Missing page: ${file}`);
  const html = readFileSync(file, 'utf8');
  assert(html.includes('<h1'), `Missing rendered page content: ${page || 'home'}`);
  assert(!html.includes('/__l5e/'), `Lovable-hosted photo remains: ${page}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert(title, `Missing title: ${page}`);
  titles.add(title);
  for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)[^"]*"/g)) {
    const url = match[1];
    assert(url.startsWith(base), `URL escapes the Pages base: ${url} in ${page}`);
    const relative = decodeURIComponent(url.slice(base.length));
    const target = join(output, relative);
    assert(existsSync(target), `Missing linked page or asset: ${url} in ${page}`);
    if (url.endsWith('/')) {
      assert(existsSync(join(target, 'index.html')), `Missing linked HTML: ${url}`);
    }
  }
  console.log(`Verified ${base}${page ? `${page}/` : ''}`);
}
assert.equal(titles.size, pages.length, 'Pages must have distinct titles');
console.log('All seven pages, local assets, navigation and .nojekyll verified.');
