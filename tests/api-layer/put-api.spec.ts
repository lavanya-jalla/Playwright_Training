import{test,expect,request}from '@playwright/test'
import putApiJson from './testdata/post-api.json'


const booksUpdateApiPayload={
    "id": 3,
    "title": "playwriht Book",
    "description": "Testing Book",
    "pageCount": 200,
    "excerpt": "Testing Book",
    "publishDate": "2026-07-12T05:03:36.353Z"

}
test('Put API with Payload',async({request})=>{
    const response=await request.put('https://fakerestapi.azurewebsites.net/api/v1/Books/3',{
        data:booksUpdateApiPayload
    })
    expect(response.status()).toBe(200)
    const responseBody=await response.json()
    console.log(`Id is: ${responseBody.id}`);
    expect(typeof responseBody.id).toBe('number');
    expect(responseBody).toHaveProperty('id')
    expect(responseBody.id).toBe(booksUpdateApiPayload.id)
    console.log(responseBody)
})
test('Put API with Payload testdata from json file',async({request})=>{
    const response=await request.put('https://fakerestapi.azurewebsites.net/api/v1/Books/3',{
        data:putApiJson.booksCreationApiPayload
    })
    expect(response.status()).toBe(200)
    const responseBody=await response.json()
    console.log(`Id is: ${responseBody.id}`);
    expect(typeof responseBody.id).toBe('number');
    expect(responseBody).toHaveProperty('id')
    expect(responseBody.id).toBe(putApiJson.booksCreationApiPayload.id)
    console.log(responseBody)

})