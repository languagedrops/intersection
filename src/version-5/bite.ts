import { LanguageISO } from '../language'

export enum BiteRequestTypes {
    create = 'create',
    get = 'get',
}

export interface PayloadGetBiteRequestV5 {
    readonly id: string
    readonly type: BiteRequestTypes.get
}

interface PayloadBiteBase {
    readonly creator: string
    readonly words: string[]
    readonly suggestedLanguage?: LanguageISO
    readonly onlyOfferSuggestedLanguage?: boolean
    readonly disabled?: boolean
    readonly theme?: string,
    readonly backgroundImage?: string
}

export interface PayloadCreateBiteRequestV5 extends PayloadBiteBase {
    readonly type: BiteRequestTypes.create
}

export type PayloadBiteRequestV5 = PayloadCreateBiteRequestV5 | PayloadGetBiteRequestV5

export interface PayloadBiteResponseV5 extends PayloadBiteBase {
    readonly id: string
}
