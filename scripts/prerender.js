// GitHub Pages returns HTTP 404 for a path that is not a file, even when
// 404.html redirects in the browser. Publish each sitemap route as HTML so
// /aerial is aerial.html (200) and /aerial/ is aerial/index.html (200).

const http = require('http');
const fs = require('fs');
const path = require('path');
const { JSDOM, ResourceLoader, VirtualConsole } = require('jsdom');
const { PAGES, SITE, canonicalUrl } = require('./routes');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const TEMPLATE_PATH = path.join(BUILD_DIR, 'index.html');

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function scriptSrcs(html) {
  return Array.from(html.matchAll(/<script[^>]*\ssrc="([^"]+)"/g), (match) => match[1]);
}

function replaceMeta(html, attr, key, content) {
  const re = new RegExp('<meta ' + attr + '="' + key + '" content="[^"]*"\\s*/?>');
  const tag = '<meta ' + attr + '="' + key + '" content="' + escapeHtml(content) + '"/>';
  if (!re.test(html)) {
    return html.replace('</head>', () => tag + '</head>');
  }
  return html.replace(re, () => tag);
}

function replaceCanonical(html, href) {
  const re = /<link rel="canonical" href="[^"]*"\s*\/?>/;
  if (!re.test(html)) throw new Error('Built index.html is missing the canonical link');
  return html.replace(re, () => '<link rel="canonical" href="' + escapeHtml(href) + '"/>');
}

function replaceTitle(html, title) {
  if (!/<title>[\s\S]*?<\/title>/.test(html)) {
    throw new Error('Built index.html is missing a title');
  }
  return html.replace(/<title>[\s\S]*?<\/title>/, () => '<title>' + escapeHtml(title) + '</title>');
}

function replaceRoot(html, inner) {
  const token = '<div id="root"></div>';
  if (!html.includes(token)) {
    throw new Error('Built index.html is missing an empty <div id="root"></div>');
  }
  return html.replace(token, () => '<div id="root">' + inner + '</div>');
}

function applyPage(template, page, rendered) {
  let html = replaceRoot(template, rendered.rootHtml);
  if (!page.updateHead) return html;
  html = replaceTitle(html, rendered.title);
  html = replaceMeta(html, 'name', 'description', rendered.description);
  html = replaceMeta(html, 'property', 'og:title', rendered.title);
  html = replaceMeta(html, 'property', 'og:description', rendered.description);
  html = replaceMeta(html, 'property', 'og:url', rendered.canonical);
  html = replaceMeta(html, 'name', 'twitter:title', rendered.title);
  html = replaceMeta(html, 'name', 'twitter:description', rendered.description);
  html = replaceCanonical(html, rendered.canonical);
  return html;
}

function outputFiles(pagePath) {
  if (pagePath === '/') return [path.join(BUILD_DIR, 'index.html')];
  const name = pagePath.replace(/^\//, '');
  return [
    path.join(BUILD_DIR, name + '.html'),
    path.join(BUILD_DIR, name, 'index.html'),
  ];
}

function readSitemapPaths() {
  const xml = fs.readFileSync(path.join(BUILD_DIR, 'sitemap.xml'), 'utf8');
  const locs = Array.from(xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g), (match) => match[1]);
  return locs.map((loc) => {
    const url = new URL(loc);
    if (url.origin !== SITE) {
      throw new Error('Sitemap URL is not on ' + SITE + ': ' + loc);
    }
    if (url.search || url.hash) {
      throw new Error('Sitemap URL must not include a query or hash: ' + loc);
    }
    const pathname = url.pathname === '/' ? '/' : url.pathname.replace(/\/$/, '');
    return pathname;
  });
}

function assertSitemapMatchesPages() {
  const listed = readSitemapPaths();
  const expected = PAGES.map((page) => page.path);
  const same = listed.length === expected.length && listed.every((pathName, index) => pathName === expected[index]);
  if (!same) {
    throw new Error(
      'sitemap.xml does not match the routes that will be published.\n' +
      'sitemap: ' + listed.join(', ') + '\n' +
      'routes: ' + expected.join(', ')
    );
  }
}

