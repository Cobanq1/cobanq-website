// Builds the main site as ONE self-contained HTML file (CSS + JS inlined),
// for publishing as a preview artifact.
//
// It runs its own single-entry build first: the default multi-entry build
// splits shared code into extra chunks that a single inlined file can't
// resolve. Usage: node scripts/build-artifact.cjs <outFile>
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist-artifact');

execFileSync('npx', ['vite', 'build', '--outDir', 'dist-artifact', '--emptyOutDir'], {
  cwd: root,
  env: { ...process.env, SINGLE_ENTRY: '1' },
  stdio: 'inherit',
});

const html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
const descMatch = html.match(/<meta name="description" content="([\s\S]*?)"\s*\/?>/);
const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/);
const jsMatch = html.match(/<script type="module"[^>]*src="\/(assets\/[^"]+\.js)"[^>]*><\/script>/);

const css = fs.readFileSync(path.join(distDir, cssMatch[1]), 'utf8');
const js = fs.readFileSync(path.join(distDir, jsMatch[1]), 'utf8');

// A bare `import` here would mean the build still split into chunks, which
// cannot work once inlined — fail loudly rather than ship a blank page.
if (/^\s*import[\s{"']/.test(js)) {
  console.error('Entry chunk still imports another chunk — artifact would be broken.');
  process.exit(1);
}

const out = `<meta charset="UTF-8" />
<title>${titleMatch[1]}</title>
<meta name="description" content="${descMatch ? descMatch[1] : ''}" />
<style>
${css}
</style>
<div id="root"></div>
<script type="module">
${js}
</script>
`;

const outPath = process.argv[2];
fs.writeFileSync(outPath, out);
fs.rmSync(distDir, { recursive: true, force: true });
console.log(`Wrote self-contained artifact to ${outPath} (${(out.length / 1024).toFixed(0)} KB)`);
