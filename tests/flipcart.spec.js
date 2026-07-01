import { test, expect } from '@playwright/test';
test('flipcart test', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await page.getByText('Login').click();
    await page.locator('input.c3Bd2c.yXUQVt').fill('6301897942');
    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.pause();
    await page.getByRole('link', { name: 'Home' }).click();

    await page.getByRole('link', { name: 'Covers' }).click();
    await page.locator('input[name="q"]').fill('vivo v70 elite')
    await page.locator('input[name="q"]').press('Enter');
    await page.locator('div:has-text("vivo V70 Elite (Passion Red 2026, 256 GB)")').click();



});