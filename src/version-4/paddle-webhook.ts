export type GiftingPremiumPeriod = 'month' | 'year' | 'lifetime' | '3months'

export interface PaddlePassthroughDataGifting {
    readonly gifterEmail: string,
    readonly receiverName: string,
    readonly premiumPeriod: GiftingPremiumPeriod,
}

export interface PaddlePassthroughObjectGifting {
    readonly passthrough: PaddlePassthroughDataGifting
}
