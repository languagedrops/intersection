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
    readonly lastModified: number;
    readonly customContentType: T;
}
interface CreateCustomWordRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Word> {
    readonly customWordId: string;
    readonly nativeTranslation: string;
    readonly foreignTranslation: string;
    readonly foreignTranslationRoman?: string;
}
interface CreateCustomTopicRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Topic> {
    readonly customTopicId: string;
    readonly type: PayloadCustomTopicTypeV4;
    readonly name: string;
    readonly wordIds: string[];
}
interface CreateCustomPlaylistRequestV4 extends BaseCreateCustomContentRequestV4<CustomContentType.Playlist> {
    readonly customPlaylistId: string;
    readonly type: PayloadCustomPlaylistTypeV4;
    readonly name: string;
    readonly topicIds: string[];
}
export declare type PayloadCreateCustomContentRequestV4 = CreateCustomWordRequestV4 | CreateCustomTopicRequestV4 | CreateCustomPlaylistRequestV4;
interface BaseCreateCustomContentResponseV4<T extends CustomContentType> {
    readonly allContent: PayloadCustomContentResponseV4;
    readonly customContentType: T;
}
interface CustomTopicResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Topic> {
    readonly topics: CreateCustomTopicRequestV4[];
}
interface CustomWordResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Word> {
    readonly words: CreateCustomWordRequestV4[];
}
interface CustomPlaylistResponseV4 extends BaseCreateCustomContentResponseV4<CustomContentType.Playlist> {
    readonly playlists: CreateCustomPlaylistRequestV4[];
}
export declare type PayloadCreateCustomContentResponseV4 = CustomWordResponseV4 | CustomTopicResponseV4 | CustomPlaylistResponseV4;
export interface PayloadCustomContentResponseV4 {
    readonly words: CustomWordResponseV4[];
    readonly topics: CustomTopicResponseV4[];
    readonly playlists: CustomPlaylistResponseV4[];
    readonly foreignLanguage: LanguageISO;
    readonly nativeLanguage: LanguageISO;
    readonly lastSyncDate: number;
}
export declare namespace PayloadCustomContentSyncV4 {
    interface PlaylistRequest {
        readonly customPlaylistId: string;
        readonly name?: string;
        readonly topicIds?: string[];
        readonly lastModifiedDate: number;
        readonly type: PayloadCustomPlaylistTypeV4;
    }
    interface TopicRequest {
        readonly customTopicId: string;
        readonly name?: string;
        readonly wordIds?: string[];
        readonly lastModifiedDate: number;
        readonly type: PayloadCustomTopicTypeV4;
    }
    interface WordRequest {
        readonly customWordId: string;
        readonly nativeTranslation?: string;
        readonly foreignTranslation?: string;
        readonly foreignTranslationRoman?: string;
        readonly lastModifiedDate: number;
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
export {};
