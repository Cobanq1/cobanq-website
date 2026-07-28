// Packages a finished `npm run build` into a Netlify-Drop-ready copy of the
// whole site: dist plus a `_redirects` file, since Drop deploys don't read
// netlify.toml and React Router needs the SPA fallback.
// Usage: node scripts/build-site-drop.cjs [outDir]
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const outDir = process.argv[2] || path.join(__dirname, "..", "cobanq-site-drop");

if (!fs.existsSync(path.join(distDir, "index.html"))) {
  console.error("dist/index.html not found — run `npm run build` first.");
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.cpSync(distDir, outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "_redirects"), "/* /index.html 200\n");

console.log(`Wrote Netlify Drop folder to ${outDir}`);
