import { PayloadRequestBaseV4 } from './base';
import { PayloadLoginTypeV4 } from './user-update';
export interface PayloadProviderForEmailRequestV4 extends PayloadRequestBaseV4 {
    readonly email: string;
}
export interface PayloadProviderForAppleIdRequestV4 extends PayloadRequestBaseV4 {
    readonly appleId: string;
}
export interface PayloadProviderForCognitoIdRequestV4 extends PayloadRequestBaseV4 {
    readonly cognitoId: string;
}
export interface PayloadProviderForLoginBaseResponseV4<T extends boolean> {
    readonly userExist: T;
}
export interface PayloadProviderForLoginSuccessResponseV4 extends PayloadProviderForLoginBaseResponseV4<true> {
    readonly provider: PayloadLoginTypeV4;
    readonly migratedToFirebase: boolean;
}
export interface PayloadProviderForLoginNoUserResponseV4 extends PayloadProviderForLoginBaseResponseV4<false> {
}
export declare type PayloadProviderForLoginResponseV4 = PayloadProviderForLoginNoUserResponseV4 | PayloadProviderForLoginSuccessResponseV4;
export declare type PayloadProviderForLoginRequestV4 = PayloadProviderForEmailRequestV4 | PayloadProviderForAppleIdRequestV4 | PayloadProviderForCognitoIdRequestV4;
