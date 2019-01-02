export enum PayloadIAPIdentifierV2 {
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
  iapPremiumYearly35 = 'iapPremiumYearly35',
  iapPremiumLifetime160 = 'iapPremiumLifetime160',
}

export interface PayloadAndroidReceiptV2 {
  readonly data: string
  readonly signature: string
}

export interface PayloadPaddleReceiptV2 {
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
}

export enum PayloadPurchaseProviderV2 {
  Google = 'google',
  Apple = 'apple',
  Paddle = 'paddle',
}

export enum SubscriptionType {
  subscription = 'subscription',
  lifetime = 'lifetime',
}

export interface PayloadPurchaseBaseV2 {
  readonly purchaseId: PayloadIAPIdentifierV2,
  readonly clientProductId?: string,
  readonly type: SubscriptionType,
}

export interface PayloadValidateSaveAppleRequestV2 {
  readonly provider: PayloadPurchaseProviderV2.Apple
  readonly receipt: string
}

export interface PayloadValidateSaveGoogleRequestV2 {
  readonly provider: PayloadPurchaseProviderV2.Google
  readonly receipts: PayloadAndroidReceiptV2[]
}

export interface PayloadValidateSavePaddleRequestV2 {
  readonly provider: PayloadPurchaseProviderV2.Paddle
  readonly receipts: PayloadPaddleReceiptV2[]
}

export type ValidateSavePurchasesRequestV2 = (PayloadValidateSaveAppleRequestV2 | PayloadValidateSaveGoogleRequestV2 | PayloadValidateSavePaddleRequestV2) & PayloadPurchaseBaseV2

export enum PayloadPurchaseStatusV2 {
  Valid = 'valid',
  Expired = 'expired',
  Refunded = 'refunded',
  Invalid = 'invalid',
}

export interface PayloadPurchaseMetadataV2 {
  readonly status: PayloadPurchaseStatusV2.Valid | PayloadPurchaseStatusV2.Expired | PayloadPurchaseStatusV2.Refunded | PayloadPurchaseStatusV2.Invalid
  readonly purchaseDate: number
  readonly expirationDate?: number
  readonly transactionId: string,
  readonly productId: string,
  readonly cancellationDate?: Date,
  readonly lastValidationDate: Date,
}

export type PayloadPurchaseDataV2 = PayloadPurchaseMetadataV2 & PayloadPurchaseBaseV2

export interface PayloadValidateSavePurchasesResponseV2 {
  readonly purchases: PayloadPurchaseDataV2[]
}
