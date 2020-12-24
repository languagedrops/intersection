import { PayloadRequestBaseV5 } from './base';
import { PayloadLoginTypeV5 } from './user-update';
interface PayloadDeleteUserRequestV5Base<T extends PayloadLoginTypeV5> extends PayloadRequestBaseV5 {
    readonly loginType: T;
}
interface PayloadDeleteUserRequestV5Facebook extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Facebook> {
}
interface PayloadDeleteUserRequestV5Google extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Google> {
}
interface PayloadDeleteUserRequestV5Apple extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Apple> {
    readonly firebaseUid: string;
    readonly wasMigrated: boolean;
}
interface PayloadDeleteUserRequestV5Email extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Email> {
    readonly firebaseUid: string;
    readonly wasMigrated: boolean;
}
export declare type PayloadDeleteUserRequestV5 = PayloadDeleteUserRequestV5Facebook | PayloadDeleteUserRequestV5Google | PayloadDeleteUserRequestV5Apple | PayloadDeleteUserRequestV5Email;
export interface PayloadDeleteUserResponseV5 {
    readonly success: boolean;
}
export {};
