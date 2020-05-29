import { deployedLanguageISOs } from '../languagesStaticData'

describe('Deployed languages', () => {
  it(`Deployed language list should match snapshot`, () => {
    expect(deployedLanguageISOs()).toMatchSnapshot()
  })
})
