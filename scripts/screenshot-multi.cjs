const { chromium } = require('playwright');

const pages = [
  { path: '/', name: 'home' },
  { path: '/business', name: 'business' },
  { path: '/about', name: 'about' },
  { path: '/faq', name: 'faq' },
  { path: '/solutions', name: 'solutions' },
  { path: '/contact', name: 'contact' },
  { path: '/calculator', name: 'calculator' },
  { path: '/send-money', name: 'send-money' },
  { path: '/security', name: 'security' },
  { path: '/pk', name: 'pk' },
];

(async () => {
  const browser = await chromium.launch({
    executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const outDir = process.argv[2] || '/tmp';
  const only = process.argv[3] ? process.argv[3].split(',') : null;

  for (const p of pages) {
    if (only && !only.includes(p.name)) continue;
    await page.goto(`http://localhost:5173${p.path}`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: `${outDir}/preview-${p.name}.png`, fullPage: true });
    console.log(`captured ${p.name}`);
  }

  await browser.close();
})();
