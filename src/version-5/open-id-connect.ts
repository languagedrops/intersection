export enum OpenIdGrantType {
  WechatAuthCode = 'WechatAuthCode',
  WechatRefreshToken = 'WechatRefreshToken',
}

interface PayloadOpenIdRequestBaseV5<T extends OpenIdGrantType> {
  readonly type: T
}

interface PayloadWechatAuthCodeRequestV5 extends PayloadOpenIdRequestBaseV5<OpenIdGrantType.WechatAuthCode> {
  readonly code: string
}

interface PayloadWechatRefreshTokenRequestV5 extends PayloadOpenIdRequestBaseV5<OpenIdGrantType.WechatRefreshToken> {
  readonly refreshToken: string
}

export enum OpenIdResponseType {
  Wechat = 'Wechat',
}

interface PayloadOpenIdResponseBaseV5<T extends OpenIdResponseType> {
  readonly type: T
}

interface PayloadOpenIdWechatResponseV5 extends PayloadOpenIdResponseBaseV5<OpenIdResponseType.Wechat> {
  readonly wechatOpenId: string
  readonly name?: string
  readonly refreshToken: string
  readonly idToken: string // JWT token
}

export type PayloadOpenIdConnectRequestV5 = PayloadWechatRefreshTokenRequestV5 | PayloadWechatAuthCodeRequestV5
export type PayloadOpenIdConnectResponseV5 = PayloadOpenIdWechatResponseV5
