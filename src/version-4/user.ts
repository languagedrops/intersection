
export enum PayloadLoginTypeV4 {
    Google = 'Google',
    Facebook = 'Facebook',
    Email = 'Email',
  }

interface PayloadUserDetailsBaseV4<T extends PayloadLoginTypeV4> {
    readonly type: T
}

interface PayloadLoggedInUserDetailsBaseV4<T extends PayloadLoginTypeV4> extends PayloadUserDetailsBaseV4<T> {
    readonly email: string
}

export interface PayloadGoogleUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Google> {
    readonly id: string
    readonly profileUrl: string
    readonly locale: string
    readonly firstName: string
    readonly lastName: string
}

export interface PayloadFacebookUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Facebook> {
    readonly facebookId: string
    readonly locale: string
    readonly profileUrl: string
    readonly gender: string
    readonly firstName: string
    readonly lastName: string
}

export interface PayloadEmailUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Email> {
    readonly locale: string
    readonly name: string
}

export type PayloadUserDetailsV4 = PayloadEmailUserDetailsV4 | PayloadGoogleUserDetailsV4 | PayloadFacebookUserDetailsV4
