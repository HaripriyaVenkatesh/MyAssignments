import {test,expect} from "@playwright/test"

test("Learn playwright locators", async ({page}) => {

await page.goto("https://leaftaps.com/opentaps/control/main")

await page.getByLabel('Username').fill('democsr')

await page.locator('textbox').filter({hasText:"Password"}).fill('crmsfa')

await page.getByRole('button',{name:"Login"}).click()

})