function startServer(indexHtml) {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://127.0.0.1');
    const rel = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    const file = path.resolve(BUILD_DIR, rel);
    const inBuild = file === BUILD_DIR || file.startsWith(BUILD_DIR + path.sep);
    if (inBuild && rel && fs.existsSync(file) && fs.statSync(file).isFile()) {
      const ext = path.extname(file).toLowerCase();
      const type = ext === '.css' ? 'text/css' : ext === '.js' ? 'text/javascript' : 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type });
      fs.createReadStream(file).pipe(res);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(indexHtml);
  });
  return new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => resolve(server));
  });
}

function installShims(window) {
  // The production bundle's scheduler uses a setImmediate polyfill that picks
  // jsdom's postMessage and then never fires, so React effects would not run.
  // A real setImmediate makes document.title and the route meta update.
  window.setImmediate = function setImmediate(fn) {
    return setTimeout(fn, 0);
  };
  window.clearImmediate = function clearImmediate(id) {
    clearTimeout(id);
  };
  window.scrollTo = function scrollTo() {};
  window.scroll = window.scrollTo;
  if (typeof window.IntersectionObserver === 'undefined') {
    window.IntersectionObserver = class IntersectionObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() { return []; }
    };
  }
  if (typeof window.matchMedia !== 'function') {
    window.matchMedia = function matchMedia() {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent() { return false; },
      };
    };
  }
}

function renderPage(origin, template, page) {
  const virtualConsole = new VirtualConsole();
  const pageErrors = [];
  virtualConsole.on('jsdomError', (err) => {
    pageErrors.push(err && err.message ? err.message : String(err));
  });

  const dom = new JSDOM(template, {
    url: origin + page.path,
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    virtualConsole,
    resources: new SameOriginLoader(origin),
    beforeParse(window) {
      installShims(window);
    },
  });

  const deadline = Date.now() + 20000;
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      const document = dom.window.document;
      const h1 = document.querySelector('h1');
      const heading = h1 ? h1.textContent : '';
      const ready = heading === page.heading && document.title === page.title;
      if (!ready && Date.now() < deadline) return;
      clearInterval(timer);
      const descriptionEl = document.querySelector('meta[name="description"]');
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      const rendered = {
        title: document.title,
        description: descriptionEl ? descriptionEl.getAttribute('content') : '',
        canonical: canonicalEl ? canonicalEl.getAttribute('href') : '',
        rootHtml: document.getElementById('root') ? document.getElementById('root').innerHTML : '',
        errors: pageErrors,
      };
      dom.window.close();
      if (!ready) {
        reject(new Error(
          page.path + ' did not render.\n' +
          'title: ' + rendered.title + '\n' +
          'h1: ' + heading + '\n' +
          'errors: ' + pageErrors.slice(0, 8).join(' | ')
        ));
        return;
      }
      if (rendered.description !== page.description) {
        reject(new Error(page.path + ' meta description does not match site content'));
        return;
      }
      if (rendered.canonical !== canonicalUrl(page.path)) {
        reject(new Error(page.path + ' canonical is ' + rendered.canonical));
        return;
      }
      if (!rendered.rootHtml.includes(page.heading) || !rendered.rootHtml.includes(page.body)) {
        reject(new Error(page.path + ' rendered HTML is missing the page content'));
        return;
      }
      resolve(rendered);
    }, 25);
  });
}

class SameOriginLoader extends ResourceLoader {
  constructor(origin) {
    super();
    this.origin = origin;
  }

  fetch(url, options) {
    if (!url.startsWith(this.origin)) {
      const skipped = Promise.resolve(Buffer.from(''));
      skipped.abort = function abort() {};
      return skipped;
    }
    return super.fetch(url, options);
  }
}

async function main() {
  if (!fs.existsSync(TEMPLATE_PATH)) {
    throw new Error('Missing build/index.html. Run the production build first.');
  }
  assertSitemapMatchesPages();
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  const templateScripts = scriptSrcs(template);
  if (templateScripts.length === 0) {
    throw new Error('Built index.html does not load the app scripts');
  }

  const server = await startServer(template);
  const origin = 'http://127.0.0.1:' + server.address().port;
  try {
    for (const page of PAGES) {
      const rendered = await renderPage(origin, template, page);
      const html = applyPage(template, page, rendered);
      if (scriptSrcs(html).join('\n') !== templateScripts.join('\n')) {
        throw new Error(page.path + ' lost its script tags during prerender');
      }
      for (const file of outputFiles(page.path)) {
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }
      console.log('prerendered ' + page.path + ' (' + Buffer.byteLength(html) + ' bytes)');
    }
  } finally {
    await new Promise((resolve) => server.close(resolve));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
