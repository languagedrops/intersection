import { PayloadUserDetailsV4 } from './user';
export interface PayloadDeviceSendUserDetailsRequestV4 {
    readonly deviceId: string;
    readonly type?: string;
    readonly name?: string;
    readonly clientId?: string;
    readonly appType?: string;
}
export interface PayloadUserDetailsRestRequestV4 {
    readonly device?: PayloadDeviceSendUserDetailsRequestV4;
    readonly consent?: {
        readonly [key: string]: boolean;
    };
}
export declare type PayloadSendUserDetailsRequestV4 = PayloadUserDetailsV4 & PayloadUserDetailsRestRequestV4;
