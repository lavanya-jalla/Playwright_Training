import { test, expect, request } from '@playwright/test'
test('Status code is 200', async ({ request }) => {
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    const responseBody = await response.json()
    console.log(responseBody)
    expect(response.status()).toBe(200)
})

test("id value is greater than 0", async ({ request }) => {
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    responseBody.forEach((item:any) => {
        console.log(item.id, item.title)
        expect(item.id).toBeGreaterThan(0)
    })

})
test("headers Test", async ({ request }) => {
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    const headers=await response.headers()
    console.log(headers)
    

})
test("headers Test with validations", async ({ request }) => {
    const response = await request.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    expect(response.status()).toBe(200)
    const responseBody = await response.json()
    const headers=await response.headers()
    console.log(headers)
    expect(typeof headers["content-type"]).toBe('string')
    expect(typeof headers.date).toBe('string')
    expect(headers.server).toBe("Kestrel")
    expect(typeof headers["api-supported-versions"]).toBe('string')
    expect(headers["api-supported-versions"]).toBe("1.0")


})
