import {test} from "@playwright/test"

test('learn to launch the browser',async ({page}) => {

await page.goto("http://leaftaps.com/opentaps/control/main") //open URL

//await page.waitForLoadState('domcontentloaded')

await page.locator('[id="username"]').fill('democsr') //Enter Username

await page.locator('#password').fill('crmsfa') //Enter Password

await page.locator('input[type="submit"]').click() //Click on submit button

await page.locator('text=CRM/SFA').click() //click txt btn

//click on Leads link
  await page.locator('[href="/crmsfa/control/leadsMain"]').click()

//click on Create Lead link
await page.locator('[href="/crmsfa/control/createLeadForm"]').click()

await page.locator('#createLeadForm_companyName').fill('TestLeaf') //Enter Company name

await page.locator('#createLeadForm_firstName').fill('Abc') //Enter FirstName name

await page.locator('#createLeadForm_lastName').fill('Xyz') //Enter LastName name

await page.locator('.smallSubmit').click() //click create lead button

})