import { chromium, FullConfig } from '@playwright/test';
import path from 'path';
import { fileURLToPath } from 'url';
   
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function globalSetup(config: FullConfig) {
  
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  // Wait for successful login 
  await page.waitForURL('**/inventory.html');
  // verify cookies exist
  const cookies = await context.cookies();
  console.log('Cookies after login:', cookies);
  if (cookies.length === 0) {
    throw new Error('❌ No cookies found - login failed');
  }
  // Save storage state
  await context.storageState({ path: 'auth.json' });
  await browser.close();
}
export default globalSetup;

