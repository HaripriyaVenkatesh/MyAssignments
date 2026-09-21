import {test} from "@playwright/test"

test('auth file to skip the login', async ({page}) => {


await page.goto("https://leaftaps.com/opentaps/control/main")


await page.locator('[id="username"]').fill('democsr') //Enter Username

await page.locator('#password').fill('crmsfa') //Enter Password

await page.locator('input[type="submit"]').click() //Click on submit button

//await page.waitForTimeout(15000)

await page.context().storageState({path:'Data/sflogin.json'})
    
})