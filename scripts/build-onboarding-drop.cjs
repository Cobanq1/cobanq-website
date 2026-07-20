// Assembles a standalone, Netlify-Drop-ready copy of the CoPay onboarding
// from a finished `npm run build`: the drop folder is the dist output with
// onboarding.html promoted to index.html, so the flow serves at "/".
// Usage: node scripts/build-onboarding-drop.cjs [outDir]
const fs = require("fs");
const path = require("path");

const distDir = path.join(__dirname, "..", "dist");
const outDir = process.argv[2] || path.join(__dirname, "..", "copay-onboarding-drop");

const onboardingHtml = path.join(distDir, "onboarding.html");
if (!fs.existsSync(onboardingHtml)) {
  console.error("dist/onboarding.html not found — run `npm run build` first.");
  process.exit(1);
}

fs.rmSync(outDir, { recursive: true, force: true });
fs.cpSync(distDir, outDir, { recursive: true });

// Promote the onboarding page to the site root and drop the main-site page.
fs.copyFileSync(path.join(outDir, "onboarding.html"), path.join(outDir, "index.html"));
fs.rmSync(path.join(outDir, "onboarding.html"));

// SPA-style fallback so any path (and ?to=pk links) lands on the flow.
fs.writeFileSync(path.join(outDir, "_redirects"), "/* /index.html 200\n");

console.log(`Wrote Netlify Drop folder to ${outDir}`);
