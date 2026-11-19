// GitHub Actions builds with Node 18, which needs the OpenSSL legacy provider
// for react-scripts 4. Netlify's preview image is Node 16, where that flag is
// rejected. Set it only when this Node actually accepts it.
const { spawnSync } = require('child_process');
const path = require('path');

const major = Number(process.versions.node.split('.')[0]);
const env = Object.assign({}, process.env);
if (major >= 17) {
  const current = env.NODE_OPTIONS || '';
  if (current.indexOf('--openssl-legacy-provider') === -1) {
    env.NODE_OPTIONS = (current + ' --openssl-legacy-provider').trim();
  }
}

function run(script, args) {
  const result = spawnSync(process.execPath, [script].concat(args), {
    stdio: 'inherit',
    env: env,
  });
  if (result.error) {
    console.error(result.error);
    process.exit(1);
  }
  if (result.status !== 0) process.exit(result.status || 1);
}

const root = path.join(__dirname, '..');
run(path.join(root, 'node_modules', 'react-scripts', 'bin', 'react-scripts.js'), ['build']);
run(path.join(root, 'scripts', 'prerender.js'), []);
run(path.join(root, 'scripts', 'verify-static-routes.js'), []);
