import{test,expect}from'@playwright/test';
test('Checkbox test',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('checkbox').nth(1).check();
    await page.getByRole('checkbox').nth(0).uncheck();
    await page.getByRole('checkbox').nth(2).check();  
   
})
test.only('Checkbox test with click',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    // await page.locator('#checkbox-example').click();
    await page.locator('#checkbox-example').nth(1).click();
    await page.waitForTimeout(3000);
    await page.locator('#checkbox-example').nth(2).click();//failing when executed fro mutlple
    
})