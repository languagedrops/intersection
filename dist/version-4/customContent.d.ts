import { LanguageISO } from './language';
export interface PayloadCustomWordResponseV4 {
    readonly customWordId: string;
    readonly nativeTranslation: string;
    readonly foreignTranslation: string;
    readonly foreignTranslationRoman?: string;
    readonly lastModifiedDate: number;
}
export declare enum PayloadCustomTopicTypeV4 {
    Favorite = "Favorite",
    UserAdded = "UserAdded",
    TrashBin = "TrashBin"
}
export interface PayloadCustomTopicRequestV4 {
    readonly customTopicId: string;
    readonly type: PayloadCustomTopicTypeV4;
    readonly name: string;
    readonly wordIds: string[];
    readonly lastModifiedDate: number;
}
export declare type PayloadCustomTopicResponseV4 = PayloadCustomTopicRequestV4;
export declare enum PayloadCustomPlaylistTypeV4 {
    Favorite = "Favorite",
    UserAdded = "UserAdded",
    TrashBin = "TrashBin"
}
export interface PayloadCustomPlaylistResponseV4 {
    readonly customPlaylistId: string;
    readonly type: PayloadCustomPlaylistTypeV4;
    readonly name: string;
    readonly topicIds: string[];
    readonly lastModifiedDate: number;
}
export interface PayloadCustomContentResponseV4 {
    readonly words: PayloadCustomWordResponseV4[];
    readonly topics: PayloadCustomTopicResponseV4[];
    readonly playlists: PayloadCustomPlaylistResponseV4[];
    readonly foreignLanguage: LanguageISO;
    readonly nativeLanguage: LanguageISO;
    readonly lastSyncDate: number;
}
export declare namespace PayloadCustomPlaylistV4 {
    namespace Create {
        interface Request {
            readonly name: string;
            readonly type: PayloadCustomPlaylistTypeV4.UserAdded;
            readonly foreignLanguage: LanguageISO;
            readonly nativeLanguage: LanguageISO;
        }
        interface Response {
            readonly playlist: PayloadCustomPlaylistResponseV4;
            readonly allContent: PayloadCustomContentResponseV4;
        }
    }
    namespace BatchCreate {
        type Request = Create.Request[];
        interface Response {
            readonly playlists: PayloadCustomPlaylistResponseV4[];
            readonly allContent: PayloadCustomContentResponseV4;
        }
    }
}
export declare namespace PayloadCustomTopicV4 {
    namespace Create {
        interface Request {
            readonly name: string;
            readonly type: PayloadCustomTopicTypeV4.UserAdded;
            readonly foreignLanguage: LanguageISO;
            readonly nativeLanguage: LanguageISO;
        }
        interface Response {
            readonly topic: PayloadCustomTopicResponseV4;
            readonly allContent: PayloadCustomContentResponseV4;
        }
    }
    namespace BatchCreate {
        type Request = Create.Request[];
        interface Response {
            readonly topics: PayloadCustomTopicResponseV4[];
            readonly allContent: PayloadCustomContentResponseV4;
        }
    }
}
export declare namespace PayloadCustomWordV4 {
    namespace Create {
        interface Request {
            readonly foreignLanguage: LanguageISO;
            readonly nativeLanguage: LanguageISO;
            readonly nativeTranslation: string;
            readonly foreignTranslation: string;
            readonly foreignTranslationRoman?: string;
        }
        interface Response {
            readonly word: PayloadCustomWordResponseV4;
            readonly allContent: PayloadCustomContentResponseV4;
        }
    }
    namespace BatchCreate {
        type Request = Create.Request[];
        interface Response {
            readonly words: PayloadCustomWordResponseV4[];
            readonly allContent: PayloadCustomContentResponseV4;
        }
    }
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
