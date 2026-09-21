import {test} from "@playwright/test"

test('Book Ticket',async ({page}) => {

await page.goto("https://www.pvrcinemas.com/") //open URL

await page.locator('//input[@placeholder="Search for city"]').click() //Search for city

await page.locator('.cities-names',{hasText:'Chennai'}).click() //Clicking Chennai 

await page.locator('.date-show',{hasText:'Cinema'}).click() //Clicking on cinema slide
await page.locator('//div[@id="cinema"]').click() //Select cinema from dropdown
await page.waitForTimeout(3000)
await page.locator('text=INOX National,Virugambakkam Chennai').click()//selecting option

await page.waitForTimeout(3000)
await page.locator('//div[@id="date"]').click() //click on date
await page.locator('//div[@class="p-dropdown-items-wrapper"]/ul[@role="listbox"]/li[@role="option"]/span[text()="Today"]').click()//clicking on date option

await page.locator('//div[@id="movie"]').click() //click movie option
await page.locator('//div[@class="p-dropdown-items-wrapper"]/ul[@role="listbox"]/li[@role="option"]/span[text()="PARIS CAFE"]').click()//selecting movie from option

await page.locator('//div[@id="time"]').click()//click time option
await page.locator('//div[@class="p-dropdown-items-wrapper"]/ul[@role="listbox"]/li[@class="p-dropdown-item"]').click()//click on time option

await page.locator('//button[@type="submit"]').click()//click submit button
await page.waitForTimeout(8000)

await page.locator('//button[text()="Accept"]').click()//accept condition

await page.locator('//td[@class="seats-col"]/span[@id="SL.SILVER|B:1"]').click()//selecting seat
await page.waitForTimeout(2000)

await page.locator('//div[@class="grand-amount"]').isVisible();//check if amount visible or not


})