import { PayloadRequestBaseV4 } from './base'
import { PayloadIAPIdentifierV4 } from './purchaseUtils'

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

export interface PayloadGiftReceiptV4 {
  readonly couponCode: string,
}

export enum PayloadPurchaseProviderV4 {
  Google = 'google',
  Apple = 'apple',
  Paddle = 'paddle',
  NoProvider = 'noProvider',
  Gift = 'gift',
}

export interface PayloadValidateSyncGiftRequestV4 extends PayloadRequestBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Gift
  readonly receipt: PayloadGiftReceiptV4
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

export type ValidateSyncPurchasesRequestV4 = (PayloadValidateSyncAppleRequestV4 | PayloadValidateSyncGoogleRequestV4 | PayloadValidateSyncPaddleRequestV4 | PayloadValidateSyncEmptyRequestV4 | PayloadValidateSyncGiftRequestV4)

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

export interface PayloadValidateSyncGiftResponseV4 extends PayloadPurchaseMetadataBaseV4 {
  readonly provider: PayloadPurchaseProviderV4.Gift
  readonly receipt: PayloadGiftReceiptV4
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

export interface PayloadBillingIssuesV4 {
  readonly hasBillingIssues?: boolean
}

export type PayloadPurchaseMetadataV4 = (PayloadValidateSyncAppleResponseV4 | PayloadValidateSyncGoogleResponseV4 | PayloadValidateSyncPaddleResponseV4 | PayloadValidateSyncGiftResponseV4) & PayloadBillingIssuesV4

export type PayloadPurchaseDataV4 = (PayloadPurchaseMetadataV4 | PayloadPurchaseErrorV4)

export interface PayloadValidateSyncPurchasesResponseV4 {
  readonly purchases: PayloadPurchaseDataV4[]
}
