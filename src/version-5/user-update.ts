import { PayloadRequestBaseV5 } from './base'

export enum PayloadLoginTypeV5 {
    Google = 'Google',
    Facebook = 'Facebook',
    Email = 'Email',
    Apple = 'Apple',
  }

interface PayloadUserDetailsBaseV5<T extends PayloadLoginTypeV5> extends PayloadRequestBaseV5 {
    readonly type: T
}

interface PayloadLoggedInUserDetailsBaseV5<T extends PayloadLoginTypeV5> extends PayloadUserDetailsBaseV5<T> {
    readonly email: string
    readonly isSignUp?: boolean
}

export interface PayloadGoogleUserDetailsV5 extends PayloadLoggedInUserDetailsBaseV5<PayloadLoginTypeV5.Google> {
    readonly id: string
    readonly profileUrl: string
    readonly locale: string
    readonly firstName: string
    readonly lastName: string
}

export interface PayloadFacebookUserDetailsV5 extends PayloadLoggedInUserDetailsBaseV5<PayloadLoginTypeV5.Facebook> {
    readonly facebookId: string
    readonly locale: string
    readonly profileUrl: string
    readonly gender: string
    readonly firstName: string
    readonly lastName: string
}

export interface PayloadEmailUserDetailsV5 extends PayloadLoggedInUserDetailsBaseV5<PayloadLoginTypeV5.Email> {
    readonly locale: string
    readonly name: string
}

export interface PayloadAppleUserDetailsRequestV5 extends PayloadUserDetailsBaseV5<PayloadLoginTypeV5.Apple> {
    readonly userId: string
    readonly locale: string
    readonly name?: string
    readonly email?: string
}

export interface PayloadAppleUserDetailsResponseV5 extends PayloadLoggedInUserDetailsBaseV5<PayloadLoginTypeV5.Apple> {
    readonly userId: string
    readonly locale: string
    readonly name: string
    readonly email: string
}

export type PayloadUserDetailsRequestV5 = PayloadEmailUserDetailsV5 | PayloadGoogleUserDetailsV5 | PayloadFacebookUserDetailsV5 | PayloadAppleUserDetailsRequestV5
export type PayloadUserDetailsResponseV5 = PayloadEmailUserDetailsV5 | PayloadGoogleUserDetailsV5 | PayloadFacebookUserDetailsV5 | PayloadAppleUserDetailsResponseV5

export enum PayloadAppPlatformSendUserDetailsRequestV5 {
    iOS = 'iOS',
    Android = 'Android',
}

export interface PayloadDeviceSendUserDetailsRequestV5 {
    readonly deviceId: string
    readonly type?: string
    readonly name?: string
    readonly clientId?: string
    readonly appType?: string
    readonly platform?: PayloadAppPlatformSendUserDetailsRequestV5
}

export interface PayloadUserDetailsRestRequestV5 {
    readonly device?: PayloadDeviceSendUserDetailsRequestV5
    readonly consent?: {readonly [key: string]: boolean}
}

export interface PayloadUserEmailTimeResponseV5 {
    readonly lastExpirationEmailTime?: number
    readonly lastCancellationEmailTime?: number
}

export type PayloadSendUserDetailsRequestV5 = PayloadUserDetailsRequestV5 & PayloadUserDetailsRestRequestV5

export type PayloadUpdateUserResponseV5 = PayloadUserDetailsResponseV5 & PayloadUserEmailTimeResponseV5
