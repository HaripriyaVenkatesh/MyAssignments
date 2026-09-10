import {test} from '@playwright/test'
test('login to the page', async ({page}) => {

//Browser1:

//const browser=await chromium.launch({headless:false}) //browser

//const context=await browser.newContext()              //context

//await page.goto                  //page

await page.goto("https://login.salesforce.com/?locale=in");  //method to load the url

await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com');

page.locator('#Login').click()

await page.locator('.password').fill('TestLeaf@2025');

await page.locator('input[type="submit"]').click();

console.log("URL:", page.url());                       // Verify URL

console.log("Title:", await page.title());             // Verify title
}) 