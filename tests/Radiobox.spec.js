import{test,expect}from'@playwright/test';
test('Radiobox test',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.getByRole('radio').nth(2).check();
    await page.getByRole('radio').nth(1).click();
    await page.waitForTimeout(3000);
    
})