import { test as setup, expect } from '@playwright/test';

setup('authenticate', async ({ page }) => {
    // Perform authentication steps. Replace these actions with your own.
    await page.goto('https://demoblaze.com/');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').click();
    await page.locator('#loginusername').fill('test');
    await page.locator('#loginusername').press('Tab');
    await page.locator('#loginpassword').fill('test');
    await page.getByRole('button', { name: 'Log in' }).click();
    // Wait until the page receives the cookies.

    // Alternatively, you can wait until the page reaches a state where all cookies are set.
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();

    // End of authentication steps.

    await page.context().storageState({ path: './login-auth.json' });
});