import { PayloadRequestBaseV5 } from './base'

export enum PayloadDynamicLinksRequestType {
    create = 'sync',
    refresh = 'refresh',
}

export interface PayloadDynamicLinksRequestV5 extends PayloadRequestBaseV5 {
    readonly type: PayloadDynamicLinksRequestType
}

export interface PayloadDynamicLinksResponseV5 {
    readonly link: string
}
