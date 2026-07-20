import{test,expect}from '@playwright/test'
import postEmployeeApiJson from './testdata/post-api-employees.json'
import{ createEmployeeResponse} from './types/update-employees-api-interface'


test('Post API with Payload testdata from json file with deserilisation interface',async({request})=>{
    const response=await request.post('https://dummy.restapiexample.com/api/v1/create',{
        data: postEmployeeApiJson.employeesCreateApiPayload
    })
    expect(response.status()).toBe(200)
    const responseBody: createEmployeeResponse= await response.json()
    console.log(responseBody.data.id);
    console.log(responseBody.data.name);
    console.log(responseBody.data.age);
    console.log(responseBody.data.salary);
   


})