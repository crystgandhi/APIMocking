import { test, expect } from '@playwright/test';

test('Dynamic Button', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');
  const toggleBtn=page.getByRole('button', {name:/START|STOP/});
  await expect(toggleBtn).toHaveText('START')
  await toggleBtn.click();
  await page.waitForTimeout(5000);
  await expect(toggleBtn).toHaveText('STOP')
});