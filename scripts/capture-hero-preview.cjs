const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage({
      viewport: { width: 1200, height: 630 },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    let loaded = false;
    for (let attempt = 0; attempt < 30; attempt++) {
      try {
        await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle", timeout: 10000 });
        loaded = true;
        break;
      } catch (_) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    if (!loaded) throw new Error("Local website failed to start");
    await page.locator("section.min-h-screen").first().waitFor({ state: "visible" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(1200);
    fs.mkdirSync("dist", { recursive: true });
    await page.screenshot({ path: "dist/hero-preview.png", type: "png", animations: "disabled" });
    console.log("Captured real Qadr AI hero at 1200x630");
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exit(1); });
