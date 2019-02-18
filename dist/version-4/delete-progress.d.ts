import { PayloadRequestBaseV4 } from './base';
export interface PayloadDeleteProgressRequestV4 extends PayloadRequestBaseV4 {
    readonly languages: string[];
    readonly wordIds: number[];
    readonly topicIds: number[];
}
