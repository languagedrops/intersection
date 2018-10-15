export interface AndroidReceipt {
  readonly data: string
  readonly signature: string
}

export interface PaddleReceipt {
  readonly productId: string
  readonly orderId: string
  readonly checkoutId: string
  readonly purchaseDate: number
  readonly coupon?: string,
  readonly paddleUserId: string
  readonly email?: string
}

export enum PurchaseProvider {
  Google = 'google',
  Apple = 'apple',
  Paddle = 'paddle',
}

export interface ValidateAppleRequest {
  readonly provider: PurchaseProvider.Apple
  readonly receipt: string
}

export interface ValidateGoogleRequest {
  readonly provider: PurchaseProvider.Google
  readonly receipts: AndroidReceipt[]
}

export interface ValidatePaddleRequest {
  readonly provider: PurchaseProvider.Paddle
  readonly receipts: PaddleReceipt[]
}

export type ValidatePurchasesRequest = ValidateAppleRequest | ValidateGoogleRequest | ValidatePaddleRequest

export enum PurchaseStatus {
  Valid = 'valid',
  Expired = 'expired',
  Refunded = 'refunded',
  Invalid = 'invalid',
  Error = 'Error',
}

export interface PurchaseMetadata {
  readonly productId: string
  readonly status: PurchaseStatus.Valid | PurchaseStatus.Expired | PurchaseStatus.Refunded | PurchaseStatus.Invalid
  readonly purchaseDate: number
  readonly expirationDate?: number
}

export interface PurchaseMetadataError {
  readonly status: PurchaseStatus.Error
  readonly errorCode: string
}

export interface ValidatePurchasesResponse {
  readonly purchases: Array<PurchaseMetadata | PurchaseMetadataError>
}
