import{test,expect}from'@playwright/test';
test('Double click test',async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await page.locator('button:has-text("Double Click Me")').dblclick();
    await expect(page.getByText('You have done a double click')).toBeVisible();

});
test('Right click test',async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    await page.locator('button:has-text("Right Click Me")').click({button:'right'});
    await expect(page.getByText('You have done a right click')).toBeVisible();    
    await page.waitForTimeout(3000);

});


test.only('click test',async({page})=>{
    await page.goto('https://demoqa.com/buttons');
    // await page.locator('button:has-text("Click Me")').click();
    await page.locator('button:has-text("Click Me")').last().click();
    await expect(page.getByText('You have done a dynamic click')).toBeVisible();    
    await page.waitForTimeout(3000);

});