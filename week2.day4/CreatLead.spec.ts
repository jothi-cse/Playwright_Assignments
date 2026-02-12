import test from '@playwright/test'
test("Create a Lead",async({page})=>{
  await page.goto ("http://leaftaps.com/opentaps/control/main")
  // Enter the username as Demosalesmanager
  await page.locator("#username").fill("Demosalesmanager")
  // Enter the password as crmsfa
  await page.locator("#password").fill('crmsfa')
  // Click the Login button
  await page.locator('.decorativeSubmit').click()
  //Click CRM/SFA
  await page.locator(`text='CRM/SFA'`).click()
  // Click Leads
  await page.locator(`text='Leads'`).click()
  // Click Create Lead
  await page.locator('text=Create Lead').click()
  //Fill the Company Name
  await page.locator('#createLeadForm_companyName').fill('Testleaf')
  //  Fill the First Name
  await page.locator('#createLeadForm_firstName').fill('Jothi')
  //Fill the last Name
  await page.locator('#createLeadForm_lastName').fill('Priya')
  //Fill the Salutation
  await page.locator('#createLeadForm_personalTitle').fill('Mrs')
  //Fill the Title
  await page.locator('input[name ="generalProfTitle"]').fill('Creation')
  // Fill the Annual Revenue
  await page.locator('#createLeadForm_annualRevenue').fill('200000')
  //Fill the Department
  await page.locator('#createLeadForm_departmentName').fill('Testing')
  //Fill the Phone Number
  await page.locator('#createLeadForm_primaryPhoneNumber').fill('123456789')
  // Click Create Lead button
  await page.locator('.smallSubmit').click()
})