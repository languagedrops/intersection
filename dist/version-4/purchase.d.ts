import { PayloadRequestBaseV4 } from './base';
export declare enum PayloadIAPIdentifierV4 {
    iapForever10Mins = "iapForever10Mins",
    iapForever10MinsDiscounted = "iapForever10MinsDiscounted",
    iapForever10MinsDiscounted40 = "iapForever10MinsDiscounted40",
    iapForever10MinsDiscounted45 = "iapForever10MinsDiscounted45",
    iapForever10MinsDiscounted50 = "iapForever10MinsDiscounted50",
    iapForever10MinsDiscounted80 = "iapForever10MinsDiscounted80",
    iapForever99Mins = "iapForever99Mins",
    iapForever99MinsDiscounted = "iapForever99MinsDiscounted",
    iapForever99MinsDiscounted40 = "iapForever99MinsDiscounted40",
    iapForever99MinsDiscounted45 = "iapForever99MinsDiscounted45",
    iapForever99MinsDiscounted50 = "iapForever99MinsDiscounted50",
    iapForever99MinsDiscounted80 = "iapForever99MinsDiscounted80",
    iapForeverAllLanguages = "iapForeverAllLanguages",
    iapForeverAllLanguagesDiscounted = "iapForeverAllLanguagesDiscounted",
    iapForeverAllLanguagesDiscounted40 = "iapForeverAllLanguagesDiscounted40",
    iapForeverAllLanguagesDiscounted45 = "iapForeverAllLanguagesDiscounted45",
    iapForeverAllLanguagesDiscounted50 = "iapForeverAllLanguagesDiscounted50",
    iapForeverAllLanguagesDiscounted80 = "iapForeverAllLanguagesDiscounted80",
    iap10MinsMonthly = "iap10MinsMonthly",
    iap10MinsYearly = "iap10MinsYearly",
    iapUnlimitedMonthly = "iapUnlimitedMonthly",
    iapUnlimitedYearly = "iapUnlimitedYearly",
    iapAllLanguagesMonthly = "iapAllLanguagesMonthly",
    iapAllLanguagesMonthlyFreeTrial = "iapAllLanguagesMonthlyFreeTrial",
    iapAllLanguagesYearly = "iapAllLanguagesYearly",
    iapUnlimitedMonthlyFreeTrial = "iapUnlimitedMonthlyFreeTrial",
    iapPremiumMonthly10 = "iapPremiumMonthly10",
    iapPremiumMonthly13 = "iapPremiumMonthly13",
    iapPremiumMonthly15 = "iapPremiumMonthly15",
    iapPremium3months30 = "iapPremium3months30",
    iapPremiumQuarterly30 = "iapPremiumQuarterly30",
    iapPremium1year70 = "iapPremium1year70",
    iapPremiumYearly70 = "iapPremiumYearly70",
    iapPremiumYearly70FreeTrial = "iapPremiumYearly70FreeTrial",
    iapPremiumYearly70FreeTrial3Days = "iapPremiumYearly70FreeTrial3Days",
    iapPremiumYearly70FreeTrial14Days = "iapPremiumYearly70FreeTrial14Days",
    iapPremiumYearly55 = "iapPremiumYearly55",
    iapPremiumYearly50 = "iapPremiumYearly50",
    iapPremium1year40 = "iapPremium1year40",
    iapPremiumYearly40 = "iapPremiumYearly40",
    iapPremiumYearly45 = "iapPremiumYearly45",
    iapPremiumYearly40FreeTrial = "iapPremiumYearly40FreeTrial",
    iapPremiumYearly35 = "iapPremiumYearly35",
    iapPremiumYearly30 = "iapPremiumYearly30",
    iapPremiumYearly25 = "iapPremiumYearly25",
    iapPremiumLifetime80 = "iapPremiumLifetime80",
    iapPremiumLifetime55 = "iapPremiumLifetime55",
    iapPremiumLifetime160 = "iapPremiumLifetime160",
    iapPremiumLifetime180 = "iapPremiumLifetime180",
    iapPremiumGift1Month10 = "iapPremiumGift1Month10",
    iapPremiumGift1Year35 = "iapPremiumGift1Year35",
    iapPremiumGiftLifetime160 = "iapPremiumGiftLifetime160"
}
export declare namespace PayloadIAPIdentifierV4 {
    const all: PayloadIAPIdentifierV4[];
}
export interface PayloadAndroidReceiptV4 {
    readonly data: string;
    readonly signature: string;
}
export interface PayloadPaddleReceiptV4 {
    readonly productId: string;
    readonly orderId: string;
    readonly checkoutId: string;
    readonly purchaseDate: number;
    readonly coupon?: string;
    readonly paddleUserId: string;
    readonly email?: string;
    readonly subscriptionId?: string;
    readonly cancellationEffectiveDate?: number | Date;
    readonly expirationDate?: number | Date;
    readonly cancelUrl?: string;
}
export interface PayloadGiftReceiptV4 {
    readonly couponCode: string;
}
export declare enum PayloadPurchaseProviderV4 {
    Google = "google",
    Apple = "apple",
    Paddle = "paddle",
    NoProvider = "noProvider",
    Gift = "gift"
}
export interface PayloadValidateSyncGiftRequestV4 extends PayloadRequestBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Gift;
    readonly receipt: PayloadGiftReceiptV4;
}
export interface PayloadValidateSyncAppleRequestV4 extends PayloadRequestBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Apple;
    readonly receipt: string;
}
export interface PayloadValidateSyncGoogleRequestV4 extends PayloadRequestBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Google;
    readonly receipts: PayloadAndroidReceiptV4[];
}
export interface PayloadValidateSyncPaddleRequestV4 extends PayloadRequestBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Paddle;
    readonly receipts: PayloadPaddleReceiptV4[];
}
export interface PayloadValidateSyncEmptyRequestV4 extends PayloadRequestBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.NoProvider;
}
export declare type ValidateSyncPurchasesRequestV4 = (PayloadValidateSyncAppleRequestV4 | PayloadValidateSyncGoogleRequestV4 | PayloadValidateSyncPaddleRequestV4 | PayloadValidateSyncEmptyRequestV4 | PayloadValidateSyncGiftRequestV4);
export declare enum PayloadPurchaseStatusV4 {
    Valid = "valid",
    Expired = "expired",
    Refunded = "refunded",
    Invalid = "invalid",
    Error = "Error"
}
export interface PayloadPurchaseMetadataBaseV4 {
    readonly topUpId: PayloadIAPIdentifierV4;
    readonly status: PayloadPurchaseStatusV4.Valid | PayloadPurchaseStatusV4.Expired | PayloadPurchaseStatusV4.Refunded;
    readonly purchaseDate: number;
    readonly transactionId: string;
    readonly cancellationDate?: number;
    readonly expirationDate?: number;
}
export interface PayloadValidateSyncGiftResponseV4 extends PayloadPurchaseMetadataBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Gift;
    readonly receipt: PayloadGiftReceiptV4;
}
export interface PayloadValidateSyncAppleResponseV4 extends PayloadPurchaseMetadataBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Apple;
    readonly receipt: string;
}
export interface PayloadValidateSyncGoogleResponseV4 extends PayloadPurchaseMetadataBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Google;
    readonly receipt: PayloadAndroidReceiptV4;
}
export interface PayloadValidateSyncPaddleResponseV4 extends PayloadPurchaseMetadataBaseV4 {
    readonly provider: PayloadPurchaseProviderV4.Paddle;
    readonly receipt: PayloadPaddleReceiptV4;
}
export interface PayloadPurchaseErrorV4 {
    readonly status: PayloadPurchaseStatusV4.Error | PayloadPurchaseStatusV4.Invalid;
    readonly errorCode: string;
}
export declare type PayloadPurchaseMetadataV4 = (PayloadValidateSyncAppleResponseV4 | PayloadValidateSyncGoogleResponseV4 | PayloadValidateSyncPaddleResponseV4 | PayloadValidateSyncGiftResponseV4);
export declare type PayloadPurchaseDataV4 = (PayloadPurchaseMetadataV4 | PayloadPurchaseErrorV4);
export interface PayloadValidateSyncPurchasesResponseV4 {
    readonly purchases: PayloadPurchaseDataV4[];
}
