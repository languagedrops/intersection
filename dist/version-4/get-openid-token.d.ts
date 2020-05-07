import { PayloadRequestBaseV4 } from './base';
export interface GetOpenIdTokenRequestV4Details {
    readonly appleUserId: string;
    readonly email: string;
}
export interface GetOpenIdTokenResponseV4Details {
    readonly userId: string;
    readonly token: string;
}
export declare type PayloadGetOpenIdTokenRequestV4 = PayloadRequestBaseV4 & GetOpenIdTokenRequestV4Details;
export declare type PayloadGetOpenIdTokenResponseV4 = PayloadRequestBaseV4 & GetOpenIdTokenResponseV4Details;
