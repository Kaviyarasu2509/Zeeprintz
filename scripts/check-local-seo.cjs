const puppeteer = require('puppeteer');
const assert = require('assert');

(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(String(error)));
    for (const width of [390, 1440]) {
      await page.setViewport({ width, height: 900 });
      for (const slug of ['visiting-card', 'bill-book', 'brochure', 'sticker']) {
        const path = `/services/${slug}-printing-coimbatore`;
        await page.goto(`http://localhost:3002${path}`, { waitUntil: 'networkidle2' });
        await page.waitForSelector('.service-detail-grid');
        const result = await page.evaluate(() => ({
          canonical: [...document.querySelectorAll('link[rel=canonical]')].map(el => el.href),
          descriptionCount: document.querySelectorAll('meta[name=description]').length,
          headings: document.querySelectorAll('h1').length,
          overflow: document.documentElement.scrollWidth > innerWidth,
          email: !!document.querySelector('a[href="mailto:zeeprintzcbe@gmail.com"]')
        }));
        assert.deepStrictEqual(result.canonical, [`https://zeeprintz.in${path}`]);
        assert.strictEqual(result.descriptionCount, 1);
        assert.strictEqual(result.headings, 1);
        assert.strictEqual(result.overflow, false);
        assert(result.email);
        console.log(width, path, 'PASS');
      }
    }
    await page.goto('http://localhost:3002/contact', { waitUntil: 'networkidle2' });
    const map = await page.$eval('iframe', el => el.src);
    assert(map.includes('0xb243f544a4d7e381'));
    assert(await page.$('a[href="https://g.page/r/CYHj16RE9UOyECE/review"]'));
    assert.deepStrictEqual(errors, []);
    console.log('Contact map, review link and browser errors: PASS');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
