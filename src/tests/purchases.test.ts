import { productIdTopUpIdMap } from '../productIdTopUpIdMap'
import { PayloadIAPIdentifierV4 } from '../version-4/purchase'
import { AppPlatform } from '../appPlatform'
import { AppType } from '../appType'

describe('purchases', () => {
  [
    PayloadIAPIdentifierV4.iapForever10Mins,
    PayloadIAPIdentifierV4.iapForever10MinsDiscounted,
    PayloadIAPIdentifierV4.iapForever10MinsDiscounted40,
    PayloadIAPIdentifierV4.iapForever10MinsDiscounted45,
    PayloadIAPIdentifierV4.iapForever10MinsDiscounted50,
    PayloadIAPIdentifierV4.iapForever10MinsDiscounted80,

    PayloadIAPIdentifierV4.iapForever99Mins,
    PayloadIAPIdentifierV4.iapForever99MinsDiscounted,
    PayloadIAPIdentifierV4.iapForever99MinsDiscounted40,
    PayloadIAPIdentifierV4.iapForever99MinsDiscounted45,
    PayloadIAPIdentifierV4.iapForever99MinsDiscounted50,
    PayloadIAPIdentifierV4.iapForever99MinsDiscounted80,

    PayloadIAPIdentifierV4.iapForeverAllLanguages,
    PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted,
    PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted40,
    PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted45,
    PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted50,
    PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted80,

    PayloadIAPIdentifierV4.iap10MinsMonthly,
    PayloadIAPIdentifierV4.iap10MinsYearly,

    PayloadIAPIdentifierV4.iapUnlimitedMonthly,
    PayloadIAPIdentifierV4.iapUnlimitedYearly,

    PayloadIAPIdentifierV4.iapAllLanguagesMonthly,
    PayloadIAPIdentifierV4.iapAllLanguagesYearly,

    PayloadIAPIdentifierV4.iapPremiumMonthly3,
    PayloadIAPIdentifierV4.iapPremiumMonthly10,
    PayloadIAPIdentifierV4.iapPremiumMonthly13,
    PayloadIAPIdentifierV4.iapPremiumMonthly15,

    PayloadIAPIdentifierV4.iapPremium3months30,
    PayloadIAPIdentifierV4.iapPremiumQuarterly30,

    PayloadIAPIdentifierV4.iapPremium1year70,
    PayloadIAPIdentifierV4.iapPremiumYearly70,
    PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial,
    PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial3Days,
    PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial14Days,
    PayloadIAPIdentifierV4.iapPremiumYearly55,
    PayloadIAPIdentifierV4.iapPremiumYearly50,
    PayloadIAPIdentifierV4.iapPremium1year40,
    PayloadIAPIdentifierV4.iapPremiumYearly40,
    PayloadIAPIdentifierV4.iapPremiumYearly45,
    PayloadIAPIdentifierV4.iapPremiumYearly40FreeTrial,
    PayloadIAPIdentifierV4.iapPremiumYearly35,
    PayloadIAPIdentifierV4.iapPremiumYearly30,
    PayloadIAPIdentifierV4.iapPremiumYearly25,
    PayloadIAPIdentifierV4.iapPremiumYearly15,
    PayloadIAPIdentifierV4.iapPremiumYearlyEducation,

    PayloadIAPIdentifierV4.iapPremiumLifetime90,
    PayloadIAPIdentifierV4.iapPremiumLifetime35,
    PayloadIAPIdentifierV4.iapPremiumLifetime160,
    PayloadIAPIdentifierV4.iapPremiumLifetime180,
  ].forEach((topUpId) => {
    AppPlatform.all.forEach((platform) => {
      it(`ProductId map should contain ${topUpId} for it's productId at ${platform}`, () => {
        AppType.all.forEach((appType) => {
          if (PayloadIAPIdentifierV4.getProductId(topUpId, platform, appType) !== '') {
            expect(productIdTopUpIdMap[PayloadIAPIdentifierV4.getProductId(topUpId, platform, appType)]).toBe(topUpId)
          }
        })
      })
    })
  })

})
