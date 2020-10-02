import { PayloadIAPIdentifierV4 } from '../version-4';
import { AppPlatform } from '../appPlatform';
export declare enum SendEventsTypes {
    CartAbandoned = "CartAbandoned",
    PurchaseGiftSubscription = "PurchaseGiftSubscription"
}
export interface PayloadSendEventsCartAbandonedRequestV5 {
    readonly type: SendEventsTypes.CartAbandoned;
    readonly topUpId: PayloadIAPIdentifierV4;
    readonly platform: AppPlatform;
}
export interface PayloadSendPurchaseGiftSubscriptionRequestV5 {
    readonly type: SendEventsTypes.PurchaseGiftSubscription;
    readonly email: string;
}
declare type SendEventRequestItem = PayloadSendEventsCartAbandonedRequestV5 | PayloadSendPurchaseGiftSubscriptionRequestV5;
export declare type PayloadSendEventsRequestV5 = SendEventRequestItem[];
export interface PayloadSendEventsResponseV5 {
    readonly success: boolean;
}
export {};
