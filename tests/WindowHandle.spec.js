import{test,expect}from'@playwright/test';
test.describe('Window Handle',()=>{
    test('Handling Window',async({page,context})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.waitForLoadState('domcontentloaded');
        const [newPopup] = await Promise.all([
            page.waitForEvent('popup'),
            await page.getByRole('button', { name:'Open Window'}).click()

        ])
        await newPopup.waitForTimeout(5000);
        await newPopup.waitForLoadState('domcontentloaded');
        await expect(newPopup.locator('.ParkwebGetDomain_getDomainTextDomain__QL4EZ')).toHaveText('qaclickacademy.com');

    })
})