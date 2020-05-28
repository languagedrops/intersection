import { LanguageISO, getIsProductionLanguage } from '../language'
import { languagesStaticData } from '../languagesStaticData'

describe('Production languages', () => {
  it(`Production language list should match snapshot`, () => {
    expect(LanguageISO.prod).toMatchSnapshot()
  })
})

describe('Excluded languages', () => {
  LanguageISO.all.forEach((languageISO) => {
    if (!getIsProductionLanguage(languageISO)) {
      it(`Excluded language ${languageISO} should not be available as learning`, () => {
        expect(languagesStaticData[languageISO].availableAsLearning).toBeFalsy()
      })
      it(`Excluded language ${languageISO} should not be available as native`, () => {
        expect(languagesStaticData[languageISO].availableAsNative).toBeFalsy()
      })
      it(`Excluded language ${languageISO} should not be available in visual dict`, () => {
        expect(languagesStaticData[languageISO].availableInVisualDictionary).toBeFalsy()
      })
    } else {
      it(`Production language ${languageISO} should be available as learning/native/vis-dict`, () => {
        expect((
          languagesStaticData[languageISO].availableAsLearning ||
          languagesStaticData[languageISO].availableAsNative ||
          languagesStaticData[languageISO].availableInVisualDictionary
        )).toBeTruthy()
      })
    }
  })
})
