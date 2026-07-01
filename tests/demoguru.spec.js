import{test,expect}from'@playwright/test';
test('demoguru test',async({page})=>{
     test.setTimeout(60000); 
    await page.goto('https://demo.guru99.com/V4/index.php');
    await page.locator('input[name="uid"]').fill('mngr663755');
    await page.locator('input[name="password"]').fill('zytytYs');
    await page.locator('input[name="btnLogin"]').click();

});