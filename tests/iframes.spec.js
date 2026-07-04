import{test,expect}from'@playwright/test';
test('Handle Frame',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const frameLocator=page.frameLocator('#courses-iframe');
    await frameLocator.getByRole('link',{name:'Courses',exact:true}).click();
    await frameLocator.getByRole('link',{name:'Browse products',exact:true}).click();
    await expect(frameLocator.getByRole('heading',{name:'All-Access Membership'})).toBeVisible();

})