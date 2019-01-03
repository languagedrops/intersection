import { PayloadAndroidReceiptV2 } from './purchase'

export interface PayloadVerifyIAPRequestV2 {
    readonly productId: string,
    readonly receipt: string | PayloadAndroidReceiptV2
}

interface PayloadVerifyIAPValidResponseV2 {
    readonly isValid: true,
    readonly productId: string
}

interface PayloadVerifyIAPInvalidResponseV2 {
    readonly isValid: false,
    readonly status?: string,
    readonly productId: string
}

export type PayloadVerifyIAPResponseV2 = PayloadVerifyIAPValidResponseV2 | PayloadVerifyIAPInvalidResponseV2
