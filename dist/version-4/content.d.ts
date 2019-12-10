import { LanguageISO } from './language';
export interface PayloadWordResponseV4 {
    readonly id: string;
    readonly nativeTranslation: string;
    readonly foreignTranslation: string;
    readonly foreignTranslationRoman?: string;
    readonly lastModifiedDate: number;
}
export declare enum PayloadTopicTypeV4 {
    Favorite = "Favorite",
    UserAdded = "UserAdded",
    TrashBin = "TrashBin"
}
export interface PayloadTopicResponseV4 {
    readonly id: string;
    readonly type: PayloadTopicTypeV4;
    readonly name: string;
    readonly wordIds: string[];
    readonly lastModifiedDate: number;
}
export declare enum PayloadPlaylistTypeV4 {
    Favorite = "Favorite",
    UserAdded = "UserAdded",
    TrashBin = "TrashBin"
}
export interface PayloadPlaylistResponseV4 {
    readonly id: number;
    readonly type: PayloadPlaylistTypeV4;
    readonly name: string;
    readonly topicIds: number[];
    readonly lastModifiedDate: number;
}
export interface PayloadContentResponseV4 {
    readonly words: PayloadWordResponseV4[];
    readonly topic: PayloadTopicResponseV4[];
    readonly playlist: PayloadPlaylistResponseV4[];
    readonly foreignLanguage: LanguageISO;
    readonly nativeLanguage: LanguageISO;
    readonly lastSyncDate: number;
}
export declare namespace PayloadContentPlaylistV4 {
    namespace Create {
        interface Request {
            readonly name: string;
            readonly type: PayloadPlaylistTypeV4.UserAdded;
            readonly foreignLanguage: LanguageISO;
            readonly nativeLanguage: LanguageISO;
        }
        interface Response {
            readonly playlist: PayloadPlaylistResponseV4;
            readonly allContent: PayloadContentResponseV4;
        }
    }
    namespace BatchCreate {
        type Request = Create.Request[];
        interface Response {
            readonly playlists: PayloadPlaylistResponseV4[];
            readonly allContent: PayloadContentResponseV4;
        }
    }
}
export declare namespace PayloadContentTopicV4 {
    namespace Create {
        interface Request {
            readonly name: string;
            readonly type: PayloadTopicTypeV4.UserAdded;
            readonly foreignLanguage: LanguageISO;
            readonly nativeLanguage: LanguageISO;
        }
        interface Response {
            readonly topic: PayloadTopicResponseV4;
            readonly allContent: PayloadContentResponseV4;
        }
    }
    namespace BatchCreate {
        type Request = Create.Request[];
        interface Response {
            readonly topics: PayloadTopicResponseV4[];
            readonly allContent: PayloadContentResponseV4;
        }
    }
}
export declare namespace PayloadContentWordV4 {
    namespace Create {
        interface Request {
            readonly foreignLanguage: LanguageISO;
            readonly nativeLanguage: LanguageISO;
            readonly nativeTranslation: string;
            readonly foreignTranslation: string;
            readonly foreignTranslationRoman?: string;
        }
        interface Response {
            readonly word: PayloadWordResponseV4;
            readonly allContent: PayloadContentResponseV4;
        }
    }
    namespace BatchCreate {
        type Request = Create.Request[];
        interface Response {
            readonly words: PayloadWordResponseV4[];
            readonly allContent: PayloadContentResponseV4;
        }
    }
}
export declare namespace PayloadContentSyncV4 {
    interface PlaylistRequest {
        readonly id: string;
        readonly name?: string;
        readonly topicIds?: number[];
        readonly lastModifiedDate: number;
    }
    interface TopicRequest {
        readonly id: string;
        readonly name?: string;
        readonly wordIds?: string[];
        readonly lastModifiedDate: number;
    }
    interface WordRequest {
        readonly id: string;
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
        readonly lastSyncDate?: number;
    }
    interface Response {
        readonly allContent: PayloadContentResponseV4;
    }
}
