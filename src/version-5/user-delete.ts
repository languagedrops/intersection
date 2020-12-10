import { PayloadRequestBaseV5 } from './base'

export interface PayloadDeleteUserRequestV5 extends PayloadRequestBaseV5 {
    readonly userId: string
}

export interface PayloadDeleteUserResponseV5 {
    readonly success: boolean
}
