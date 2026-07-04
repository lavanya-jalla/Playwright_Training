import{test,expect}from'@playwright/test';
test.describe('Table Data',()=>{
    test('Handling Table Data',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const table=page.locator('.tableFixHead>#product')
        const rowCount=await table.locator('tbody>tr').count();
        for(let i=0;i<rowCount;i++){
            const name=await table.locator('tbody>tr').nth(i).locator('td').nth(0).textContent();
            const Position=await table.locator('tbody>tr').nth(i).locator('td').nth(1).textContent();
            const city=await table.locator('tbody>tr').nth(i).locator('td').nth(2).textContent();
            const Amount=await table.locator('tbody>tr').nth(i).locator('td').nth(3).textContent();
            console.log(`Name: ${name}, Position: ${Position}, City: ${city}, Amount: ${Amount}`);

        }
    })
    test('Handiling Table data with two loops',async({page})=>{
         await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const table=page.locator('.tableFixHead>#product')
        const rowCount=await table.locator('tbody>tr').count();
        for(let i=0;i<rowCount;i++){
            let rowData="";
            const colCount=await table.locator('tbody>tr').nth(i).locator('td').count();
            for(let j=0;j<colCount;j++){
                 const data = await table.locator('tbody>tr').nth(i).locator('td').nth(j).textContent();
                 rowData+=data+" ";
    }
     console.log(rowData);

}
  })
test('Handling Table Data with conditions',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const table=page.locator('.tableFixHead>#product')
        const rowCount=await table.locator('tbody>tr').count();
        for(let i=0;i<rowCount;i++){
            const name=await table.locator('tbody>tr').nth(i).locator('td').nth(0).textContent();
            const Position=await table.locator('tbody>tr').nth(i).locator('td').nth(1).textContent();
            const city=await table.locator('tbody>tr').nth(i).locator('td').nth(2).textContent();
            const Amount=await table.locator('tbody>tr').nth(i).locator('td').nth(3).textContent();
            
            if(Number(Amount?.trim())>25){
                console.log(`Name: ${name}, Position: ${Position}, City: ${city}, Amount: ${Amount}`);
            }
        }
    })
    test('Handle table headers with assertions',async({page})=>{
        await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
        const table=page.locator('.tableFixHead>#product')
        await table.locator('tbody').getByRole('row').first().isVisible({timeout:5000});
        const rowsCount=await table.locator('tbody').getByRole('row').count();
        await expect(table.getByRole('row')).toHaveCount(10);
        const expectedHeader = ['Name', 'Position', 'City', 'Amount'];
        const header=await table.getByRole('columnheader').allTextContents();
        console.log(header);
        await expect(header).toEqual(expectedHeader);
    })

    })

