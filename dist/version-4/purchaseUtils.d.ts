import { PayloadIAPIdentifierV4 } from './purchase';
import { AppPlatform } from '../appPlatform';
import { AppType } from '../appType';
export declare const getProductId: (identifier: PayloadIAPIdentifierV4, platform: AppPlatform, appType: AppType) => string;
export declare const getAlternativeProductIdsMobile: (identifier: PayloadIAPIdentifierV4, platform: AppPlatform, appType: AppType) => string[];
