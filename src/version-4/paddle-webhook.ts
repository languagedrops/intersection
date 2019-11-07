export enum GiftPeriod {
   Month = 'month',
   Year = 'year',
   Lifetime = 'lifetime',
}

export interface PaddlePassthroughGiftData {
    readonly gifterEmail: string,
    readonly receiverName: string,
    readonly period: GiftPeriod,
}

export interface PaddlePassthroughGiftObject {
    readonly passthrough: PaddlePassthroughGiftData
}
