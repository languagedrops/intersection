export declare type GiftPeriod = 'month' | 'year' | 'lifetime' | '3months';
export interface PaddlePassthroughGiftData {
    readonly gifterEmail: string;
    readonly receiverName: string;
    readonly period: GiftPeriod;
}
export interface PaddlePassthroughGiftObject {
    readonly passthrough: PaddlePassthroughGiftData;
}
