import{test,expect}from'@playwright/test';
test('Validate Text',async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    const visibleText=await page.locator('h1:has-text("Buttons")').textContent();
    console.log(visibleText);

});
