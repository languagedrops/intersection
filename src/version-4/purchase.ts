import { PayloadRequestBaseV4 } from './base'

export enum PayloadIAPIdentifierV4 {
  iapForever10Mins = 'iapForever10Mins',
  iapForever10MinsDiscounted = 'iapForever10MinsDiscounted',
  iapForever10MinsDiscounted40 = 'iapForever10MinsDiscounted40',
  iapForever10MinsDiscounted45 = 'iapForever10MinsDiscounted45',
  iapForever10MinsDiscounted50 = 'iapForever10MinsDiscounted50',
  iapForever10MinsDiscounted80 = 'iapForever10MinsDiscounted80',

  iapForever99Mins = 'iapForever99Mins',
  iapForever99MinsDiscounted = 'iapForever99MinsDiscounted',
  iapForever99MinsDiscounted40 = 'iapForever99MinsDiscounted40',
  iapForever99MinsDiscounted45 = 'iapForever99MinsDiscounted45',
  iapForever99MinsDiscounted50 = 'iapForever99MinsDiscounted50',
  iapForever99MinsDiscounted80 = 'iapForever99MinsDiscounted80',

  iapForeverAllLanguages = 'iapForeverAllLanguages',
  iapForeverAllLanguagesDiscounted = 'iapForeverAllLanguagesDiscounted',
  iapForeverAllLanguagesDiscounted40 = 'iapForeverAllLanguagesDiscounted40',
  iapForeverAllLanguagesDiscounted45 = 'iapForeverAllLanguagesDiscounted45',
  iapForeverAllLanguagesDiscounted50 = 'iapForeverAllLanguagesDiscounted50',
  iapForeverAllLanguagesDiscounted80 = 'iapForeverAllLanguagesDiscounted80',

  iap10MinsMonthly = 'iap10MinsMonthly',
  iap10MinsYearly = 'iap10MinsYearly',

  iapUnlimitedMonthly = 'iapUnlimitedMonthly',
  iapUnlimitedYearly = 'iapUnlimitedYearly',

  iapAllLanguagesMonthly = 'iapAllLanguagesMonthly',
  iapAllLanguagesMonthlyFreeTrial = 'iapAllLanguagesMonthlyFreeTrial',
  iapAllLanguagesYearly = 'iapAllLanguagesYearly',

  iapUnlimitedMonthlyFreeTrial = 'iapUnlimitedMonthlyFreeTrial',

  iapPremiumMonthly10 = 'iapPremiumMonthly10',
  iapPremiumMonthly15 = 'iapPremiumMonthly15',
  iapPremiumYearly70 = 'iapPremiumYearly70',
  iapPremiumYearly70FreeTrial = 'iapPremiumYearly70FreeTrial',
  iapPremiumYearly40 = 'iapPremiumYearly40',
  iapPremiumYearly40FreeTrial = 'iapPremiumYearly40FreeTrial',
  iapPremiumYearly35 = 'iapPremiumYearly35',
  iapPremiumYearly30 = 'iapPremiumYearly30',
  iapPremiumLifetime160 = 'iapPremiumLifetime160',

  // non-recurring limited time
  iapPremium3months30 = 'iapPremium3months30',
  iapPremium1year70 = 'iapPremium1year70',
  iapPremium1year40 = 'iapPremium1year40',
}

export interface PayloadAndroidReceiptV4 {
  readonly data: string
  readonly signature: string
}

export interface PayloadPaddleReceiptV4 {
  readonly productId: string
  readonly orderId: string
  readonly checkoutId: string
  readonly purchaseDate: number
  readonly coupon?: string,
  readonly paddleUserId: string
  readonly email?: string
  readonly subscriptionId?: string
  readonly cancellationEffectiveDate?: number | Date
  readonly expirationDate?: number | Date
  readonly cancelUrl?: string
}

export enum PayloadPurchaseProviderV4 {
  Google = 'google',
  Apple = 'apple',
  Paddle = 'paddle',
  NoProvider = 'noProvider',
}

export interface PayloadValidateSyncAppleRequestV4 extends PayloadRequestBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Apple
  readonly receipt: string
}

export interface PayloadValidateSyncGoogleRequestV4 extends PayloadRequestBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Google
  readonly receipts: PayloadAndroidReceiptV4[]
}

export interface PayloadValidateSyncPaddleRequestV4 extends PayloadRequestBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Paddle
  readonly receipts: PayloadPaddleReceiptV4[]
}

export interface PayloadValidateSyncEmptyRequestV4 extends PayloadRequestBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.NoProvider
}

export type ValidateSyncPurchasesRequestV4 = (PayloadValidateSyncAppleRequestV4 | PayloadValidateSyncGoogleRequestV4 | PayloadValidateSyncPaddleRequestV4 | PayloadValidateSyncEmptyRequestV4)

export enum PayloadPurchaseStatusV4 {
  Valid = 'valid',
  Expired = 'expired',
  Refunded = 'refunded',
  Invalid = 'invalid',
  Error = 'Error',
}

export interface PayloadPurchaseMetadataBaseV4 {
  readonly topUpId: PayloadIAPIdentifierV4,
  readonly status: PayloadPurchaseStatusV4.Valid | PayloadPurchaseStatusV4.Expired | PayloadPurchaseStatusV4.Refunded
  readonly purchaseDate: number
  readonly transactionId: string
  readonly cancellationDate?: number
  readonly expirationDate?: number
}

export interface PayloadValidateSyncAppleResponseV4 extends PayloadPurchaseMetadataBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Apple
  readonly receipt: string
}

export interface PayloadValidateSyncGoogleResponseV4 extends PayloadPurchaseMetadataBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Google
  readonly receipt: PayloadAndroidReceiptV4
}

export interface PayloadValidateSyncPaddleResponseV4 extends PayloadPurchaseMetadataBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Paddle
  readonly receipt: PayloadPaddleReceiptV4
}

export interface PayloadPurchaseErrorV4 {
  readonly status: PayloadPurchaseStatusV4.Error | PayloadPurchaseStatusV4.Invalid
  readonly errorCode: string
}

export type PayloadPurchaseMetadataV4 = (PayloadValidateSyncAppleResponseV4 | PayloadValidateSyncGoogleResponseV4 | PayloadValidateSyncPaddleResponseV4)

export type PayloadPurchaseDataV4 = (PayloadPurchaseMetadataV4 | PayloadPurchaseErrorV4)

export interface PayloadValidateSyncPurchasesResponseV4 {
  readonly purchases: PayloadPurchaseDataV4[]
}
