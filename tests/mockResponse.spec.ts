import { test, request, expect } from '@playwright/test';

test('Api Mocking_01', async ({ page }) => {
//route.fulfill() → sends a custom response back
//The original request never reaches the server
    await page.route('**/api/v1/fruits', async route => {
        const response=await route.fetch();
        const json=await response.json();
       json.push({ name: 'Kate', id: 'APY1' });
            json.push({ name: 'Candy', id: 'APY2' });
             json.push({ name: 'Nick', id: 'APY3' });
        await route.fulfill({ response, json });
    });
    await page.goto('https://demo.playwright.dev/api-mocking');
    await page.waitForTimeout(2000);
     await expect(page.getByText('Kate')).toBeVisible();
     await page.screenshot({path:'screenshots/imag.png', fullPage:true});
})