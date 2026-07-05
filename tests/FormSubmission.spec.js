import{test,expect}from '@playwright/test';
test.describe('Submit Form Test',()=>{
    test('Form Submission and validation',async({page})=>{
    await page.goto('https://demoqa.llq.vn/text-box?gender=Male');
    await page.getByPlaceholder('Full Name').fill('Lavanya');
    await page.getByPlaceholder('name@example.com').fill('lavanya123@gmail.com');
    await page.getByPlaceholder('Current Address').fill('Warangal');
    await page.locator('#permanentAddress').fill('Khammam');
    await page.getByRole('button',{name:'Submit'}).click();
    await expect(page.locator('#name')).toContainText('Lavanya');
    await expect(page.locator('#email')).toContainText('lavanya123@gmail.com');
    await expect(page.locator('#permanentAddress')).toContainText('Khammam');
})
test.only('Email table class name has error when email is invalid',async({page})=>{
    await page.goto('https://demoqa.llq.vn/text-box?gender=Male');
    await page.getByPlaceholder('Full Name').fill('Lavanya');
    await page.getByPlaceholder('name@example.com').fill(`invalid-email`);
    await page.getByPlaceholder('Current Address').fill('Warangal');
    await page.locator('#permanentAddress').fill('Khammam');
    await page.getByRole('button',{name:'Submit'}).click();
    await page.getByPlaceholder('name@example.com').getAttribute('class');
    await expect(page.getByPlaceholder('name@example.com')).toHaveClass('mr-sm-2 form-control field-error')
})
})