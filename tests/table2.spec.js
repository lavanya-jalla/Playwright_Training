import{test,expect}from'@playwright/test';
test.describe('Table Data',()=>{
test('Table Data',async({page})=>{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
            await page.waitForLoadState('domcontentloaded');
    const table=page.locator('.table-display')
        const rowCount=await table.locator('tbody>tr').count();
        for(let i=1;i<rowCount;i++){
            const Instructor=await table.locator('tbody>tr').nth(i).locator('td').nth(0).textContent();
            const Course=await table.locator('tbody>tr').nth(i).locator('td').nth(1).textContent();
            const Price=await table.locator('tbody>tr').nth(i).locator('td').nth(2).textContent();
            // console.log(`Instructor: ${Instructor}, Course: ${Course}, Price: ${Price}`);
        }
            if(Number(Price?.trim())>30){
                console.log(`Instructor: ${Instructor}, Course: ${Course}, Price: ${Price}`);
           
    }
    })
    test.only('Handle table headers with assertions',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        await page.waitForLoadState('domcontentloaded');

        const table=page.locator('.table-display')
        await table.locator('tbody').getByRole('row').first().isVisible({timeout:3000});
        const rowsCount=await table.locator('tbody').getByRole('row').count();
        await expect(table.getByRole('row')).toHaveCount(11);
        const expectedHeader = [ 'Instructor', 'Course', 'Price' ];
        const header=await table.getByRole('columnheader').allTextContents();
        console.log(header);
        await expect(header).toEqual(expectedHeader);
    })

})