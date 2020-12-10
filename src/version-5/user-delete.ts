import { PayloadRequestBaseV5 } from './base'

export interface PayloadDeleteUserRequestV4 extends PayloadRequestBaseV5 {
    readonly userId: string
}

export interface PayloadDeleteUserResponseV4 {
    readonly success: boolean
}
