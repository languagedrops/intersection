import { PayloadRequestBaseV4 } from './base';
export interface PayloadDeleteProgressRequestV4 extends PayloadRequestBaseV4 {
    readonly languages: string[];
    readonly wordIds: Array<string | number>;
    readonly topicIds: Array<string | number>;
}
