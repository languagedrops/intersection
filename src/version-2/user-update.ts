export enum PayloadLoginTypeV2 {
  Google = 'Google',
  Facebook = 'Facebook',
  Email = 'Email',
}

interface PayloadUserDetailsBaseV2<T extends PayloadLoginTypeV2> {
  readonly type: T
}

interface PayloadLoggedInUserDetailsBaseV2<T extends PayloadLoginTypeV2> extends PayloadUserDetailsBaseV2<T> {
  readonly email: string
}

export interface PayloadGoogleUserDetailsV2 extends PayloadLoggedInUserDetailsBaseV2<PayloadLoginTypeV2.Google> {
  readonly id: string
  readonly profileUrl: string
  readonly locale: string
  readonly firstName: string
  readonly lastName: string
}

export interface PayloadFacebookUserDetailsV2 extends PayloadLoggedInUserDetailsBaseV2<PayloadLoginTypeV2.Facebook> {
  readonly facebookId: string
  readonly locale: string
  readonly profileUrl: string
  readonly gender: string
  readonly firstName: string
  readonly lastName: string
}

export interface PayloadEmailUserDetailsV2 extends PayloadLoggedInUserDetailsBaseV2<PayloadLoginTypeV2.Email> {
  readonly locale: string
  readonly name: string
  readonly refreshToken: string
}

type PayloadUserDetailsV2 = PayloadEmailUserDetailsV2 | PayloadGoogleUserDetailsV2 | PayloadFacebookUserDetailsV2

export enum PayloadAppPlatformSendUserDetailsRequestV2 {
  iOS = 'iOS',
  Android = 'Android',
}

export interface PayloadDeviceSendUserDetailsRequestV2 {
  readonly deviceId: string
  readonly type?: string
  readonly name?: string
  readonly clientId?: string
  readonly appType?: string
  readonly platform?: PayloadAppPlatformSendUserDetailsRequestV2
}

export interface PayloadUserDetailsRestRequestV2 {
  readonly device?: PayloadDeviceSendUserDetailsRequestV2
  readonly consent?: {readonly [key: string]: boolean}
}

export type PayloadSendUserDetailsRequestV2 = PayloadUserDetailsV2 & PayloadUserDetailsRestRequestV2
