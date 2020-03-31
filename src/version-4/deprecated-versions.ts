import { AppPlatform } from '../appPlatform'
import { AppType } from '../appType'

export interface PayloadGetDeprecatedStatusRequestV4 {
  readonly version: string
  readonly appType: AppType
  readonly platform: AppPlatform
  readonly osVersion: string
  readonly manufacturer: string
}

export enum DeprecatedMessage {
  WaitForNextVersion = 'WaitForNextVersion',
  UpdateVersion = 'UpdateVersion',
}

interface DeprecatedPayloadGetDeprecatedAppVersionsResponseV4 {
  readonly isDeprecated: true
  readonly message: DeprecatedMessage
  readonly explanation?: string
  readonly link?: string
}

interface NotDeprecatedPayloadGetDeprecatedAppVersionsResponseV4 {
  readonly isDeprecated: false
}

export type PayloadGetDeprecatedAppVersionsResponseV4 = DeprecatedPayloadGetDeprecatedAppVersionsResponseV4 | NotDeprecatedPayloadGetDeprecatedAppVersionsResponseV4
