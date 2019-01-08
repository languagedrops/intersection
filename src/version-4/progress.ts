import { Dictionary } from './dictionary'

export interface PayloadTopicUserDataV4 {
    readonly lastModified?: number
}

export interface PayloadWordUserDataV4 {
    readonly progress: number
    readonly firstTestDate?: number
    readonly lastTestDate?: number
    readonly hidden: boolean
    readonly failures?: number
    readonly lastModified?: number
}

export interface PayloadSyncUserProgressRequestV4 {
    readonly topics: Dictionary<PayloadTopicUserDataV4>
    readonly words: Dictionary<PayloadWordUserDataV4>
}

export type PayloadSyncUserProgressResponseV4 = PayloadSyncUserProgressRequestV4
