import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {shuffleArray} = require('./utils')
const {copyArr} = require('./utils')

describe('shuffleArray should', () => {
    test('Test 1', () => {
        expect(shuffleArray).toHaveBeenCalled()
      })

      test('Test 2', () => {
        expect(shuffleArray).toBeDefined()
      })

})