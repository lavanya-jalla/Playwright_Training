import{test,expect} from '@playwright/test'
test.describe('Image testing',()=>{
    test('Logo test',async({page})=>{
        await page.goto("https://playwright.dev/");
        const logo=await page.locator('img[alt="Playwright logo"]');
        await expect(logo).toBeVisible();
        await logo.hover();

    })
})
