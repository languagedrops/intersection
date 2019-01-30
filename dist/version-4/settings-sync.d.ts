import { Dictionary } from './dictionary';
export interface PropertyWithMetadata<T> {
    readonly value: T;
    readonly lastModified: number | null;
}
export interface PayloadUserAppDataV4 {
    readonly numberOfTimeouts?: PropertyWithMetadata<number>;
    readonly persistedTime?: PropertyWithMetadata<number>;
    readonly transientTime?: PropertyWithMetadata<number>;
    readonly sessionResetDate?: PropertyWithMetadata<number | undefined>;
    readonly dailyRewardStreak?: PropertyWithMetadata<number>;
    readonly dailyRewardNextCutoff?: PropertyWithMetadata<number | null>;
    readonly redeemedDailyRewardLastDate?: PropertyWithMetadata<number>;
    readonly activeSegment?: PropertyWithMetadata<string>;
    readonly screenTutorialCompleted?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly promoteScreensViewCounts?: PropertyWithMetadata<Dictionary<number>>;
    readonly screenLastShown?: PropertyWithMetadata<Dictionary<number>>;
    readonly monetizationSegment?: PropertyWithMetadata<string>;
    readonly segmentLongTermRetention?: PropertyWithMetadata<string>;
    readonly segmentFeatureUsageSegment?: PropertyWithMetadata<string>;
    readonly dojoScreensCompleted?: PropertyWithMetadata<number>;
    readonly userMigrations?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly wordListSectionsCollapsed?: PropertyWithMetadata<Dictionary<Dictionary<boolean>>>;
}
export interface PayloadUserLanguageSettingsV4 {
    readonly useAlternativeTranslation?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly skillLevel?: PropertyWithMetadata<Dictionary<string>>;
    readonly romanicAid?: PropertyWithMetadata<Dictionary<string>>;
    readonly characterDrawing?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly deviceLanguage?: PropertyWithMetadata<string>;
}
export interface PayloadSyncSettingsRequestV4 {
    readonly appData: PayloadUserAppDataV4;
    readonly languageSettings: PayloadUserLanguageSettingsV4;
}
export interface PayloadSyncSettingsResponseV4 {
    readonly appData: PayloadUserAppDataV4;
    readonly languageSettings: PayloadUserLanguageSettingsV4;
}
