import { PayloadRequestBaseV4 } from './base'

export interface PayloadGiftSubscriptionRedeemCodeRequestV4 extends PayloadRequestBaseV4 {
  readonly couponCode: string
}

export enum PayloaddGiftSubscriptionRedeemCodeStatusV4 {
  Success = 'success',
  Expired = 'expired',
  Error = 'error',
}

interface PayloadGiftSubscriptionRedeemCodeResponseBase<T extends PayloaddGiftSubscriptionRedeemCodeStatusV4> {
  readonly status: T
}

export interface PayloadGiftSubscriptionRedeemCodeErrorV4 extends PayloadGiftSubscriptionRedeemCodeResponseBase<PayloaddGiftSubscriptionRedeemCodeStatusV4.Error> {
  readonly errorCode: string
}

export type PayloadGiftSubscriptionRedeemCodeResponseV4 = PayloadGiftSubscriptionRedeemCodeErrorV4
| PayloadGiftSubscriptionRedeemCodeResponseBase<PayloaddGiftSubscriptionRedeemCodeStatusV4.Success>
| PayloadGiftSubscriptionRedeemCodeResponseBase<PayloaddGiftSubscriptionRedeemCodeStatusV4.Expired>
