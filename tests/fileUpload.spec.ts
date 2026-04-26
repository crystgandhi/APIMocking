import { test, expect, Locator } from '@playwright/test';
import path from 'path';

test('Login Automation', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const [fileChooser]=await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#singleFileInput').click()
    ]);
const  filePath=path.resolve('test-files/sample.pdf');
await fileChooser.setFiles(filePath);
await page.getByRole('button' , {name:'Upload Single File'}).click();
const fileStatus:Locator = page.locator('#singleFileStatus');
// Wait for text 
await expect(fileStatus).toContainText('Single file selected');
});