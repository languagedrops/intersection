import { AppType } from '../appType';
import { Dictionary, KeyedDictionary } from '../dictionary';
import { LanguageISO } from '../language';
import { PayloadRequestBaseV4 } from './base';
export interface PropertyWithMetadata<T> {
    readonly value: T;
    readonly lastModified: number | null;
}
export interface StreaksPayloadUserAppDataV4 {
    readonly name: string;
    readonly currentStreak: number;
    readonly previousStreakRecord: number;
    readonly lastStreakCompletionDay: number;
}
export interface ChallengesPayloadUserAppDataV4 {
    readonly challengeName: string;
    readonly state: string;
}
export interface AchievementDataPayloadUserAppDatav4 {
    readonly level?: number;
    readonly timeOfCelebration?: number;
    readonly isCompleted?: boolean;
}
export declare type AchievementsPayloadUserAppDatav4 = Dictionary<AchievementDataPayloadUserAppDatav4>;
export interface IllustrationUpdateVersionsPayloadV4 {
    readonly softUpdatedVersion?: number;
    readonly hardUpdatedVersion?: number;
}
export interface PayloadUserAppDataV4 {
    readonly numberOfTimeouts?: PropertyWithMetadata<number>;
    readonly persistedTime?: PropertyWithMetadata<number>;
    readonly transientTime?: PropertyWithMetadata<number>;
    readonly sessionResetDate?: PropertyWithMetadata<number>;
    readonly activeSegment?: PropertyWithMetadata<string>;
    readonly screenTutorialCompleted?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly promoteScreensViewCounts?: PropertyWithMetadata<Dictionary<number>>;
    readonly screenLastShown?: PropertyWithMetadata<Dictionary<number>>;
    readonly screenLastShownTimestamp?: PropertyWithMetadata<Dictionary<number>>;
    readonly monetizationSegment?: PropertyWithMetadata<string>;
    readonly segmentLongTermRetention?: PropertyWithMetadata<string>;
    readonly segmentFeatureUsageSegment?: PropertyWithMetadata<string>;
    readonly segmentShare?: PropertyWithMetadata<string>;
    readonly segmentGameplay?: PropertyWithMetadata<string>;
    readonly segmentUtility?: PropertyWithMetadata<string>;
    readonly dojoScreensCompleted?: PropertyWithMetadata<number>;
    readonly userMigrations?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly wordListSectionsCollapsed?: PropertyWithMetadata<Dictionary<Dictionary<boolean>>>;
    readonly screensCompleted?: PropertyWithMetadata<number>;
    readonly introStatus?: PropertyWithMetadata<string>;
    readonly lastPracticeTopicId?: PropertyWithMetadata<Dictionary<number | string>>;
    readonly lastPracticedCategoryId?: PropertyWithMetadata<Dictionary<number | null>>;
    readonly lastCelebratedMilestone?: PropertyWithMetadata<Dictionary<Dictionary<string | number>>>;
    readonly sessionFinishDates?: PropertyWithMetadata<number[]>;
    readonly lastStreakRewardDate?: PropertyWithMetadata<number>;
    readonly sessionLength?: PropertyWithMetadata<string>;
    readonly revealNativeWord?: PropertyWithMetadata<boolean>;
    readonly currentStreak?: PropertyWithMetadata<number>;
    readonly previousStreakRecord?: PropertyWithMetadata<number>;
    readonly lastStreakCompletionDay?: PropertyWithMetadata<number>;
    readonly dailySecondsSpentInGamePlay?: PropertyWithMetadata<Dictionary<number>>;
    readonly streaks?: PropertyWithMetadata<Dictionary<StreaksPayloadUserAppDataV4>>;
    readonly challenges?: PropertyWithMetadata<Dictionary<ChallengesPayloadUserAppDataV4>>;
    readonly activeDays?: PropertyWithMetadata<number[]>;
    readonly activationDate?: PropertyWithMetadata<number>;
    readonly numberOfReActivations?: PropertyWithMetadata<number>;
    readonly segmentsCommunication?: PropertyWithMetadata<string>;
    readonly userQuestions?: PropertyWithMetadata<Dictionary<string | undefined>>;
    readonly featureIntroductionsShown?: PropertyWithMetadata<Dictionary<number>>;
    readonly sessionEndSurveysAnswered?: PropertyWithMetadata<Dictionary<number>>;
    readonly consent?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly achievements?: PropertyWithMetadata<AchievementsPayloadUserAppDatav4>;
    readonly sessionAccuracies?: PropertyWithMetadata<Dictionary<number>>;
    readonly acknowledgedIllustrationUpdates?: PropertyWithMetadata<Dictionary<IllustrationUpdateVersionsPayloadV4>>;
}
export interface PayloadUserLanguageSettingsV4 {
    readonly useAlternativeTranslation?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly skillLevel?: PropertyWithMetadata<Dictionary<string>>;
    readonly romanicAid?: PropertyWithMetadata<Dictionary<string>>;
    readonly characterDrawing?: PropertyWithMetadata<Dictionary<boolean>>;
    readonly deviceLanguage?: PropertyWithMetadata<string>;
    readonly learningLanguages?: PropertyWithMetadata<KeyedDictionary<AppType, LanguageISO[]>>;
    readonly voiceOver?: PropertyWithMetadata<Dictionary<string>>;
}
export interface PayloadSyncSettingsRequestV4 extends PayloadRequestBaseV4 {
    readonly appData: PayloadUserAppDataV4;
    readonly languageSettings: PayloadUserLanguageSettingsV4;
    readonly profileId?: string;
}
export interface PayloadSyncSettingsResponseV4 {
    readonly appData: PayloadUserAppDataV4;
    readonly languageSettings: PayloadUserLanguageSettingsV4;
}
