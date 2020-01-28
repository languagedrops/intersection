import { LanguageISO } from './language';
export declare enum CustomContentType {
    Word = "Word",
    Topic = "Topic",
    Playlist = "Playlist"
}
export declare enum PayloadCustomPlaylistTypeV4 {
    Favorite = "Favorite",
    UserAdded = "UserAdded",
    TrashBin = "TrashBin"
}
export declare enum PayloadCustomTopicTypeV4 {
    Favorite = "Favorite",
    UserAdded = "UserAdded",
    TrashBin = "TrashBin"
}
interface BaseCreateCustomContentRequestV4<T extends CustomContentType> {
    readonly customContentType: T;
    readonly foreignLanguage: LanguageISO;
    readonly nativeLanguage: LanguageISO;
    readonly lastModified: number;
}
interface BaseCreateCustomContentResponseV4<T extends CustomContentType> {
    readonly customContentType: T;
    readonly foreignLanguage: LanguageISO;
    readonly nativeLanguage: LanguageISO;
    readonly lastModified: number;
}
interface BaseCreateCustomPlaylistPayload {
    readonly type: PayloadCustomPlaylistTypeV4;
    readonly name: string;
    readonly topicIds: string[];
}
interface BaseCreateCustomTopicPayload {
    readonly type: PayloadCustomTopicTypeV4;
    readonly name: string;
    readonly wordIds: string[];
}
interface BaseCreateCustomWordPayload {
    readonly nativeTranslation: string;
    readonly foreignTranslation: string;
    readonly foreignTranslationRoman?: string;
}
interface CreateCustomPlaylistRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Playlist>, BaseCreateCustomPlaylistPayload {
}
interface CreateCustomPlaylistResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Playlist>, BaseCreateCustomPlaylistPayload {
    readonly customPlaylistId: string;
}
interface CreateCustomTopicRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Topic>, BaseCreateCustomTopicPayload {
}
interface CreateCustomTopicResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Topic>, BaseCreateCustomTopicPayload {
    readonly customTopicId: string;
}
interface CreateCustomWordRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Word>, BaseCreateCustomWordPayload {
}
interface CreateCustomWordResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Word>, BaseCreateCustomWordPayload {
    readonly customWordId: string;
}
interface CustomTopicResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Topic> {
    readonly topics: CreateCustomTopicResponseV4[];
}
interface CustomWordResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Word> {
    readonly words: CreateCustomWordResponseV4[];
}
interface CustomPlaylistResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Playlist> {
    readonly playlists: CreateCustomPlaylistResponseV4[];
}
export interface PayloadCustomContentResponseV4 {
    readonly words: CustomWordResponseV4[];
    readonly topics: CustomTopicResponseV4[];
    readonly playlists: CustomPlaylistResponseV4[];
    readonly foreignLanguage: LanguageISO;
    readonly nativeLanguage: LanguageISO;
    readonly lastSyncDate: number;
}
export declare type PayloadCreateCustomContentRequestV4 = CreateCustomWordRequestV4 | CreateCustomTopicRequestV4 | CreateCustomPlaylistRequestV4;
export interface PayloadCreateCustomContentResponseV4 {
    readonly allContent: PayloadCustomContentResponseV4;
    readonly newContent: CustomPlaylistResponseV4 | CustomTopicResponseV4 | CustomWordResponseV4;
}
export declare namespace PayloadCustomContentSyncV4 {
    interface PlaylistRequest {
        readonly customPlaylistId: string;
        readonly type: PayloadCustomPlaylistTypeV4;
        readonly lastModifiedDate: number;
        readonly name?: string;
        readonly topicIds?: string[];
    }
    interface TopicRequest {
        readonly customTopicId: string;
        readonly type: PayloadCustomTopicTypeV4;
        readonly lastModifiedDate: number;
        readonly name?: string;
        readonly wordIds?: string[];
    }
    interface WordRequest {
        readonly customWordId: string;
        readonly lastModifiedDate: number;
        readonly nativeTranslation?: string;
        readonly foreignTranslation?: string;
        readonly foreignTranslationRoman?: string;
    }
    interface Request {
        readonly foreignLanguage: LanguageISO;
        readonly nativeLanguage: LanguageISO;
        readonly playlists: PlaylistRequest[];
        readonly topics: TopicRequest[];
        readonly words: WordRequest[];
        readonly lastSyncDate: number;
    }
    interface Response {
        readonly allContent: PayloadCustomContentResponseV4;
    }
}
export interface DeleteCustomTopicContent {
    readonly customContentType: CustomContentType.Topic;
    readonly customTopicId: string;
}
export interface DeleteCustomWordContent {
    readonly customContentType: CustomContentType.Word;
    readonly customWordId: string;
}
export interface DeleteCustomPlaylistContent {
    readonly customContentType: CustomContentType.Playlist;
    readonly customPlaylistId: string;
}
export declare type PayloadDeleteCustomContentRequestV4 = DeleteCustomPlaylistContent | DeleteCustomTopicContent | DeleteCustomWordContent;
export {};
