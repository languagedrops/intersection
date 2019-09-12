import { PayloadRequestBaseV4 } from './base'

export interface PayloadSaveProfileRequestV4 extends PayloadRequestBaseV4 {
  readonly name: string
  readonly profileId?: string // empty value means we need to create profile
}

export interface PayloadProfileData {
  readonly name: string
  readonly profileId: string
}

export interface PayloadGetProfilesResponseV4 {
  readonly profiles: PayloadProfileData[]
}
