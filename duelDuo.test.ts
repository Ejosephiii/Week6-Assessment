
import { TestWatcher } from "jest"
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button choices pop up when I press the draw button', async () => {
    await driver.findElement(By.id('draw')).click()
   await driver.sleep(1000)

   const choices = await driver.findElement(By.id('choices'))
   const displayed = await choices.isDisplayed
   
   expect(displayed).toEqual(true)

   
})

test('test2', async () => {
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed
    
    expect(displayed).toEqual(true)
})