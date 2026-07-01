import{test,expect}from'@playwright/test';
test.only('Select values from dropdown',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
// await page.locator('#dropdown-class-example').selectOption({ value: 'option3' });
await page.locator('#dropdown-class-example').selectOption('Option2');
// await page.locator('#dropdown-class-example').selectOption({ index: 1});
await page.waitForTimeout(3000);
 const selectedOption = await page.locator('#dropdown-class-example option:checked').textContent();

    console.log( selectedOption);    
});


test('Validate one option from dropdown', async ({ page })=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const expectedOption = 'Option1';
    await page.locator('#dropdown-class-example').selectOption({ index: 1});

    const selectedOption=await page.locator('#dropdown-class-example option:checked').textContent();

    console.log(selectedOption);
    expect(selectedOption).toEqual(expectedOption);
});




test('Get all dropdown values', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const dropdownValues = await page.locator('select#dropdown-class-example option').allTextContents();

    console.log(dropdownValues);
});




test('Select Values Validation with textContent', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const optionsCount = await page.locator('select#dropdown-class-example option').count();
    const actualDropdownValues = [];
    for (let i = 0; i < optionsCount; i++) {
        const textValue = await page.locator('select#dropdown-class-example option').nth(i).textContent();

        actualDropdownValues.push(textValue);
    }

    console.log(`Dropdown values: ${actualDropdownValues}`);
});






test('Validate all dropdown values', async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const expectedDropdownValues = [
        'Select','Option1','Option2','Option3'
    ];

    console.log('Expected Dropdown Values:', expectedDropdownValues);
    const actualDropdownValues = await page.locator('#dropdown-class-example option').allTextContents();
    console.log('Actual Dropdown Values:', actualDropdownValues);
    expect(actualDropdownValues).toEqual(expectedDropdownValues);
});

