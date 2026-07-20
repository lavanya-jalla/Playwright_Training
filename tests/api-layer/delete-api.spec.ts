import { test, expect, request } from '@playwright/test'
test('Status code is 200', async ({ request }) => {
    const response = await request.delete('https://fakerestapi.azurewebsites.net/api/v1/Books/3')
    expect(response.status()).toBe(200)
})
test('Status code is 200 and check message', async ({ request }) => {
    const response = await request.delete('https://dummy.restapiexample.com/public/api/v1/delete/1')
    expect(response.status()).toBe(200)
     const responseBody = await response.json()
    console.log(responseBody)
    expect(responseBody.message).toBe('Successfully! Record has been deleted')
})