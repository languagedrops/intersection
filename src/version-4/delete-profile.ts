import { PayloadRequestBaseV4 } from './base'

export interface PayloadDeleteProfileRequestV4 extends PayloadRequestBaseV4 {
    readonly profileId: string
}

export interface PayloadDeleteProfileResponseV4 {
    readonly success: boolean
}
