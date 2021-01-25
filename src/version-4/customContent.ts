import { LanguageISO } from '../language'

export enum CustomContentType {
  Word = 'Word',
  Topic = 'Topic',
  Category = 'Category',
}

export enum PayloadCustomCategoryTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

export enum PayloadCustomTopicTypeV4 {
  Favorite = 'Favorite',
  UserAdded = 'UserAdded',
  TrashBin = 'TrashBin',
}

interface BaseCustomContentPayloadV4<T extends CustomContentType> {
  readonly customContentType: T
}

interface BaseCreateCustomContentRequestV4<T extends CustomContentType> extends BaseCustomContentPayloadV4<T> {
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
  readonly lastModifiedDate: number
}

interface BaseCreateCustomContentResponseV4<T extends CustomContentType> extends BaseCustomContentPayloadV4<T> {
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
  readonly lastModifiedDate: number
}

interface BaseCreateCustomCategoryPayload {
  readonly type: PayloadCustomCategoryTypeV4
  readonly name: string
  readonly topicIds: string[]
}

interface BaseCreateCustomTopicPayload {
  readonly type: PayloadCustomTopicTypeV4
  readonly name: string
  readonly wordIds: string[]
}

interface BaseCreateCustomWordPayload {
  readonly nativeTranslation: string
  readonly foreignTranslation: string
  readonly foreignTranslationRoman?: string
}

export interface CreateCustomCategoryRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Category>, BaseCreateCustomCategoryPayload {}

export interface CreateCustomCategoryResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Category>, BaseCreateCustomCategoryPayload {
  readonly customCategoryId: string
}

export interface CreateCustomTopicRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Topic>, BaseCreateCustomTopicPayload {}

export interface CreateCustomTopicResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Topic>, BaseCreateCustomTopicPayload {
  readonly customTopicId: string
}

export interface CreateCustomWordRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Word>, BaseCreateCustomWordPayload {}

export interface CreateCustomWordResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Word>, BaseCreateCustomWordPayload {
  readonly customWordId: string
}

export interface PayloadCustomContentResponseV4 {
  readonly words: CreateCustomWordResponseV4[]
  readonly topics: CreateCustomTopicResponseV4[]
  readonly categories: CreateCustomCategoryResponseV4[]
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
  readonly lastSyncDate: number
}

export type PayloadCreateCustomContentRequestV4 = CreateCustomWordRequestV4 | CreateCustomTopicRequestV4 | CreateCustomCategoryRequestV4

export interface PayloadCreateCustomContentResponseV4 {
  readonly allContent: PayloadCustomContentResponseV4
  readonly newContent: CreateCustomCategoryResponseV4 | CreateCustomTopicResponseV4 | CreateCustomWordResponseV4
}

export interface PayloadCustomCategorySyncRequestV4 {
  readonly customCategoryId: string
  readonly type: PayloadCustomCategoryTypeV4
  readonly lastModifiedDate: number
  readonly name?: string
  readonly topicIds?: string[]
}

export interface PayloadCustomTopicSyncRequestV4 {
  readonly customTopicId: string
  readonly type: PayloadCustomTopicTypeV4
  readonly lastModifiedDate: number
  readonly name?: string
  readonly wordIds?: string[]
}

export interface PayloadCustomWordSyncRequestV4 {
  readonly customWordId: string
  readonly lastModifiedDate: number
  readonly nativeTranslation?: string
  readonly foreignTranslation?: string
  readonly foreignTranslationRoman?: string
}

export interface PayloadCustomContentSyncRequestV4 {
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
  readonly categories: PayloadCustomCategorySyncRequestV4[]
  readonly topics: PayloadCustomTopicSyncRequestV4[]
  readonly words: PayloadCustomWordSyncRequestV4[]
  readonly lastSyncDate: number
}

export interface PayloadCustomContentSyncResponseV4 {
  readonly allContent: PayloadCustomContentResponseV4
}

interface BaseDeleteCustomContentResponseV4 {
  readonly foreignLanguage: LanguageISO
  readonly nativeLanguage: LanguageISO
}

export interface DeleteCustomTopicContent {
  readonly customContentType: CustomContentType.Topic
  readonly customTopicId: string
}

export interface DeleteCustomWordContent {
  readonly customContentType: CustomContentType.Word
  readonly customWordId: string
}

export interface DeleteCustomCategoryContent {
  readonly customContentType: CustomContentType.Category
  readonly customCategoryId: string
}

export type PayloadDeleteCustomContentRequestV4 = BaseDeleteCustomContentResponseV4 & (DeleteCustomCategoryContent | DeleteCustomTopicContent | DeleteCustomWordContent)

export interface PayloadDeleteCustomContentResponseV4 {
  readonly allContent: PayloadCustomContentResponseV4
}
