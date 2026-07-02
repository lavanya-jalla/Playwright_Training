import{test,expect}from'@playwright/test';
test('Checkbox test',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.getByRole('checkbox').nth(0).check();
    await page.getByRole('checkbox').nth(0).uncheck();
    await page.getByRole('checkbox').nth(2).check();
    // await page.getByRole('checkbox').nth(1).check();
    const isChecked=await page.getByRole('checkbox').nth(2).isChecked();
    console.log(isChecked);

    await page.waitForTimeout(3000);
})
test('to get checkbox values',async({page})=>{
     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
     const checkboxescount=await page.locator('#checkbox-example').count();
     const actualCheckboxesValues=[];
     for(let i=0;i<checkboxescount;i++){
        const textValue=await page.locator('#checkbox-example').nth(i).textContent();
        actualCheckboxesValues.push(textValue);
     }
     console.log(`Checkbox values: ${actualCheckboxesValues}`);
})

test.only('Select all checkboxes',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const checkboxes = page.locator('#checkbox-example input[type="checkbox"]');
        const count = await checkboxes.count();

    for(let i=0;i<count;i++){
        await checkboxes.nth(i).check();
    }
        await page.waitForTimeout(3000);

})
   