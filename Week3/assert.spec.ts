import {expect, test} from "@playwright/test"

test('Learn assertions in playwright', async ({page}) => {

await page.goto("https://leafground.com/input.xhtml")

const Title=await page.title()
console.log(Title);

const Url=page.url()
console.log(Url);

//Assert that element "//input[@placeholder="Disabled"]" is disabled
const isDisabled = await page.locator('//input[@placeholder="Disabled"]').isDisabled();
expect(isDisabled).toBe(true);


//Assert that element "//input[@placeholder="Babu Manickam"]" is enabled
  const isEnabled = await page.locator('//input[@placeholder="Babu Manickam"]').isEnabled();
  expect(isEnabled).toBe(true);

  //Check soft assertion for element "//input[@placeholder="Babu Manickam"]" is Disabled
  const isDisabledSoft = await page.locator('//input[@placeholder="Babu Manickam"]').isDisabled();
  expect.soft(isDisabledSoft).toBe(true);
  console.log('Soft assertion failed, but test continues execution');

  //Clear and enter another value "//*[@placeholder="About yourself"]"
  await page.locator('//*[@placeholder="About yourself"]').fill('Playwright');


})