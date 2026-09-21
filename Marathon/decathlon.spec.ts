import {test} from "@playwright/test"

test('Order Shoes',async ({page}) => {

await page.goto("https://www.decathlon.in/") //open URL

await page.locator('//input[@type="search"]').isVisible();//check if search text is visible or not
await page.locator('//input[@type="search"]').click()

await page.locator('//input[@type="search"]').fill('shoes') //xpath
await page.locator('//input[@type="search"]').press('Enter')
await page.waitForTimeout(2000)

await page.locator('//span[text()="Gender"]').click()//click gender
await page.locator('//div[@id="gender_id_en"]/label[@data-test-id="filter-item-gender_id_en-MEN"]').click()
await page.waitForTimeout(2000)

await page.locator('//span[text()="Size"]').click()//select size
await page.locator('//label[@data-test-id="filter-item-indian_size-UK 10.5"]').click()
await page.waitForTimeout(2000)

await page.locator('//span[text()="Most relevant"]').click()//clicking on most relevant
await page.waitForTimeout(2000)
await page.locator('//li[@role="presentation"]/button[@type="button"]/span[text()="Price (low → high) "]').click()
await page.waitForTimeout(2000)

await page.locator('(//a[@data-test-id="product-card-link"])[1]').click()
await page.waitForTimeout(2000)
await page.locator('//span[text()="UK 10.5 - EU 45"]').click()
await page.locator('//button[@data-test-id="pdp:add-to-cart-button"]').click()

await page.locator('//a[@href="/checkout/cart"]').click()//clicking on cart button
await page.waitForTimeout(2000)
await page.locator('//div[@data-test-id="order-summary-container"]').click()//check order summary
})