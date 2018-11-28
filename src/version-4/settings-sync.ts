export interface PropertyWithMetadata<T> {
  readonly value: T
  readonly lastModified: number | null
}

interface Dictionary<T> { readonly [key: string]: T }

export enum PayloadLoginTypeV4 {
  Google = 'Google',
  Facebook = 'Facebook',
  Email = 'Email',
}

interface PayloadUserDetailsBaseV4<T extends PayloadLoginTypeV4> {
  readonly type: T
}

interface PayloadLoggedInUserDetailsBaseV4<T extends PayloadLoginTypeV4> extends PayloadUserDetailsBaseV4<T> {
  readonly email: string
}

export interface PayloadGoogleUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Google> {
  readonly id: string
  readonly profileUrl: string
  readonly locale: string
  readonly firstName: string
  readonly lastName: string
}

export interface PayloadFacebookUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Facebook> {
  readonly facebookId: string
  readonly locale: string
  readonly profileUrl: string
  readonly gender: string
  readonly firstName: string
  readonly lastName: string
}

export interface PayloadEmailUserDetailsV4 extends PayloadLoggedInUserDetailsBaseV4<PayloadLoginTypeV4.Email> {
  readonly locale: string
  readonly name: string
}

export type PayloadUserDetailsV4 = PayloadEmailUserDetailsV4 | PayloadGoogleUserDetailsV4 | PayloadFacebookUserDetailsV4

export interface PayloadUserSettingsV4 {
  readonly deviceLanguage?: PropertyWithMetadata<string>
  readonly consent?: PropertyWithMetadata<Dictionary<boolean>>
}

export interface PayloadUserAppDataV4 {
  readonly numberOfTimeouts?: PropertyWithMetadata<number>
  readonly persistedTime?: PropertyWithMetadata<number>
  readonly transientTime?: PropertyWithMetadata<number>
  readonly sessionResetDate?: PropertyWithMetadata<number | undefined>
  readonly dailyRewardStreak?: PropertyWithMetadata<number>
  readonly dailyRewardNextCutoff?: PropertyWithMetadata<number | null>
  readonly redeemedDailyRewardLastDate?: PropertyWithMetadata<number>
  readonly activeSegment?: PropertyWithMetadata<string>
  readonly screenTutorialCompleted?: PropertyWithMetadata<Dictionary<boolean>>
  readonly topicCompletedPopupDisplayed?: PropertyWithMetadata<Dictionary<boolean>>
  readonly promoteScreensViewCounts?: PropertyWithMetadata<Dictionary<number>>
  readonly screenLastShown?: PropertyWithMetadata<Dictionary<number>>
  readonly monetizationSegment?: PropertyWithMetadata<string>
  readonly segmentLongTermRetention?: PropertyWithMetadata<string>
  readonly segmentFeatureUsageSegment?: PropertyWithMetadata<string>
  readonly dojoScreensCompleted?: PropertyWithMetadata<number>
  readonly userMigrations?: PropertyWithMetadata<Dictionary<boolean>>
  readonly wordListSectionsCollapsed?: PropertyWithMetadata<Dictionary<Dictionary<boolean>>>
}

export interface PayloadUserLanguageSettingsV4 {
  readonly useAlternativeTranslation?: PropertyWithMetadata<Dictionary<boolean>>
  readonly skillLevel?: PropertyWithMetadata<Dictionary<string>>
  readonly romanicAid?: PropertyWithMetadata<Dictionary<string>>
  readonly characterDrawing?: PropertyWithMetadata<Dictionary<boolean>>
}

export interface PayloadDeviceDetailsRequestV4 {
  readonly deviceId: string
  readonly type?: string
  readonly name?: string
  readonly clientId?: string
  readonly appType?: string
}

export interface PayloadSyncSettingsRequestV4 {
  readonly user: PayloadUserDetailsV4
  readonly userSettings: PayloadUserSettingsV4
  readonly appData: PayloadUserAppDataV4
  readonly languageSettings: PayloadUserLanguageSettingsV4
  readonly device: PayloadDeviceDetailsRequestV4
}

export interface PayloadSyncSettingsResponseV4 {
  readonly user: PayloadUserDetailsV4
  readonly userSettings: PayloadUserSettingsV4
  readonly appData: PayloadUserAppDataV4
  readonly languageSettings: PayloadUserLanguageSettingsV4
}
