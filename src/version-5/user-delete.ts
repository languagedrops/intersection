import { PayloadRequestBaseV5 } from './base'
import { PayloadLoginTypeV5 } from './user-update'

interface PayloadDeleteUserRequestV5Base<T extends PayloadLoginTypeV5> extends PayloadRequestBaseV5 {
  readonly loginType: T
}

interface PayloadDeleteUserRequestV5Facebook extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Facebook> {}
interface PayloadDeleteUserRequestV5Google extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Google> {}

interface PayloadDeleteUserRequestV5AppleMigrated extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Apple> {
  readonly firebaseUid: string
  readonly wasMigrated: true
}
interface PayloadDeleteUserRequestV5AppleNotMigrated extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Apple> {
  readonly wasMigrated: false
}

interface PayloadDeleteUserRequestV5EmailMigrated extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Email> {
  readonly firebaseUid: string
  readonly wasMigrated: true
}
interface PayloadDeleteUserRequestV5EmailNotMigrated extends PayloadDeleteUserRequestV5Base<PayloadLoginTypeV5.Email> {
  readonly wasMigrated: false
}

export type PayloadDeleteUserRequestV5 = PayloadDeleteUserRequestV5Facebook
| PayloadDeleteUserRequestV5Google
| PayloadDeleteUserRequestV5AppleMigrated
| PayloadDeleteUserRequestV5AppleNotMigrated
| PayloadDeleteUserRequestV5EmailMigrated
| PayloadDeleteUserRequestV5EmailNotMigrated

export interface PayloadDeleteUserResponseV5 {
    readonly success: boolean
}
