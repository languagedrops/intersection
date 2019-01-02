
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
  readonly userId: string,
  readonly purchaseId: string,
  readonly type: SubscriptionType,
  readonly receipt: string | PayloadAndroidReceiptV2 | PayloadPaddleReceiptV2,
  readonly provider: PayloadPurchaseProviderV2,
  readonly clientProductId: string,
}

export type PayloadSavePurchasesRequestV2 = PayloadPurchaseBaseV2[]

export enum PayloadPurchaseStatusV2 {
  Valid = 'valid',
  Expired = 'expired',
  Refunded = 'refunded',
  Invalid = 'invalid',
}

export interface PayloadPurchaseMetadataV2<T extends PayloadPurchaseProviderV2> {
  readonly transactionId: string,
  readonly productId: string,

  readonly purchaseDate: Date,
  readonly expirationDate?: Date,
  readonly cancellationDate?: Date,
  readonly lastValidationDate: Date,

  readonly provider: T,
  readonly status: PayloadPurchaseStatusV2.Valid,
}

interface PurchaseMetaDataGoogle extends PayloadPurchaseMetadataV2<PayloadPurchaseProviderV2.Google> {}
interface PurchaseMetaDataApple extends PayloadPurchaseMetadataV2<PayloadPurchaseProviderV2.Apple> {}
interface PurchaseMetaDataPaddle extends PayloadPurchaseMetadataV2<PayloadPurchaseProviderV2.Paddle> {}

export interface PayloadPurchaseMetaDataInvalid<T extends PayloadPurchaseProviderV2> {
  readonly transactionId: string,
  readonly productId: string,
  readonly purchaseDate?: Date,
  readonly expirationDate?: Date,
  readonly cancellationDate?: Date,
  readonly lastValidationDate: Date,
  readonly provider?: T,
  readonly status: PayloadPurchaseStatusV2.Invalid | PayloadPurchaseStatusV2.Expired | PayloadPurchaseStatusV2.Refunded,
}

interface PurchaseMetaDataGoogleInvalid extends PayloadPurchaseMetaDataInvalid<PayloadPurchaseProviderV2.Google> {}
interface PurchaseMetaDataAppleInvalid extends PayloadPurchaseMetaDataInvalid<PayloadPurchaseProviderV2.Apple> {}
interface PurchaseMetaDataPaddleInvalid extends PayloadPurchaseMetaDataInvalid<PayloadPurchaseProviderV2.Paddle> {}

export type PayloadPurchaseDataV2 = PayloadPurchaseBaseV2 & ((PurchaseMetaDataApple | PurchaseMetaDataGoogle | PurchaseMetaDataPaddle) | (PurchaseMetaDataAppleInvalid | PurchaseMetaDataGoogleInvalid | PurchaseMetaDataPaddleInvalid))

export type PayloadSavePurchasesResponseV2 = PayloadPurchaseDataV2[]
