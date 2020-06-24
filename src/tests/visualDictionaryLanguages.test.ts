import { visualDictionaryLanguageISOs } from '../languagesStaticData'

describe('Visual Dictionary languages', () => {
  it(`Visual Dictionary language list should match snapshot`, () => {
    expect(visualDictionaryLanguageISOs()).toMatchSnapshot()
  })
})
