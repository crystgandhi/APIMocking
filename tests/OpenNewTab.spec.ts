import {test,expect} from '@playwright/test';

test('Open New Tab', async ({ page, context }) => {
  await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.click('button[onclick="myFunction()"]') // correct selector
  ]);
  await newPage.waitForLoadState();
  const newPageTitle = await newPage.title(); // add await
  console.log(newPageTitle);
});