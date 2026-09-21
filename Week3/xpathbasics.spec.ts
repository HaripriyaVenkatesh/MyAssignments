import { test, expect } from '@playwright/test'

test('has title', async ({ page }, testInfo) => {

  await page.goto('https://login.salesforce.com/?locale=in');

  //Verify page title before login
  await expect(page).toHaveTitle("Login | Salesforce")

  //Enter email with locator 
  
  await page.locator('//div[@id="username_container"]/input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com') //xpath
  
  //Click login button with locator [

  await page.locator('//input[@id="Login"]').click()

  //Enter password with locator 

  await page.locator('//input[@id="password"]').fill('TestLeaf@2025')

   //Click login button with locator 

  await page.locator('//input[@id="Login"]').click()
});