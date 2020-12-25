import { PayloadRequestBaseV5 } from './base';
export interface PayloadFeatureSuggestionRequestV5 extends PayloadRequestBaseV5 {
    readonly suggestion: string;
    readonly email?: string;
}
export interface PayloadFeatureSuggestionResponseV5 {
    readonly success: boolean;
}
