import { PayloadRequestBaseV4 } from './base'

export interface PayloadProfileData {
  readonly name: string
  readonly profileId: string
}

export interface PayloadSaveProfileRequestV4 extends PayloadRequestBaseV4 {
  readonly name: string
  readonly profileId: string
}

export type PayloadSaveProfileResponseV4 = PayloadProfileData

export interface PayloadCreateProfileRequestV4 extends PayloadRequestBaseV4 {
  readonly name: string
}

export type PayloadCreateProfileResponseV4 = PayloadProfileData

export interface PayloadGetProfilesResponseV4 {
  readonly profiles: PayloadProfileData[]
}
