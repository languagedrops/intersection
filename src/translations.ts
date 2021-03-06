export interface WordTranslation {
  readonly p?: string
  readonly ro?: string
  readonly alt?: string
  readonly male?: string
  readonly verbal?: string
  readonly altRo?: string
  readonly maleRo?: string
  readonly verbalRo?: string
  readonly v?: number
  readonly vRo?: number
  readonly vAlt?: number
  readonly vAltRo?: number
  readonly vMale?: number
  readonly vMaleRo?: number
  readonly vVerbal?: number
  readonly vVerbalRo?: number
  readonly vSoft?: number
  readonly vSoftRo?: number
  readonly vSoftAlt?: number
  readonly vSoftAltRo?: number
  readonly vSoftMale?: number
  readonly vSoftMaleRo?: number
  readonly vSoftVerbal?: number
  readonly vSoftVerbalRo?: number
}

export interface TopicTranslation {
  readonly p?: string
  readonly alt?: string
}

export interface CategoryTranslation {
  readonly p?: string
  readonly alt?: string
  readonly desc?: string
  readonly altDesc?: string
}

export interface TranslationDatabase {
  readonly majorVersion: number
  readonly minorVersion: number
  readonly categories: { readonly [key: number]: CategoryTranslation }
  readonly topics: { readonly [key: number]: TopicTranslation }
  readonly words: { readonly [key: number]: WordTranslation }
}
