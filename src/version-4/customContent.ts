import { LanguageISO } from './language'

export enum CustomContentType {
  Word = 'Word',
  Topic = 'Topic',
  Playlist = 'Playlist',
}

export enum PayloadCustomPlaylistTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

export enum PayloadCustomTopicTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

interface BaseCreateContentRequestV4<T extends CustomContentType> {
  readonly lastModified: number
  readonly customContentType: T
}

interface CreateCustomWordRequestV4 extends BaseCreateContentRequestV4<CustomContentType.Word> {
  readonly customWordId: string
  readonly nativeTranslation: string
  readonly foreignTranslation: string
  readonly foreignTranslationRoman?: string
}

interface CreateCustomTopicRequestV4 extends BaseCreateContentRequestV4<CustomContentType.Topic> {
  readonly customTopicId: string
  readonly type: PayloadCustomTopicTypeV4
  readonly name: string
  readonly wordIds: string[]
}

interface CreateCustomPlaylistRequestV4 extends BaseCreateContentRequestV4<CustomContentType.Playlist> {
  readonly customPlaylistId: string
  readonly type: PayloadCustomPlaylistTypeV4
  readonly name: string
  readonly topicIds: string[]
}

export type PayloadCreateCustomContentRequestV4 = CreateCustomWordRequestV4 | CreateCustomTopicRequestV4 | CreateCustomPlaylistRequestV4

interface BaseCreateContentResponseV4<T extends CustomContentType> {
  readonly allContent: PayloadCustomContentResponseV4
  readonly customContentType: T
}

interface CustomTopicResponseV4 extends BaseCreateContentResponseV4<CustomContentType.Topic> {
  readonly topics: CreateCustomTopicRequestV4[]
}

interface CustomWordResponseV4 extends BaseCreateContentResponseV4<CustomContentType.Word> {
  readonly words: CreateCustomWordRequestV4[]
}

interface CustomPlaylistResponseV4 extends BaseCreateContentResponseV4<CustomContentType.Playlist> {
  readonly playlists: CreateCustomPlaylistRequestV4[]
}

export type PayloadCreateCustomContentResponseV4 = CustomWordResponseV4 | CustomTopicResponseV4 | CustomPlaylistResponseV4

export interface PayloadCustomContentResponseV4 {
  readonly words: CustomWordResponseV4[]
  readonly topics: CustomTopicResponseV4[]
  readonly playlists: CustomPlaylistResponseV4[]
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
  readonly lastSyncDate: number
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
