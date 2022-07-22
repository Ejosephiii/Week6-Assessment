
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
test('test1', async () => {
    const drawBtnDisplay = await driver.findElement(By.id('choices'))
    const displays = await await drawBtnDisplay.isDisplayed()
})

test('test2', async () => {
    const addButtonDisplay = await driver.findElement(By.id('player-duo'))
    const displays2 = await await addButtonDisplay.isDisplayed()
})