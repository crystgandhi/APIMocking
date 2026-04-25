import { test, request, expect } from '@playwright/test';

test('Api Mocking_01', async ({ page }) => {
//route.fulfill() → sends a custom response back
//The original request never reaches the server
    await page.route('**/api/v1/fruits', async route => {
        const json = [
            { name: 'Kate', id: 'APY1' },
            { name: 'Candy', id: 'APY2' },
            { name: 'Nick', id: 'APY3' }
        ]
        await route.fulfill({ json });
    });
    await page.goto('https://demo.playwright.dev/api-mocking');
     await expect(page.getByText('Kate')).toBeVisible();
     await page.pause();

})