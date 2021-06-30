import { AppPlatform } from '../src/appPlatform'
import { AppType } from '../src/appType'
import { PayloadIAPIdentifierV4 } from '../src/version-4/purchaseUtils'
import * as fs from 'fs'
import { extractKeysAndValues } from '@drops-developers/majime'

// tslint:disable-next-line:readonly-keyword
const productIdTopUpIdMap: { [productId: string]: PayloadIAPIdentifierV4 } = {}

const allIapIdentifiers = PayloadIAPIdentifierV4.all.reversed()

allIapIdentifiers.forEach((iap) => {
  AppPlatform.all.forEach((platform) => {
    if (platform === AppPlatform.Web) {
      const productId = PayloadIAPIdentifierV4.getProductId(iap, platform, AppType.int)
      if (productId) {
        productIdTopUpIdMap[productId] = iap
      }
    } else {
      AppType.all.forEach((appType) => {
        const productId = PayloadIAPIdentifierV4.getProductId(iap, platform, appType)
        if (productId) {
          productIdTopUpIdMap[productId] = iap
        }
        PayloadIAPIdentifierV4.getAlternativeProductIdsMobile(iap, platform, appType)
          .filter((productId) => !!productId)
          .forEach((productId) => productIdTopUpIdMap[productId] = iap)
      })
    }
  })
})

const sortedProductIdTopUpIdMap = extractKeysAndValues(productIdTopUpIdMap)
   .sortedByProperty((e) => e.key)
   .groupByAndMap((item) => item.key as string, (item) => item.value)

let result = ''
result += '/* tslint:disable */\n'
result += 'import { PayloadIAPIdentifierV4 } from \'./version-4/purchase\'\n'
result += 'import { Dictionary } from \'./dictionary\'\n'
result += '/* Auto-generated, do not modify!!! */\n'
result += 'export const productIdTopUpIdMap: Dictionary<PayloadIAPIdentifierV4> = {\n'

Object.keys(sortedProductIdTopUpIdMap).forEach((productId) => {
  result += `  '${productId}': PayloadIAPIdentifierV4.${sortedProductIdTopUpIdMap[productId]},\n`
})

result += '}\n'

fs.writeFileSync('src/productIdTopUpIdMap.ts', result)
