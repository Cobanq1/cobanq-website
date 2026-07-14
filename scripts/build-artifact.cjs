const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');

const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/);
const descMatch = html.match(/<meta name="description" content="([\s\S]*?)"\s*\/?>/);
const cssMatch = html.match(/<link rel="stylesheet"[^>]*href="\/(assets\/[^"]+\.css)"[^>]*>/);
const jsMatch = html.match(/<script type="module"[^>]*src="\/(assets\/[^"]+\.js)"[^>]*><\/script>/);

const css = fs.readFileSync(path.join(distDir, cssMatch[1]), 'utf8');
const js = fs.readFileSync(path.join(distDir, jsMatch[1]), 'utf8');

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
console.log(`Wrote self-contained artifact to ${outPath} (${(out.length / 1024).toFixed(0)} KB)`);
