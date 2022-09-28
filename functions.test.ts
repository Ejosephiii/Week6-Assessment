import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {shuffleArray} = require('./utils')
const {copyArr} = require('./utils')

describe('shuffleArray should', () => {
    test('Test 1', () => {
      let numArray = [1, 2, 3, 4, 5]
      let originalLength = numArray.length
      
      let shuffledArray = shuffleArray(numArray)
      let shuffleLength = shuffledArray.length
      expect(shuffleLength).toEqual(originalLength)
      })

  
})