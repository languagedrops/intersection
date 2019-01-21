export enum PayloadContentReportIssueType {
  Misspelling = 'Misspelling',
  Translation = 'Translation',
  Illustration = 'Illustration',
  Pronunciation = 'Pronunciation',
}

export interface PayloadContentReportRequestV4 {
  readonly nativeLanguage: string
  readonly learningLanguage: string
  readonly appVersion: string
  readonly platform: string
  readonly osVersion: string
  readonly appType: string
  readonly translationVersion: string
  readonly contentVersion: string
  readonly soundVersion: string
  readonly romanization: string
  readonly alternativeWriting: string
  readonly wordId: string
  readonly clientUserId: string
  readonly email: string
  readonly comment: string
  readonly issueTypes: PayloadContentReportIssueType[]
  readonly englishTranslation: string
  readonly nativeLanguageTranslation: string
  readonly learningLanguageTranslation: string
}

export interface PayloadContentReportResponseV4 {
  readonly success: boolean
}
