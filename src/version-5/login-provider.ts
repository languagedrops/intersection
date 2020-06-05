import { PayloadRequestBaseV5 } from './base'
import { PayloadLoginTypeV5 } from './user-update'

export interface PayloadProviderForEmailRequestV5 extends PayloadRequestBaseV5 {
    readonly email: string
}

export interface PayloadProviderForAppleIdRequestV5 extends PayloadRequestBaseV5 {
    readonly appleId: string
}

export interface PayloadProviderForCognitoIdRequestV5 extends PayloadRequestBaseV5 {
    readonly cognitoId: string
}

export interface PayloadProviderForLoginBaseResponseV5 <T extends boolean> {
  readonly userExist: T
}

export interface PayloadProviderForLoginSuccessResponseV5 extends PayloadProviderForLoginBaseResponseV5<true> {
    readonly providers: PayloadLoginTypeV5[]
    readonly migratedToFirebase: boolean
}

export interface PayloadProviderForLoginNoUserResponseV5 extends PayloadProviderForLoginBaseResponseV5<false> {}

export type PayloadProviderForLoginResponseV5 = PayloadProviderForLoginNoUserResponseV5 | PayloadProviderForLoginSuccessResponseV5

export type PayloadProviderForLoginRequestV5 = PayloadProviderForEmailRequestV5 | PayloadProviderForAppleIdRequestV5 | PayloadProviderForCognitoIdRequestV5
