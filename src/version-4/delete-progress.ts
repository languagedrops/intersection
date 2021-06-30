import { PayloadRequestBaseV4 } from './base'

export interface PayloadDeleteProgressRequestV4 extends PayloadRequestBaseV4 {
    readonly languages: string[]
    // tslint:disable-next-line
    readonly wordIds: Array<string | number>
    // tslint:disable-next-line
    readonly topicIds: Array<string | number>
}
