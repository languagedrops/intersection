export declare enum OpenIdGrantType {
    WechatAuthCode = "WechatAuthCode",
    WechatRefreshToken = "WechatRefreshToken"
}
interface PayloadOpenIdRequestBaseV5<T extends OpenIdGrantType> {
    readonly type: T;
}
interface PayloadWechatAuthCodeRequestV5 extends PayloadOpenIdRequestBaseV5<OpenIdGrantType.WechatAuthCode> {
    readonly code: string;
    readonly appId: string;
}
interface PayloadWechatRefreshTokenRequestV5 extends PayloadOpenIdRequestBaseV5<OpenIdGrantType.WechatRefreshToken> {
    readonly refreshToken: string;
    readonly appId: string;
}
export declare enum OpenIdResponseType {
    Wechat = "Wechat"
}
interface PayloadOpenIdResponseBaseV5<T extends OpenIdResponseType> {
    readonly type: T;
}
interface PayloadOpenIdWechatResponseV5 extends PayloadOpenIdResponseBaseV5<OpenIdResponseType.Wechat> {
    readonly wechatId: string;
    readonly name?: string;
    readonly refreshToken: string;
    readonly idToken: string;
}
export declare type PayloadOpenIdConnectRequestV5 = PayloadWechatRefreshTokenRequestV5 | PayloadWechatAuthCodeRequestV5;
export declare type PayloadOpenIdConnectResponseV5 = PayloadOpenIdWechatResponseV5;
export {};
