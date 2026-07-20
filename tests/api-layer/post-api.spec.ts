import{test,expect}from '@playwright/test'
import postApiJson from './testdata/post-api.json'


const booksCreationApiPayload={

"id": 102,
"title": "playwright 102",
"description": "Testing 102",
"pageCount": 200,
"excerpt": "Testing 102",
"publishDate": "2026-07-12T04:59:58.678Z"

}
test('Post API with Payload',async({request})=>{
    const response=await request.post('https://fakerestapi.azurewebsites.net/api/v1/Books',{
        data:booksCreationApiPayload
    })
    expect(response.status()).toBe(200)
    const responseBody=await response.json()
    console.log(`Id is: ${responseBody.id}`);
    expect(typeof responseBody.id).toBe('number');
    expect(responseBody).toHaveProperty('id')
    expect(responseBody.id).toBe(booksCreationApiPayload.id)

    console.log(`Title is: ${responseBody.title}`);
    expect(typeof responseBody.title).toBe('string')
    expect(responseBody).toHaveProperty('title')
    expect(responseBody.title).toBe(booksCreationApiPayload.title)

    console.log(`PublishDate is: ${responseBody.publishDate}`)
    expect(typeof responseBody.publishDate).toBe('string')
    expect(responseBody).toHaveProperty('publishDate')
    expect(responseBody.publishDate).toBe(booksCreationApiPayload.publishDate)
    
})
test('Post API with Payload testdata from json file',async({request})=>{
    const response=await request.post('https://fakerestapi.azurewebsites.net/api/v1/Books',{
        data:postApiJson.booksCreationApiPayload
    })
    expect(response.status()).toBe(200)
    const responseBody=await response.json()
    console.log(`Id is: ${responseBody.id}`);
    expect(typeof responseBody.id).toBe('number');
    expect(responseBody).toHaveProperty('id')
    expect(responseBody.id).toBe(postApiJson.booksCreationApiPayload.id)

})