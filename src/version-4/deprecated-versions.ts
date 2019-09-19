export interface PayloadGetDeprecatedStatusRequestV4 {
  readonly version: string
  readonly appType: string
  readonly platform: string
  readonly osVersion: string
  readonly manufacturer: string
}

export enum DeprecatedMessage {
  WaitForNextVersion = 'WaitForNextVersion',
  UpdateVersion = 'UpdateVersion',
}

export interface PayloadGetDeprecatedAppVersionsResponseV4 {
  readonly isDeprecated: boolean
  readonly message: DeprecatedMessage
  readonly explanation?: string
  readonly link?: string
}
