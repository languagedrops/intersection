import { PayloadRequestBaseV5 } from './base';
export interface PayloadFeatureSuggestionRequestV5 extends PayloadRequestBaseV5 {
    readonly suggestion: string;
    readonly email?: string;
}
export interface PayloadFeatureSuggestionRequestV5ResponseV5 {
    readonly success: boolean;
}
