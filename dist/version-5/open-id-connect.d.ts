export declare enum PayloadGrantTypes {
    WechatAuthCode = "WechatAuthCode",
    WechatRefreshToken = "WechatRefreshToken"
}
interface PayloadOpenIdTokenV5<T extends PayloadGrantTypes> {
    readonly type: T;
}
interface PayloadWechatAuthCodeRequestV5 extends PayloadOpenIdTokenV5<PayloadGrantTypes.WechatAuthCode> {
    readonly code: string;
}
interface PayloadWechatRefreshTokenRequestV5 extends PayloadOpenIdTokenV5<PayloadGrantTypes.WechatRefreshToken> {
    readonly refreshToken: string;
}
interface PayloadOpenIdWechatResponseV5 {
    readonly wechatOpenId: string;
    readonly refreshToken: string;
    readonly idToken: string;
}
export declare type PayloadOpenIdConnectRequestV5 = PayloadWechatRefreshTokenRequestV5 | PayloadWechatAuthCodeRequestV5;
export declare type PayloadOpenIdConnectResponseV5 = PayloadOpenIdWechatResponseV5;
export {};
