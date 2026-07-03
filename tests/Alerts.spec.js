import{test,expect}from'@playwright/test';
test.describe('Alerts Handling',()=>{
    test('Handle alerts',async({page})=>{
            await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
            await page.getByRole('placeholder', { name:'Enter Your Name'}).fill('Lavanya');
            page.on('dialog',async dialog=>{
                
                console.log(dialog.message());
                dialog.accept();
            })
            await page.locator('#alertbtn').click();
            
   
       
});

test('confirm and dismiss alerts fail test',async({page})=>{
            await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
             await page.getByRole('placeholder', { name:'Enter Your Name'}).fill('Lavanya');

            page.on('dialog',async dialog=>{
                console.log(dialog.message());
                dialog.accept();
            })
            await page.locator('#alertbtn').click();
            
   
        page.once('dialog',async dialog=>{
            console.log(dialog.message());
            await dialog.accept();

        })
        await page.locator('#confirmbtn').click();
});
test.only('confirm and dismiss alerts pass test',async({page})=>{
            await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
             await page.getByPlaceholder('Enter Your Name').fill('Lavanya');

            page.once('dialog',async dialog=>{
                console.log(dialog.message());
                dialog.accept();
            })
            await page.locator('#alertbtn').click();
            
   
        page.once('dialog',async dialog=>{
            console.log(dialog.message());
            await dialog.dismiss();
           

        })
        await page.locator('#confirmbtn').click();
});
 });
