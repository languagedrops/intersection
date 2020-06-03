import { PayloadRequestBaseV4 } from './base'
import { PayloadLoginTypeV4 } from './user-update'

export interface PayloadProviderForEmailRequestV4 extends PayloadRequestBaseV4 {
    readonly email: string
    readonly appleUserId?: string
    readonly cognitoUserId?: string
}

export interface PayloadProviderForEmailBaseResponseV4 <T extends boolean> {
  readonly userExist: T
}

export interface PayloadProviderForEmailSuccessResponseV4 extends PayloadProviderForEmailBaseResponseV4<true> {
    readonly provider: PayloadLoginTypeV4
}

export interface PayloadProviderForEmailNoUserResponseV4 extends PayloadProviderForEmailBaseResponseV4<false> {}

export type PayloadProviderForEmailResponseV4 = PayloadProviderForEmailNoUserResponseV4 | PayloadProviderForEmailSuccessResponseV4
