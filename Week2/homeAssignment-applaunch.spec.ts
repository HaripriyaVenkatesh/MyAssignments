import {test,firefox,webkit} from "@playwright/test"
test('launch two separate browser and retrieve page information',async () => {

//Browser1:

const browser1=await firefox.launch({headless:false}) //browser

const context1=await browser1.newContext()              //context

const page1=await context1.newPage()                    //page

const title=await page1.goto("https://www.redbus.in/")  //method to load the url

console.log("URL:", page1.url());                       // Verify URL

console.log("Title:", await page1.title());             // Verify title

//Browser2:

const browser2=await webkit.launch({headless:false}) //browser

const context2=await browser2.newContext()              //context

const page2=await context2.newPage()                    //page

const title1=await page2.goto("https://www.flipkart.com/")  //method to load the url

console.log("URL:", page2.url());                       // Verify URL

console.log("Title:", await page2.title());             // Verify title
}) 