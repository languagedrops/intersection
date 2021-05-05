import { LanguageISO } from '../language';
export declare enum BiteRequestTypes {
    create = "create",
    get = "get"
}
export interface PayloadGetBiteRequestV5 {
    readonly id: string;
    readonly type: BiteRequestTypes.get;
}
interface PayloadBiteBase {
    readonly id: string;
    readonly creator: string;
    readonly words: string[];
    readonly suggestedLanguage?: LanguageISO;
    readonly onlyOfferSuggestedLanguage?: boolean;
    readonly disabled?: boolean;
    readonly theme?: string;
    readonly backgroundImage?: string;
}
export interface PayloadCreateBiteRequestV5 extends PayloadBiteBase {
    readonly type: BiteRequestTypes.create;
}
export declare type PayloadBiteRequestV5 = PayloadCreateBiteRequestV5 | PayloadGetBiteRequestV5;
export declare type PayloadBiteResponseV5 = PayloadBiteBase;
export {};
