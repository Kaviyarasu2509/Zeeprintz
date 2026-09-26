const puppeteer = require('puppeteer');
const assert = require('assert');
(async () => {
  const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(window, 'sessionStorage', { get() { throw new Error('Storage disabled'); } });
    });
    for (const width of [360, 768, 1440]) {
      await page.setViewport({ width, height: 900, isMobile: width < 768, hasTouch: width < 768 });
      for (const route of ['/', '/services', '/gallery', '/about', '/pricing', '/contact', '/services/visiting-card-printing-coimbatore']) {
        await page.goto(`http://localhost:3010${route}`, { waitUntil: 'networkidle2' });
        await page.waitForSelector('.navbar');
        const result = await page.evaluate(() => ({ h1: !!document.querySelector('h1'), overflow: document.documentElement.scrollWidth > innerWidth + 1, text: document.body.innerText.length }));
        assert(result.h1 && result.text > 300, JSON.stringify({ width, route, result }));
        assert(!result.overflow, `Horizontal overflow ${width} ${route}`);
        if (route === '/' && width < 768) {
          await page.click('.navbar__hamburger');
          assert.strictEqual(await page.$eval('.navbar__hamburger', el => el.getAttribute('aria-expanded')), 'true');
          await page.keyboard.press('Escape');
          assert.strictEqual(await page.$eval('.navbar__hamburger', el => el.getAttribute('aria-expanded')), 'false');
        }
        console.log('PASS', width, route);
      }
      await page.screenshot({ path: `build/check-${width}.png` });
    }
    await page.setJavaScriptEnabled(false);
    await page.goto('http://localhost:3010/');
    assert(await page.$('a[href="tel:+917598951141"]'));
    assert.deepStrictEqual(errors, []);
    console.log('PASS disabled storage, no-JavaScript fallback, no runtime errors');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
