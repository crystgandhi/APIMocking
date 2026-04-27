import { test, expect, request } from '@playwright/test';

test('API login and use token', async () => {
  const requestContext = await request.newContext();
  // Login API
  const apiResponse = await requestContext.post(
    'https://dummyjson.com/auth/login',
    {
      data: {
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30
      }
    }
  );
  console.log('Status:', apiResponse.status());
console.log('Response:', await apiResponse.text());

  expect(apiResponse.status()).toBe(200);
  // 🔹 Extract token
  const responseBody = await apiResponse.json();
   const token = responseBody.acessToken;
  console.log('Token:', token);
  // 🔹 Use token in another API
  const res = await requestContext.get(
    'https://dummyjson.com/auth/me',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
  //expect(res.ok()).toBeTruthy();
  const userData = await res.json();
  console.log(userData);
});