import { Dictionary } from './dictionary';
export interface PayloadTopicUserDataV4 {
    readonly lastModified?: number;
}
export interface PayloadWordUserDataV4 {
    readonly progress: number;
    readonly firstTestDate?: number;
    readonly lastTestDate?: number;
    readonly hidden: boolean;
    readonly failures?: number;
    readonly lastModified?: number;
}
export interface PayloadSyncUserProgressStateRequestV4 {
    readonly topicUserData: Dictionary<PayloadTopicUserDataV4>;
    readonly wordUserData: Dictionary<PayloadWordUserDataV4>;
}
export declare type PayloadSyncUserProgressStateResponseV4 = PayloadSyncUserProgressStateRequestV4;
