import{test,expect}from '@playwright/test';
test.describe('Handling Tabs',()=>{
    test.only('Handling Tabs Promise all',async({page,context})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const [_,newPage] = await Promise.all([
           
            await page.locator('#opentab').click(),
             context.waitForEvent('page')
        ]);
        await expect(newPage.locator('.ParkwebGetDomain_getDomainTextInfo__8dLbl')).toHaveText('is parked free, courtesy of GoDaddy.com.');
        await expect(newPage.getByRole('link', { name: 'Privacy Policy' })).toBeVisible();
        const [newSamePage] = await Promise.all([
            context.waitForEvent('page'),   
         await (newPage.getByRole('link', { name: 'Get This Domain' })).click()
        ]);
        await expect(newSamePage.locator('.ms-1')).toHaveText('Premium Domains');
        



    })
    test('Handle with normal promise',async({page,context})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const newPagePromise = context.waitForEvent('page');
        await page.locator('#opentab').click();
        const newPage = await newPagePromise;
                 await expect(newPage.getByRole('link', { name: 'Get This Domain' })).toHaveText('Get This Domain');


    })
    

    
})