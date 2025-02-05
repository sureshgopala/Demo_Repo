
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

Given('I am on the login page', async ({ page }) => {
  await page.goto('https://example.com/login');
});

When('I enter username {string}', async ({ page }, username) => {
  await page.fill('#username', username);
});

When('I enter password {string}', async ({ page }, password) => {
  await page.fill('#password', password);
});

Then('I should see the dashboard', async ({ page }) => {
  await expect(page).toHaveURL('https://example.com/dashboard');
});
  