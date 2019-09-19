import { Dictionary } from '../version-4/dictionary'

export interface SettingsAPIMigration<T, U, K> {
  readonly version: number
  readonly transformToDataBasePayload: (input: T) => K
  readonly transformFromDataBasePayload: (input: K) => U
}

export interface PropertyWithMetadata<T> {
  readonly value: T
  readonly lastModified: number | null
}

export interface UserAppDataSettings {
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
  readonly lastCelebratedMilestone?: PropertyWithMetadata<Dictionary<string>>
  readonly sessionFinishDates?: PropertyWithMetadata<number[]>
  readonly lastStreakRewardDate?: PropertyWithMetadata<number>
  readonly sessionLength?: PropertyWithMetadata<string>
  readonly revealNativeWord?: PropertyWithMetadata<boolean>
  readonly currentStreak?: PropertyWithMetadata<number>
  readonly previousStreakRecord?: PropertyWithMetadata<number>
  readonly lastStreakCompletionDay?: PropertyWithMetadata<number>
}

export interface UserLanguageSettings {
  readonly useAlternativeTranslation?: PropertyWithMetadata<Dictionary<boolean>>
  readonly skillLevel?: PropertyWithMetadata<Dictionary<string>>
  readonly romanicAid?: PropertyWithMetadata<Dictionary<string>>
  readonly characterDrawing?: PropertyWithMetadata<Dictionary<boolean>>
  readonly deviceLanguage?: PropertyWithMetadata<string>
}

export interface SyncSettingsPayload {
  readonly appData: UserAppDataSettings
  readonly languageSettings: UserLanguageSettings
  readonly clientUserId?: string
}
