import {test, expect, request} from '@playwright/test';

test('Api Get Request', async({request}) => {
const apiResponse=await request.get('https://jsonplaceholder.typicode.com/posts'); 
const responseBody=await apiResponse.json();
expect(apiResponse.status()).toBe(200);
expect(apiResponse.statusText()).toBe('OK');
console.log(responseBody);
expect(responseBody[0].title()).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit');
});