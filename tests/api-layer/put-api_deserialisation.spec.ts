import{test,expect,request}from '@playwright/test'
import putApiJson from './testdata/put-api.json'
import{updateBooksPutApi}from './types/updatebook-put-api-interface'
test('Put API with Payload testdata from json file',async({request})=>{
    const response=await request.put('https://fakerestapi.azurewebsites.net/api/v1/Books/3',{
        data:putApiJson.booksUpdateApiPayload
    })
    expect(response.status()).toBe(200)
    const responseBody=await response.json()
    console.log(responseBody.id);
    console.log(responseBody.title);
    console.log(responseBody.description);
    console.log(responseBody.pageCount);
    console.log(responseBody.excerpt);
    console.log(responseBody.publishDate);


})
test('Post API with Payload testdata from json file with deserilisation interface',async({request})=>{
    const response=await request.put('https://fakerestapi.azurewebsites.net/api/v1/Books/3',{
       data:putApiJson.booksUpdateApiPayload
    })
    console.log(" ------------------After Deserialisation------------------------")
    expect(response.status()).toBe(200)
    const responseBody:updateBooksPutApi= await response.json()
    console.log(responseBody.id);
    console.log(responseBody.title);
    console.log(responseBody.description);
    console.log(responseBody.pageCount);
    console.log(responseBody.excerpt);
    console.log(responseBody.publishDate);


})