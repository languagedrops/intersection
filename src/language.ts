import { sortedByProperty } from '@drops-developers/majime'

export enum LanguageISO {
    HU = 'HU',
    KO = 'KO',
    ES = 'ES',
    JP = 'JP',
    FR = 'FR',
    EN = 'EN',
    ZH = 'ZH',
    IT = 'IT',
    DE = 'DE',
    RU = 'RU',
    PT = 'PT',
    HE = 'HE',
    AR = 'AR',
    TR = 'TR',
    DA = 'DA',
    SV = 'SV',
    NO = 'NO',
    HI = 'HI',
    TL = 'TL',
    VI = 'VI',
    EO = 'EO',
    NL = 'NL',
    IC = 'IC',
    ID = 'ID',
    ENGB = 'ENGB',
    ESMX = 'ESMX',
    PTPT = 'PTPT',
    ZHYUE = 'ZHYUE',
    TH = 'TH',
    PL = 'PL',
    HAW = 'HAW',
    PA = 'PA',
    MI = 'MI',
    SM = 'SM',
    EL = 'EL',
    FI = 'FI',
    ASE = 'ASE',
    AIN = 'AIN',
    FA = 'FA',
    ET = 'ET',
    HR = 'HR',
    SR = 'SR',
    BS = 'BS',
    SA = 'SA',
    SW = 'SW',
    YO = 'YO',
    IG = 'IG',
}

export namespace LanguageISO {
  export const all: LanguageISO[] = Object.values(LanguageISO).filter((v) => typeof v === 'string') as LanguageISO[]
  export const allAlphabetized: LanguageISO[] = sortedByProperty(all, (iso: LanguageISO) => iso)
  export const getByName = (name: string) => all.find((languageIso) => languageIso.toString() === name)
}

export enum LanguageName {
    English = 'English',
    Hungarian = 'Hungarian',
    Chinese = 'Chinese',
    Korean = 'Korean',
    Spanish = 'Spanish',
    Japanese = 'Japanese',
    French = 'French',
    Italian = 'Italian',
    German = 'German',
    Russian = 'Russian',
    Portuguese = 'Portuguese',
    Hebrew = 'Hebrew',
    Arabic = 'Arabic',
    Turkish = 'Turkish',
    Danish = 'Danish',
    Swedish = 'Swedish',
    Norwegian = 'Norwegian',
    Hindi = 'Hindi',
    Tagalog = 'Tagalog',
    Vietnamese = 'Vietnamese',
    Esperanto =  'Esperanto',
    Dutch = 'Dutch',
    Icelandic = 'Icelandic',
    Indonesian = 'Indonesian',
    EnglishBritish = 'EnglishBritish',
    SpanishMexican = 'SpanishMexican',
    PortugueseEuropean = 'PortugueseEuropean',
    ChineseCantonese = 'ChineseCantonese',
    Thai = 'Thai',
    Polish = 'Polish',
    Hawaiian = 'Hawaiian',
    Punjabi = 'Punjabi',
    Maori = 'Maori',
    Samoan = 'Samoan',
    Greek = 'Greek',
    Finnish = 'Finnish',
    ASL = 'Asl',
    Ainu = 'Ainu',
    Persian = 'Persian',
    Estonian = 'Estonian',
    Croatian = 'Croatian',
    Bosnian = 'Bosnian',
    Serbian = 'Serbian',
    Sanskrit = 'Sanskrit',
    Swahili = 'Swahili',
    Yoruba = 'Yoruba',
    Igbo = 'Igbo',
}

export interface Language {
    readonly iso: LanguageISO
    readonly name: LanguageName
    readonly alphabet: string[]
    readonly alternativeAlphabet?: string[]
    readonly hasRomanAid: boolean
    readonly hasAlternativeTranslation: boolean
    readonly hasAlphabetTopic: boolean
    readonly availableAsLearning: boolean
    readonly availableAsNative: boolean
    readonly isUiLocalized: boolean
    readonly availableInVisualDictionary: boolean
}
