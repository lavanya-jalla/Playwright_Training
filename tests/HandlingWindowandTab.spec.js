import{test,expect}from'@playwright/test';
test.describe('Handling Window and Tabs',()=>{
    test('tab Handling',async({page,context})=>{
        await page.goto('https://demoqa.com/browser-windows');
        const [newTab]=await Promise.all([
            context.waitForEvent('page'),
            await page.getByRole('button', { name:'New Tab'}).click()
        ]);
    })


    test('window Handling',async({page,context})=>{
        await page.goto('https://demoqa.com/browser-windows');
                await page.waitForLoadState('domcontentloaded');

        const [newWindow]=await Promise.all([
            page.waitForEvent('popup'),
            await page.getByRole('button', { name:'New Window',exact:true}).click()
        ]);
        await newWindow.waitForLoadState('domcontentloaded',{timeout:5000});
        await expect(newWindow.locator('#sampleHeading')).toHaveText('This is a sample page');
    })


    
    test.only('Window handling with message',async({page,context})=>{
         await page.goto('https://demoqa.com/browser-windows');
                await page.waitForLoadState('domcontentloaded');
                const [newWindowMsg]=await Promise.all([
                    page.waitForEvent('popup'),
                    await page.getByRole('button', { name:'New Window Message',exact:true}).click()

                ]);
                console.log(await newWindowMsg.locator('body').textContent());


    })
    
})