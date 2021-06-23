import { PayloadRequestBaseV5 } from './base';
export declare enum PayloadDynamicLinksRequestType {
    sync = "sync",
    refresh = "refresh",
    syncLongLink = "syncLongLink",
    refreshLongLink = "refreshLongLink"
}
export interface PayloadDynamicLinksRequestV5 extends PayloadRequestBaseV5 {
    readonly type: PayloadDynamicLinksRequestType;
}
export interface PayloadDynamicLinksResponseV5 {
    readonly link: string;
}
