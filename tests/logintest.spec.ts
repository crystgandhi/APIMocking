import { test, expect } from '@playwright/test';

test('Login Automation', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await expect(page).toHaveTitle('Swag Labs');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  const firstItem = page.locator('div[data-test="inventory-item"]').first();

  await expect(firstItem).toContainText('Sauce Labs Backpack');
});