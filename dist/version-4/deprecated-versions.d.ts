export interface PayloadGetDeprecatedStatusRequestV4 {
    readonly version: string;
    readonly appType: string;
    readonly platform: string;
    readonly osVerion: string;
    readonly manufacturer: string;
}
export declare enum DeprecatedMessage {
    WaitForNextVersion = "WaitForNextVersion",
    UpdateVersion = "UpdateVersion"
}
export interface PayloadGetDeprecatedAppVersionsResponseV4 {
    readonly isDeprecated: boolean;
    readonly message: DeprecatedMessage;
    readonly explanation?: string;
    readonly link?: string;
}
