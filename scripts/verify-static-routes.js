// Request the built site the way GitHub Pages will: real files only, no SPA fallback.
const path = require('path');
const http = require('http');
const { listen } = require('./github-pages-server');
const { PAGES, canonicalUrl } = require('./routes');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');

function get(url) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks).toString('utf8'),
        });
      });
    });
    req.on('error', reject);
  });
}

function decodeTitle(html) {
  const match = html.match(/<title>([^<]*)<\/title>/);
  if (!match) return '';
  return match[1]
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
}

function fail(message) {
  throw new Error(message);
}

async function main() {
  const server = await listen(BUILD_DIR, 0);
  const origin = 'http://127.0.0.1:' + server.address().port;
  const lines = [];
  try {
    for (const page of PAGES) {
      const response = await get(origin + page.path);
      lines.push(response.status + ' ' + page.path);
      if (response.status !== 200) {
        fail(page.path + ' returned HTTP ' + response.status + ' (expected 200)');
      }
      if (!String(response.headers['content-type'] || '').includes('text/html')) {
        fail(page.path + ' content-type is ' + response.headers['content-type']);
      }
      if (decodeTitle(response.body) !== page.title) {
        fail(page.path + ' title is "' + decodeTitle(response.body) + '"');
      }
      if (!response.body.includes('>' + page.heading + '</h1>')) {
        fail(page.path + ' is missing its h1');
      }
      if (!response.body.includes(page.body)) {
        fail(page.path + ' is missing its page content');
      }
      if (!response.body.includes('Columbus, OH')) {
        fail(page.path + ' is missing Columbus, OH');
      }
      const canonical = (response.body.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
      if (canonical !== canonicalUrl(page.path)) {
        fail(page.path + ' canonical is ' + canonical);
      }
      if (!response.body.includes('/static/js/')) {
        fail(page.path + ' does not load the app bundle');
      }

      if (page.path !== '/') {
        const slashed = await get(origin + page.path + '/');
        lines.push(slashed.status + ' ' + page.path + '/');
        if (slashed.status !== 200) {
          fail(page.path + '/ returned HTTP ' + slashed.status + ' (expected 200)');
        }
        if (!slashed.body.includes('>' + page.heading + '</h1>')) {
          fail(page.path + '/ is missing its h1');
        }
      }
    }

    const sitemap = await get(origin + '/sitemap.xml');
    lines.push(sitemap.status + ' /sitemap.xml');
    if (sitemap.status !== 200) fail('sitemap.xml returned ' + sitemap.status);
    for (const page of PAGES) {
      if (!sitemap.body.includes('<loc>' + canonicalUrl(page.path) + '</loc>')) {
        fail('sitemap is missing ' + canonicalUrl(page.path));
      }
    }

    const missing = await get(origin + '/this-page-does-not-exist');
    lines.push(missing.status + ' /this-page-does-not-exist');
    if (missing.status !== 404) fail('unknown path returned ' + missing.status);
    if (!missing.body.includes('Page not found')) fail('unknown path does not show a not-found page');
    if (missing.body.includes('replaceState') || missing.body.includes('pathSegmentsToKeep')) {
      fail('unknown path still uses the client-side redirect hack');
    }
    if (missing.body.includes('>COMMAND</h1>')) {
      fail('unknown path served the homepage');
    }

    const missingAsset = await get(origin + '/static/js/does-not-exist.js');
    lines.push(missingAsset.status + ' /static/js/does-not-exist.js');
    if (missingAsset.status !== 404) {
      fail('missing asset returned ' + missingAsset.status + ' instead of 404');
    }

    const nested = await get(origin + '/aerial/not-a-real-section');
    lines.push(nested.status + ' /aerial/not-a-real-section');
    if (nested.status !== 404) fail('unknown nested path returned ' + nested.status);

    console.log(lines.join('\n'));
    console.log('Verified ' + PAGES.length + ' sitemap URLs return 200 with their own content.');
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
