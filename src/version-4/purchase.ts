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
  iapPremiumYearly35 = 'iapPremiumYearly35',
  iapPremiumLifetime160 = 'iapPremiumLifetime160',
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
}

export enum PayloadPurchaseProviderV4 {
  Google = 'google',
  Apple = 'apple',
  Paddle = 'paddle',
}

export enum SubscriptionType {
  subscription = 'subscription',
  lifetime = 'lifetime',
}

export interface PayloadPurchaseBaseV4 {
  readonly purchaseId: PayloadIAPIdentifierV4,
  readonly clientProductId: string,
  readonly type: SubscriptionType,
}

export interface PayloadValidateSaveAppleRequestV4 {
  readonly provider: PayloadPurchaseProviderV4.Apple
  readonly receipt: string
}

export interface PayloadValidateSaveGoogleRequestV4 {
  readonly provider: PayloadPurchaseProviderV4.Google
  readonly receipts: PayloadAndroidReceiptV4[]
}

export interface PayloadValidateSavePaddleRequestV4 {
  readonly provider: PayloadPurchaseProviderV4.Paddle
  readonly receipts: PayloadPaddleReceiptV4[]
}

export type ValidateSavePurchasesRequestV4 = (PayloadValidateSaveAppleRequestV4 | PayloadValidateSaveGoogleRequestV4 | PayloadValidateSavePaddleRequestV4) & PayloadPurchaseBaseV4

export enum PayloadPurchaseStatusV4 {
  Valid = 'valid',
  Expired = 'expired',
  Refunded = 'refunded',
  Invalid = 'invalid',
  Error = 'Error',
}

export interface PayloadPurchaseMetadataV4 {
  readonly status: PayloadPurchaseStatusV4.Valid | PayloadPurchaseStatusV4.Expired | PayloadPurchaseStatusV4.Refunded | PayloadPurchaseStatusV4.Invalid
  readonly purchaseDate: number
  readonly expirationDate?: number
  readonly transactionId: string,
  readonly productId: string,
  readonly cancellationDate?: Date,
  readonly lastValidationDate: Date,
}

export interface PayloadPurchaseErrorV4 {
  readonly status: PayloadPurchaseStatusV4.Error
  readonly errorCode: string
}

export type PayloadPurchaseDataV4 = (PayloadPurchaseMetadataV4 & PayloadPurchaseBaseV4) | PayloadPurchaseErrorV4

export interface PayloadValidateSavePurchasesResponseV4 {
  readonly purchases: PayloadPurchaseDataV4[]
}
