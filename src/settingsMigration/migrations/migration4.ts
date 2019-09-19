import { PayloadSyncSettingsRequestV4, PayloadSyncSettingsResponseV4, Dictionary } from '../../version-4'
import { SettingsAPIMigration, SyncSettingsPayload } from '../types'
import { mapValues } from 'majime'

export const Migration4: SettingsAPIMigration<PayloadSyncSettingsRequestV4, PayloadSyncSettingsResponseV4, SyncSettingsPayload> = {
  version: 4,
  transformToDataBasePayload: (inputPayload: PayloadSyncSettingsRequestV4): SyncSettingsPayload => {
    return {
      ...inputPayload,
      appData: {
        ...inputPayload.appData,
        lastCelebratedMilestone: inputPayload.appData.lastCelebratedMilestone != null
          ? {
            ...inputPayload.appData.lastCelebratedMilestone,
            value: mapValues(inputPayload.appData.lastCelebratedMilestone.value, (milestoneData: Dictionary<string | number>) => `${milestoneData.milestone}_${milestoneData.milestoneProgress || 0}`),
          }
          : undefined,
      },
    }
  },
  transformFromDataBasePayload: (inputPayload: SyncSettingsPayload): PayloadSyncSettingsResponseV4 => {
    return {
      languageSettings: inputPayload.languageSettings,
      appData: {
        ...inputPayload.appData,
        lastCelebratedMilestone: inputPayload.appData.lastCelebratedMilestone != null
          ? {
            ...inputPayload.appData.lastCelebratedMilestone,
            value: mapValues(inputPayload.appData.lastCelebratedMilestone.value, (milestoneData: string) => {
              const milestoneProps = milestoneData.split('_')
              return {
                milestone: milestoneProps[0],
                milestoneProgress: milestoneProps[1] || 0,
              }
            }),
          }
          : undefined,
      },
    }
  },
}
