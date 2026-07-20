import { test, expect, request } from '@playwright/test'
import { getAllEmployees } from './types/get-all-employees'
test('Status code is 200', async ({ request }) => {
    const response = await request.get('https://dummy.restapiexample.com/api/v1/employees')
    const responseBody: getAllEmployees = await response.json()
    expect(response.status()).toBe(200)
    const empData = responseBody.data;
    console.log(empData[0].id)
    console.log(empData[0].employee_age)
    console.log(empData[0].employee_name)
    console.log(empData[0].employee_salary)
    console.log(empData[0].profile_image)

})
test.only('Validate response is array', async ({ request }) => {
    const response = await request.get('https://dummy.restapiexample.com/api/v1/employees')
    const responseBody:getAllEmployees=await response.json()
    expect (typeof responseBody).toBe('object');
    c
    // expect(Array.isArray(responseBody.data)).toBe(true);                
    
})

