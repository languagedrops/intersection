import { PayloadIAPIdentifierV4 } from '../version-4'
import { AppPlatform } from '../appPlatform'

export enum SendEventsTypes {
    CartAbandoned = 'CartAbandoned',
}

export interface PayloadSendEventsCartAbandonedRequestV5 {
    readonly type: SendEventsTypes.CartAbandoned
    readonly topUpId: PayloadIAPIdentifierV4
    readonly platform: AppPlatform
}

export type PayloadSendEventsRequestV5 = PayloadSendEventsCartAbandonedRequestV5[]

export interface PayloadSendEventsResponseV5 {
    readonly success: boolean
}
