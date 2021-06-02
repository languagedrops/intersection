import { PayloadRequestBaseV4 } from './base';
export declare enum PayloadLoginTypeV4 {
    Google = "Google",
    Facebook = "Facebook",
    Email = "Email",
    Apple = "Apple",
    Wechat = "Wechat"
}
interface PayloadUserDetailsBaseV4<T extends PayloadLoginTypeV4> extends PayloadRequestBaseV4 {
    readonly type: T;
}
interface PayloadLoggedInUserDetailsBaseV4<T extends PayloadLoginTypeV4> extends PayloadUserDetailsBaseV4<T> {
    readonly email: string;
}
export interface PayloadGoogleUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Google> {
    readonly id: string;
    readonly profileUrl: string;
    readonly locale: string;
    readonly firstName: string;
    readonly lastName: string;
}
export interface PayloadFacebookUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Facebook> {
    readonly facebookId: string;
    readonly locale: string;
    readonly profileUrl: string;
    readonly gender: string;
    readonly firstName: string;
    readonly lastName: string;
}
export interface PayloadEmailUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Email> {
    readonly locale: string;
    readonly name: string;
}
export interface PayloadAppleUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Apple> {
    readonly locale: string;
    readonly name: string;
    readonly appleUserId?: string;
}
export interface PayloadWechatUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Wechat> {
    readonly locale: string;
    readonly name?: string;
    readonly wechatId: string;
}
export declare type PayloadUserDetailsV4 = PayloadEmailUserDetailsV4 | PayloadGoogleUserDetailsV4 | PayloadFacebookUserDetailsV4 | PayloadAppleUserDetailsV4 | PayloadWechatUserDetailsV4;
export declare enum PayloadAppPlatformSendUserDetailsRequestV4 {
    iOS = "iOS",
    Android = "Android"
}
export interface PayloadDeviceSendUserDetailsRequestV4 {
    readonly deviceId: string;
    readonly type?: string;
    readonly name?: string;
    readonly clientId?: string;
    readonly appType?: string;
    readonly platform?: PayloadAppPlatformSendUserDetailsRequestV4;
}
interface PayloadUserMigrationV4<T extends boolean> {
    readonly migratedToFirebase?: T;
}
interface PayloadWasMigratedV4 extends PayloadUserMigrationV4<true> {
    readonly mergedAuthProvider?: PayloadLoginTypeV4;
}
export interface PayloadUserDetailsRestRequestV4 extends PayloadWasMigratedV4 {
    readonly device?: PayloadDeviceSendUserDetailsRequestV4;
    readonly consent?: {
        readonly [key: string]: boolean;
    };
}
export interface PayloadUserEmailTimeResponseV4 {
    readonly lastExpirationEmailTime?: number;
    readonly lastCancellationEmailTime?: number;
}
export interface PayloadUserResponseV4 {
    readonly dropsUserId?: string;
    readonly isSignUp?: boolean;
}
export declare type PayloadSendUserDetailsRequestV4 = PayloadUserDetailsV4 & PayloadUserDetailsRestRequestV4;
export declare type PayloadUpdateUserResponseV4 = PayloadUserDetailsV4 & PayloadUserEmailTimeResponseV4 & PayloadUserResponseV4;
export {};
