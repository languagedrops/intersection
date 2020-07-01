import { PayloadIAPIdentifierV4 } from '../version-4';
export declare enum SendEventsTypes {
    CartAbandoned = "CartAbandoned"
}
export interface PayloadSendEventsCartAbandonedRequestV5 {
    readonly type: SendEventsTypes.CartAbandoned;
    readonly topUpId: PayloadIAPIdentifierV4;
}
export declare type PayloadSendEventsRequestV5 = PayloadSendEventsCartAbandonedRequestV5[];
export interface PayloadSendEventsResponseV5 {
    readonly success: boolean;
}
