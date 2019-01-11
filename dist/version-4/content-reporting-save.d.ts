export interface PayloadContentReportMetadataRequestV4 {
    readonly nativeLanguage: string;
    readonly learningLanguage: string;
    readonly wordId: string;
    readonly appVersion: string;
    readonly platform: string;
    readonly osVersion: string;
    readonly appType: string;
    readonly contentVersion: string;
    readonly soundVersion: string;
    readonly romanization: string;
    readonly alternativeWriting: string;
}
export interface PayloadContentReportRequestV4 {
    readonly metadata: PayloadContentReportMetadataRequestV4;
    readonly cliendUserId: string;
    readonly email: string;
    readonly comment: string;
    readonly issueType: string;
}
