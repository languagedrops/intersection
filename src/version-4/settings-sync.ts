import { Dictionary } from './dictionary'
import { PayloadRequestBaseV4 } from './base'

export interface PropertyWithMetadata<T> {
  readonly value: T
  readonly lastModified: number | null
}

export interface PayloadUserAppDataV4 {
  readonly numberOfTimeouts?: PropertyWithMetadata<number>
  readonly persistedTime?: PropertyWithMetadata<number>
  readonly transientTime?: PropertyWithMetadata<number>
  readonly sessionResetDate?: PropertyWithMetadata<number>
  readonly activeSegment?: PropertyWithMetadata<string>
  readonly screenTutorialCompleted?: PropertyWithMetadata<Dictionary<boolean>>
  readonly promoteScreensViewCounts?: PropertyWithMetadata<Dictionary<number>>
  readonly screenLastShown?: PropertyWithMetadata<Dictionary<number>>
  readonly monetizationSegment?: PropertyWithMetadata<string>
  readonly segmentLongTermRetention?: PropertyWithMetadata<string>
  readonly segmentFeatureUsageSegment?: PropertyWithMetadata<string>
  readonly segmentShare?: PropertyWithMetadata<string>
  readonly segmentGameplay?: PropertyWithMetadata<string>
  readonly segmentUtility?: PropertyWithMetadata<string>
  readonly dojoScreensCompleted?: PropertyWithMetadata<number>
  readonly userMigrations?: PropertyWithMetadata<Dictionary<boolean>>
  readonly wordListSectionsCollapsed?: PropertyWithMetadata<Dictionary<Dictionary<boolean>>>
  readonly screensCompleted?: PropertyWithMetadata<number>
  readonly introStatus?: PropertyWithMetadata<string>
  readonly lastPracticeTopicId?: PropertyWithMetadata<Dictionary<number>>
  readonly lastCelebratedMilestone?: PropertyWithMetadata<Dictionary<Dictionary<string | number>>>
  readonly sessionFinishDates?: PropertyWithMetadata<number[]>
  readonly lastStreakRewardDate?: PropertyWithMetadata<number>
  readonly sessionLength?: PropertyWithMetadata<string | null>
}

export interface PayloadUserLanguageSettingsV4 {
  readonly useAlternativeTranslation?: PropertyWithMetadata<Dictionary<boolean>>
  readonly skillLevel?: PropertyWithMetadata<Dictionary<string>>
  readonly romanicAid?: PropertyWithMetadata<Dictionary<string>>
  readonly characterDrawing?: PropertyWithMetadata<Dictionary<boolean>>
  readonly deviceLanguage?: PropertyWithMetadata<string>
}

export interface PayloadSyncSettingsRequestV4 extends PayloadRequestBaseV4 {
  readonly appData: PayloadUserAppDataV4
  readonly languageSettings: PayloadUserLanguageSettingsV4
}

export interface PayloadSyncSettingsResponseV4 {
  readonly appData: PayloadUserAppDataV4
  readonly languageSettings: PayloadUserLanguageSettingsV4
}
