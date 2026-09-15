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

// Select Source Dropdown
  await page.locator('table [name="dataSourceId"]').selectOption({ label: 'Self Generated' })

  //all dropdown values
let ddvalues=page.locator('#createLeadForm_dataSourceId>option')

  //dropdown count
let ddcount=await ddvalues.count()
console.log(ddcount)

  // Print all dropdown options
  let options = page.locator('table [name="dataSourceId"] option')
  let dropDownCount = await options.count()
  for (let i = 0; i < dropDownCount; i++) {
    let optionText = await options.nth(i).innerText()
    console.log(optionText)
  }

})
