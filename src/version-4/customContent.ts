import { LanguageISO } from './language'

export interface PayloadCustomWordResponseV4 {
  readonly customWordId: string
  readonly nativeTranslation: string
  readonly foreignTranslation: string
  readonly foreignTranslationRoman?: string
  readonly lastModifiedDate: number
}

export enum PayloadCustomTopicTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

export interface PayloadCustomTopicResponseV4 {
  readonly customTopicId: string
  readonly type: PayloadCustomTopicTypeV4
  readonly name: string
  readonly wordIds: string[]
  readonly lastModifiedDate: number
}

export enum PayloadCustomPlaylistTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

export interface PayloadCustomPlaylistResponseV4 {
  readonly customPlaylistId: string
  readonly type: PayloadCustomPlaylistTypeV4
  readonly name: string
  readonly topicIds: string[]
  readonly lastModifiedDate: number
}

export interface PayloadCustomContentResponseV4 {
  readonly words: PayloadCustomWordResponseV4[]
  readonly topics: PayloadCustomTopicResponseV4[]
  readonly playlists: PayloadCustomPlaylistResponseV4[]
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
  readonly lastSyncDate: number
}

export namespace PayloadCustomPlaylistV4 {
  export namespace Create {
    export interface Request {
      readonly name: string
      readonly type: PayloadCustomPlaylistTypeV4.UserAdded
      readonly foreignLanguage: LanguageISO
      readonly nativeLanguage: LanguageISO
    }
    export interface Response {
      readonly playlist: PayloadCustomPlaylistResponseV4
      readonly allContent: PayloadCustomContentResponseV4
    }
  }

  export namespace BatchCreate {
    export type Request = Create.Request[]
    export interface Response {
      readonly playlists: PayloadCustomPlaylistResponseV4[]
      readonly allContent: PayloadCustomContentResponseV4
    }
  }

}

export namespace PayloadCustomTopicV4 {
  export namespace Create {
    export interface Request {
      readonly name: string
      readonly type: PayloadCustomTopicTypeV4.UserAdded
      readonly foreignLanguage: LanguageISO
      readonly nativeLanguage: LanguageISO
    }
    export interface Response {
      readonly topic: PayloadCustomTopicResponseV4
      readonly allContent: PayloadCustomContentResponseV4
    }
  }

  export namespace BatchCreate {
    export type Request = Create.Request[]

    export interface Response {
      readonly topics: PayloadCustomTopicResponseV4[]
      readonly allContent: PayloadCustomContentResponseV4
    }
  }
}

export namespace PayloadCustomWordV4 {
  export namespace Create {
    export interface Request {
      readonly foreignLanguage: LanguageISO
      readonly nativeLanguage: LanguageISO
      readonly nativeTranslation: string
      readonly foreignTranslation: string
      readonly foreignTranslationRoman?: string
    }
    export interface Response {
      readonly word: PayloadCustomWordResponseV4
      readonly allContent: PayloadCustomContentResponseV4
    }
  }

  export namespace BatchCreate {
    export type Request = Create.Request[]

    export interface Response {
      readonly words: PayloadCustomWordResponseV4[]
      readonly allContent: PayloadCustomContentResponseV4
    }
  }
}

export namespace PayloadCustomContentSyncV4 {
  interface PlaylistRequest {
    readonly customPlaylistId: string
    readonly name?: string
    readonly topicIds?: string[]
    readonly lastModifiedDate: number
    readonly type: PayloadCustomPlaylistTypeV4
  }
  interface TopicRequest {
    readonly customTopicId: string
    readonly name?: string
    readonly wordIds?: string[]
    readonly lastModifiedDate: number
    readonly type: PayloadCustomTopicTypeV4
  }
  interface WordRequest {
    readonly customWordId: string
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
    readonly lastSyncDate: number
  }
  export interface Response {
    readonly allContent: PayloadCustomContentResponseV4
  }
}
