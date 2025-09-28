import { test, expect } from '@playwright/test';

test('Login to Sauce Demo', async ({ page }) => {
  // Open the website
  await page.goto('https://www.saucedemo.com/');

  // Fill login form
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');

  // Click login
  await page.click('#login-button');

  // Validate login successful
  await expect(page.locator('.title')).toHaveText('Products');
});
