// Static server that follows the GitHub Pages file rules this site is hosted with.
// It does not fall back to index.html for unknown paths.
//
// - /page serves page.html when that file exists (HTTP 200, no redirect)
// - /page/ serves page/index.html when that directory exists (HTTP 200)
// - a directory with no sibling .html file redirects to the trailing-slash URL
// - anything else serves 404.html with HTTP 404

const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.gif': 'image/gif',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json',
};

function resolveStatic(buildDir, pathname) {
  const buildRoot = path.resolve(buildDir);
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch (err) {
    return { type: 'notfound' };
  }
  if (!decoded.startsWith('/') || decoded.includes('\0')) {
    return { type: 'notfound' };
  }

  const inside = (abs) => abs === buildRoot || abs.startsWith(buildRoot + path.sep);
  const absOf = (urlPath) => {
    const rel = urlPath.replace(/^\/+/, '');
    const abs = path.resolve(buildRoot, rel);
    if (!inside(abs)) return null;
    return abs;
  };

  if (decoded === '/') {
    const index = path.join(buildRoot, 'index.html');
    return fs.existsSync(index) ? { type: 'file', file: index } : { type: 'notfound' };
  }

  const withSlash = decoded.endsWith('/');
  const trimmed = withSlash ? decoded.slice(0, -1) : decoded;
  const abs = absOf(trimmed);
  if (!abs) return { type: 'notfound' };

  if (!withSlash) {
    if (fs.existsSync(abs) && fs.statSync(abs).isFile()) {
      return { type: 'file', file: abs };
    }
    const htmlFile = abs + '.html';
    if (inside(htmlFile) && fs.existsSync(htmlFile) && fs.statSync(htmlFile).isFile()) {
      return { type: 'file', file: htmlFile };
    }
    if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
      return { type: 'redirect', location: trimmed + '/' };
    }
    return { type: 'notfound' };
  }

  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
    const index = path.join(abs, 'index.html');
    if (fs.existsSync(index) && fs.statSync(index).isFile()) {
      return { type: 'file', file: index };
    }
  }
  return { type: 'notfound' };
}

function createGithubPagesServer(buildDir) {
  const root = path.resolve(buildDir);
  return http.createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD' });
      res.end();
      return;
    }

    let url;
    try {
      url = new URL(req.url, 'http://127.0.0.1');
    } catch (err) {
      sendNotFound(req, res, root);
      return;
    }

    const resolved = resolveStatic(root, url.pathname);
    if (resolved.type === 'file') {
      sendFile(req, res, resolved.file);
      return;
    }
    if (resolved.type === 'redirect') {
      const location = resolved.location + url.search;
      res.writeHead(301, {
        Location: location,
        'Content-Length': 0,
        'Cache-Control': 'no-cache',
      });
      res.end();
      return;
    }
    sendNotFound(req, res, root);
  });
}

function sendFile(req, res, file) {
  const type = MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
  const stat = fs.statSync(file);
  res.writeHead(200, {
    'Content-Type': type,
    'Content-Length': stat.size,
    'Cache-Control': 'no-cache',
  });
  if (req.method === 'HEAD') {
    res.end();
    return;
  }
  fs.createReadStream(file).pipe(res);
}

function sendNotFound(req, res, buildDir) {
  const file = path.join(buildDir, '404.html');
  const body = fs.existsSync(file) ? fs.readFileSync(file) : Buffer.from('Not found\n');
  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8',
    'Content-Length': body.length,
    'Cache-Control': 'no-cache',
  });
  if (req.method === 'HEAD') res.end();
  else res.end(body);
}

function listen(buildDir, port) {
  const server = createGithubPagesServer(buildDir);
  return new Promise((resolve) => {
    server.listen(port, '127.0.0.1', () => resolve(server));
  });
}

if (require.main === module) {
  const buildDir = path.resolve(process.argv[2] || 'build');
  const port = Number(process.env.PORT || 4173);
  listen(buildDir, port).then((server) => {
    const address = server.address();
    console.log('Serving ' + buildDir + ' with GitHub Pages rules at http://127.0.0.1:' + address.port);
  });
}

module.exports = {
  resolveStatic,
  createGithubPagesServer,
  listen,
};
