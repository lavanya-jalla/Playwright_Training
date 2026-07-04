import{test,expect}from'@playwright/test';
test('handle Mouse Over',async({page})=>{
    await page.goto('https://www.flipkart.com/');
    await page.getByRole('link',{name:'Login'}).hover();
    await page.getByRole('link',{name:'Orders'}).click();
    await expect(page.getByRole('button',{name:'Request OTP'})).toBeVisible();
})