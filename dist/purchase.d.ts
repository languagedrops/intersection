export declare enum IAPIdentifier {
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
    iapPremiumMonthly15 = "iapPremiumMonthly15",
    iapPremiumYearly70 = "iapPremiumYearly70",
    iapPremiumYearly70FreeTrial = "iapPremiumYearly70FreeTrial",
    iapPremiumYearly40 = "iapPremiumYearly40",
    iapPremiumLifetime160 = "iapPremiumLifetime160"
}
export interface AndroidReceipt {
    readonly data: string;
    readonly signature: string;
}
export interface PaddleReceipt {
    readonly productId: string;
    readonly orderId: string;
    readonly checkoutId: string;
    readonly purchaseDate: number;
    readonly coupon?: string;
    readonly paddleUserId: string;
    readonly email?: string;
}
export declare enum PurchaseProvider {
    Google = "google",
    Apple = "apple",
    Paddle = "paddle"
}
export interface ValidateSaveAppleRequest {
    readonly provider: PurchaseProvider.Apple;
    readonly receipt: string;
}
export interface ValidateSaveGoogleRequest {
    readonly provider: PurchaseProvider.Google;
    readonly receipts: AndroidReceipt[];
}
export interface ValidateSavePaddleRequest {
    readonly provider: PurchaseProvider.Paddle;
    readonly receipts: PaddleReceipt[];
}
export declare type ValidateSavePurchasesRequest = ValidateSaveAppleRequest | ValidateSaveGoogleRequest | ValidateSavePaddleRequest;
export declare enum PurchaseStatus {
    Valid = "valid",
    Expired = "expired",
    Refunded = "refunded",
    Invalid = "invalid",
    Error = "Error"
}
export interface PurchaseMetadata {
    readonly purchaseId: IAPIdentifier;
    readonly status: PurchaseStatus.Valid | PurchaseStatus.Expired | PurchaseStatus.Refunded | PurchaseStatus.Invalid;
    readonly purchaseDate: number;
    readonly expirationDate?: number;
}
export interface PurchaseError {
    readonly status: PurchaseStatus.Error;
    readonly errorCode: string;
}
export declare type PurchaseData = PurchaseMetadata | PurchaseError;
export interface ValidateSavePurchasesResponse {
    readonly purchases: PurchaseData[];
}
