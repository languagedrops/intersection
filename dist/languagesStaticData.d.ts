import { LanguageISO, Language } from './language';
export declare const getHumanReadableLanguageName: (languageIso: LanguageISO) => string;
export declare const getIsDeployedLanguage: (languageISO: LanguageISO) => boolean;
export declare const deployedLanguageISOs: () => LanguageISO[];
export declare const visualDictionaryLanguageISOs: () => LanguageISO[];
export declare const languagesStaticData: Record<LanguageISO, Language>;
