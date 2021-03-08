import { LanguageISO } from './language'

export enum BiteTheme {
  Purple = 'Purple',
  Orange = 'Orange',
  Green = 'Green',
  Blue = 'Blue',
  Mint = 'Mint',
  Red = 'Red',
}

export enum BiteReferrer {
  Instagram = 'Instagram',
  YouTube = 'YouTube',
  Facebook = 'Facebook',
  PaidAd = 'PaidAd',
  UserCreated = 'UserCreated',
  DropsHomepage = 'DropsHomepage',
}

export interface BiteProps {
  readonly id: string
  readonly words: number[]
  readonly suggestedLanguage: LanguageISO
  readonly onlyOfferSuggestedLanguage: boolean
  readonly available: boolean
  readonly theme: BiteTheme,
  readonly reward?: string
  readonly referrer?: BiteReferrer
  readonly timeLimit?: number
}
