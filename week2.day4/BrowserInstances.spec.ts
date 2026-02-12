import { test, chromium, webkit } from '@playwright/test';

// Red Bus in Edge
test('Red Bus in Edge browser', async ({browserName}) => {
    // Launching Edge specifically using the 'msedge' channel
    test.skip(browserName !== 'chromium', 'Skipping: This is the Edge specific test');
    const browser = await chromium.launch({ channel: 'msedge'});
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.redbus.in');
    
    console.log('Red Bus Title:', await page.title());
    console.log('Red Bus URL:', page.url());

    await browser.close(); // Clean up
});

// Flipkart in WebKit

test('Flipkart in WebKit browser', async ({browserName}) => {
  test.skip(browserName !== 'webkit', 'Skipping: This is the Webkit specific test');
    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.flipkart.com');
    
    console.log('Flipkart Title:', await page.title());
    console.log('Flipkart URL:', page.url());

    await browser.close(); // Clean up
});