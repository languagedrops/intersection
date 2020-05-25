import { languagesStaticData } from '../languagesStaticData'
import { LanguageISO } from '../language'

describe('Language static data', () => {
  LanguageISO.all.forEach((languageISO) => {
    it(`Language data for ${languageISO} should match snapshot`, () => {
      expect(languagesStaticData[languageISO]).toMatchSnapshot()
    })
  })
})
