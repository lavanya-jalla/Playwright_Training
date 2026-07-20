import{test,expect,request}from '@playwright/test'
import postApiJson from './testdata/post-api.json'
import{createBooksPostApi}from './types/createbook-post-api-interface'
test('Post API with Payload testdata from json file',async({request})=>{
    const response=await request.post('https://fakerestapi.azurewebsites.net/api/v1/Books',{
        data:postApiJson.booksCreationApiPayload
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
    const response=await request.post('https://fakerestapi.azurewebsites.net/api/v1/Books',{
        data:postApiJson.booksCreationApiPayload
    })
    console.log(" ------------------After Deserialisation------------------------")
    expect(response.status()).toBe(200)
    const responseBody:createBooksPostApi= await response.json()
    console.log(responseBody.id);
    console.log(responseBody.title);
    console.log(responseBody.description);
    console.log(responseBody.pageCount);
    console.log(responseBody.excerpt);
    console.log(responseBody.publishDate);


})
test.only('Post API response Array validation ',async({request})=>{
    const response=await request.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
    const responseBody:createBooksPostApi[]=await response.json()
     responseBody.forEach((item:any) => {
        console.log(item.id)
        
    })
})