import {test,expect} from '@playwright/test';


//Write a Playwright script to click a button that appears only after an API call completes.

test('Click button after API completes', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

await page.fill('#user-name', 'standard_user');
await page.fill('#password', 'secret_sauce');
await page.click('#login-button');

// wait for page after login
await page.waitForURL('**/inventory.html');

await page.locator('.inventory_list').waitFor(); // UI-based wait

  await page.locator('#add-to-cart-sauce-labs-backpack').first().click();
  await page.pause();
});