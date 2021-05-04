import { LanguageISO } from '../language'

export enum BiteRequestTypes {
    create = 'create',
    get = 'get',
}

export interface PayloadGetBiteRequestV5 {
    readonly id: string
    readonly type: BiteRequestTypes.get
}

export interface PayloadCreateBiteRequestV5 {
    readonly creator: string
    readonly words: string[]
    readonly suggestedLanguage?: LanguageISO
    readonly onlyOfferSuggestedLanguage?: boolean
    readonly disabled?: boolean
    readonly theme?: string,
    readonly backgroundImage?: string
    readonly type: BiteRequestTypes.create
}

export type PayloadBiteRequestV5 = PayloadCreateBiteRequestV5 | PayloadGetBiteRequestV5

export interface PayloadBiteResponseV5 {
    readonly id: string
    readonly creator: string
    readonly words: string[]
    readonly suggestedLanguage?: LanguageISO
    readonly onlyOfferSuggestedLanguage?: boolean
    readonly disabled?: boolean
    readonly theme?: string,
    readonly backgroundImage?: string
}
