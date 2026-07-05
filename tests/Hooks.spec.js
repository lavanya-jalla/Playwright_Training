import{test,expect}from '@playwright/test';
test.describe('Hooks',()=>{
      
      test('Hooks execution', async ({ page }) => {
        console.log("Executing Test");
      
    });   
    test.beforeAll(() => {
       console.log("Database connection succesfull");
    })
    test.beforeEach(()=>{
        console.log("User login sucessful");
    })
    test.afterEach(()=>{
        console.log("User logged out");
    })
    test.afterAll(()=>{
        console.log("Database connection terminated");
    })
    


    
})

