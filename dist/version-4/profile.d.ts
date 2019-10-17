import { PayloadRequestBaseV4 } from './base';
export interface PayloadProfileData {
    readonly firstName: string;
    readonly lastName?: string;
    readonly profileId: string;
}
export interface PayloadSaveProfileRequestV4 extends PayloadRequestBaseV4 {
    readonly firstName: string;
    readonly lastName?: string;
    readonly profileId: string;
}
export declare type PayloadSaveProfileResponseV4 = PayloadProfileData;
export interface PayloadCreateProfileRequestV4 extends PayloadRequestBaseV4 {
    readonly firstName: string;
}
export declare type PayloadCreateProfileResponseV4 = PayloadProfileData;
export interface PayloadGetProfilesResponseV4 {
    readonly profiles: PayloadProfileData[];
}
