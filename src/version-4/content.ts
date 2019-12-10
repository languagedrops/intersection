import { LanguageISO } from './language'

export interface PayloadWordResponseV4 {
  readonly id: string
  readonly nativeTranslation: string
  readonly foreignTranslation: string
  readonly foreignTranslationRoman?: string
  readonly lastModifiedDate: number
}

export enum PayloadTopicTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

export interface PayloadTopicResponseV4 {
  readonly id: string
  readonly type: PayloadTopicTypeV4
  readonly name: string
  readonly wordIds: string[]
  readonly lastModifiedDate: number
}

export enum PayloadPlaylistTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

export interface PayloadPlaylistResponseV4 {
  readonly id: number
  readonly type: PayloadPlaylistTypeV4
  readonly name: string
  readonly topicIds: number[]
  readonly lastModifiedDate: number
}

export interface PayloadContentResponseV4 {
  readonly words: PayloadWordResponseV4[]
  readonly topic: PayloadTopicResponseV4[]
  readonly playlist: PayloadPlaylistResponseV4[]
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
  readonly lastSyncDate: number
}

export namespace PayloadContentPlaylistV4 {
  export namespace Create {
    export interface Request {
      readonly name: string
      readonly type: PayloadPlaylistTypeV4.UserAdded
      readonly foreignLanguage: LanguageISO
      readonly nativeLanguage: LanguageISO
    }
    export interface Response {
      readonly playlist: PayloadPlaylistResponseV4
      readonly allContent: PayloadContentResponseV4
    }
  }

  export namespace BatchCreate {
    export type Request = Create.Request[]
    export interface Response {
      readonly playlists: PayloadPlaylistResponseV4[]
      readonly allContent: PayloadContentResponseV4
    }
  }

}

export namespace PayloadContentTopicV4 {
  export namespace Create {
    export interface Request {
      readonly name: string
      readonly type: PayloadTopicTypeV4.UserAdded
      readonly foreignLanguage: LanguageISO
      readonly nativeLanguage: LanguageISO
    }
    export interface Response {
      readonly topic: PayloadTopicResponseV4
      readonly allContent: PayloadContentResponseV4
    }
  }

  export namespace BatchCreate {
    export type Request = Create.Request[]

    export interface Response {
      readonly topics: PayloadTopicResponseV4[]
      readonly allContent: PayloadContentResponseV4
    }
  }
}

export namespace PayloadContentWordV4 {
  export namespace Create {
    export interface Request {
      readonly foreignLanguage: LanguageISO
      readonly nativeLanguage: LanguageISO
      readonly nativeTranslation: string
      readonly foreignTranslation: string
      readonly foreignTranslationRoman?: string
    }
    export interface Response {
      readonly word: PayloadWordResponseV4
      readonly allContent: PayloadContentResponseV4
    }
  }

  export namespace BatchCreate {
    export type Request = Create.Request[]

    export interface Response {
      readonly words: PayloadWordResponseV4[]
      readonly allContent: PayloadContentResponseV4
    }
  }
}

export namespace PayloadContentSyncV4 {
  interface PlaylistRequest {
    readonly id: string
    readonly name?: string
    readonly topicIds?: number[]
    readonly lastModifiedDate: number
  }
  interface TopicRequest {
    readonly id: string
    readonly name?: string
    readonly wordIds?: string[]
    readonly lastModifiedDate: number
  }
  interface WordRequest {
    readonly id: string
    readonly nativeTranslation?: string
    readonly foreignTranslation?: string
    readonly foreignTranslationRoman?: string
    readonly lastModifiedDate: number
  }

  export interface Request {
    readonly foreignLanguage: LanguageISO
    readonly nativeLanguage: LanguageISO
    readonly playlists: PlaylistRequest[]
    readonly topics: TopicRequest[]
    readonly words: WordRequest[]
    readonly lastSyncDate?: number
  }
  export interface Response {
    readonly allContent: PayloadContentResponseV4
  }
}
