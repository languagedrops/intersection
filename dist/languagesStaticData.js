"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const language_1 = require("./language");
const GraphemeSplitter = require("grapheme-splitter");
const splitter = new GraphemeSplitter();
const splitGraphemes = (value) => {
    if (value == null) {
        return [];
    }
    return splitter.splitGraphemes(value);
};
exports.getHumanReadableLanguageName = (languageIso) => {
    switch (languageIso) {
        case language_1.LanguageISO.ZHYUE:
            return 'Cantonese';
        case language_1.LanguageISO.ES:
            return 'Spanish (Castilian)';
        case language_1.LanguageISO.ESMX:
            return 'Spanish (Latin America)';
        case language_1.LanguageISO.PT:
            return 'Portuguese (Brazilian)';
        case language_1.LanguageISO.PTPT:
            return 'Portuguese (European)';
        case language_1.LanguageISO.ENGB:
            return 'English (British)';
        case language_1.LanguageISO.EN:
            return 'English (American)”';
        default:
            return exports.languagesStaticData[languageIso].name;
    }
};
exports.getIsDeployedLanguage = (languageISO) => {
    return (exports.languagesStaticData[languageISO].availableAsLearning ||
        exports.languagesStaticData[languageISO].availableAsNative ||
        exports.languagesStaticData[languageISO].availableInVisualDictionary);
};
exports.deployedLanguageISOs = () => {
    return language_1.LanguageISO.all.filter((languageISO) => exports.getIsDeployedLanguage(languageISO));
};
exports.visualDictionaryLanguageISOs = () => {
    return language_1.LanguageISO.allAlphabetized.filter((languageIso) => exports.languagesStaticData[languageIso].availableInVisualDictionary);
};
exports.languagesStaticData = {
    [language_1.LanguageISO.KO]: {
        iso: language_1.LanguageISO.KO,
        name: language_1.LanguageName.Korean,
        alphabet: '것하다있다수하다나없다않다사람우리그아니다보다거보다같다주다대하다가다년한말일이말하다위하다그러나오다알다씨그렇다크다일사회많다안좋다더받다그것집나오다그리고문제그런살다저못하다생각하다모르다속만들다데앞경우중어떤잘그녀먹다자신문화원생각어떻다명통하다그러다그러다소리다시다른이런여자개정도다좀싶다보이다가지다함께아이지나다많이시간너인간사실나다이렇다어머니눈뭐점의하다시대다음이러하다누구'.split(''),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.ES]: {
        iso: language_1.LanguageISO.ES,
        name: language_1.LanguageName.Spanish,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.JP]: {
        iso: language_1.LanguageISO.JP,
        name: language_1.LanguageName.Japanese,
        alphabet: 'あいうえおかきくけこさsしすせそたちつてとなにぬねのはひふへほまみむめもらりるれろわをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽやゆよ'.split(''),
        alternativeAlphabet: 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'.split(''),
        hasRomanAid: true,
        hasAlternativeTranslation: true,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.FR]: {
        iso: language_1.LanguageISO.FR,
        name: language_1.LanguageName.French,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.EN]: {
        iso: language_1.LanguageISO.EN,
        name: language_1.LanguageName.English,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.ZH]: {
        iso: language_1.LanguageISO.ZH,
        name: language_1.LanguageName.Chinese,
        alphabet: '的壹是不了人我在有他这中大来上国个到说们为子和你地出道也时年得就那要下以生会自着去之过家学对可她里后小么心多天而能好都然没日于起还发成事只作当想看文无'.split(''),
        alternativeAlphabet: '的壹是不了人我在有他這中大來上國個到說們為子和你地出道也時年得就那要下以生會自著去之過家學對可她里後小麼心多天而能好都然沒日於起還發成事只作當想看文無(開手十用主行方又如前所本見經頭面公同三已老從動兩長'.split(''),
        hasRomanAid: true,
        hasAlternativeTranslation: true,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.IT]: {
        iso: language_1.LanguageISO.IT,
        name: language_1.LanguageName.Italian,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.DE]: {
        iso: language_1.LanguageISO.DE,
        name: language_1.LanguageName.German,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.RU]: {
        iso: language_1.LanguageISO.RU,
        name: language_1.LanguageName.Russian,
        alphabet: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.split(''),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.PT]: {
        iso: language_1.LanguageISO.PT,
        name: language_1.LanguageName.Portuguese,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.HE]: {
        iso: language_1.LanguageISO.HE,
        name: language_1.LanguageName.Hebrew,
        alphabet: splitGraphemes('א,בּ,ב,ג,ד,ה,ו‬,ז‬,ח‬,ט,י,ך‬‬,כּ,כ,ךּ,ל,מ,ם,נ‬,ן,‬ס,ע,פּ,פ‬,ף,צ‬,ץ,ק,שׂ‬,תּ‬,שׁ‬,ר,ת‬‬').filter((graphem) => graphem !== ',' && graphem !== '‬'),
        hasRomanAid: true,
        hasAlternativeTranslation: true,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.AR]: {
        iso: language_1.LanguageISO.AR,
        name: language_1.LanguageName.Arabic,
        alphabet: splitGraphemes('ا,ب,ت,ث,ج,ح,خ,د,ذ,ر,ز,س,ش,ص,ض,ط,ظ,ع,غ,ف,ق,ك,ل,م,ن,ه,و,ي').filter((graphem) => graphem !== ','),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.TR]: {
        iso: language_1.LanguageISO.TR,
        name: language_1.LanguageName.Turkish,
        alphabet: 'abcçdefgğhıijklmnoöprsştuüvyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.DA]: {
        iso: language_1.LanguageISO.DA,
        name: language_1.LanguageName.Danish,
        alphabet: 'abcdefghijklmnopqrstuvwxyzåæø'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.SV]: {
        iso: language_1.LanguageISO.SV,
        name: language_1.LanguageName.Swedish,
        alphabet: 'abcdefghijklmnopqrstuvwxyzåäö'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.NO]: {
        iso: language_1.LanguageISO.NO,
        name: language_1.LanguageName.Norwegian,
        alphabet: 'abcdefghijklmnopqrstuvwxyzæøå'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.HI]: {
        iso: language_1.LanguageISO.HI,
        name: language_1.LanguageName.Hindi,
        alphabet: splitGraphemes('अ,आ,ए,ई,ऍ,ऎ,इ,ओ,ऑ,ऊ,औ,उ,ब,भ,च,छ,ड,फ,फ़,ग,घ,ग़,ह,झ,क,ख,ल,ळ,ऌ,ॡ,म,न,ङ,ञ,ण,ऩ,ॐ,क़,र,ऋ,ऱ,स,श,ष,ट,त,ठ,थ,ध,ड़,व,यज़').filter((graphem) => graphem !== ','),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.TL]: {
        iso: language_1.LanguageISO.TL,
        name: language_1.LanguageName.Tagalog,
        alphabet: 'abcdefghijklmnñopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.VI]: {
        iso: language_1.LanguageISO.VI,
        name: language_1.LanguageName.Vietnamese,
        alphabet: 'a,b,c,d,e,g,h,i,k,l,m,n,o,p,q,r,s,t,u,v,x,y,ô,ơ,â,ă,ê,ư,đ'.split(','),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.EO]: {
        iso: language_1.LanguageISO.EO,
        name: language_1.LanguageName.Esperanto,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.HU]: {
        iso: language_1.LanguageISO.HU,
        name: language_1.LanguageName.Hungarian,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.NL]: {
        iso: language_1.LanguageISO.NL,
        name: language_1.LanguageName.Dutch,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.IC]: {
        iso: language_1.LanguageISO.IC,
        name: language_1.LanguageName.Icelandic,
        alphabet: 'abcdefghijklmnopqrstuvwxyzáðéíóúýþæö'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.ID]: {
        iso: language_1.LanguageISO.ID,
        name: language_1.LanguageName.Indonesian,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.ENGB]: {
        iso: language_1.LanguageISO.ENGB,
        name: language_1.LanguageName.EnglishBritish,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: false,
    },
    [language_1.LanguageISO.ESMX]: {
        iso: language_1.LanguageISO.ESMX,
        name: language_1.LanguageName.SpanishMexican,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.PTPT]: {
        iso: language_1.LanguageISO.PTPT,
        name: language_1.LanguageName.PortugueseEuropean,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.ZHYUE]: {
        iso: language_1.LanguageISO.ZHYUE,
        name: language_1.LanguageName.ChineseCantonese,
        alphabet: '的壹是不了人我在有他这中大来上国个到说们为子和你地出道也时年得就那要下以生会自着去之过家学对可她里后小么心多天而能好都然没日于起还发成事只作当想看文无'.split(''),
        hasRomanAid: true,
        hasAlternativeTranslation: true,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.TH]: {
        iso: language_1.LanguageISO.TH,
        name: language_1.LanguageName.Thai,
        alphabet: splitGraphemes('ก,ข,ฃ,ค,ฅ,ฆ,ง,จ,ฉ,ช,ซ,ฌ,ญ,ฎ,ฏ,ฐ,ฑ,ฒ,ณ,ด,ต,ถ,ท,ธ,น,บ,ป,ผ,ฝ,พ,ฟ,ภ,ม,ย,ร,ล,ว,ศ,ษ,ส,ห,ฬ,อ,ฮ,').filter((graphem) => graphem !== ','),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: true,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.PL]: {
        iso: language_1.LanguageISO.PL,
        name: language_1.LanguageName.Polish,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.HAW]: {
        iso: language_1.LanguageISO.HAW,
        name: language_1.LanguageName.Hawaiian,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: false,
    },
    [language_1.LanguageISO.PA]: {
        iso: language_1.LanguageISO.PA,
        name: language_1.LanguageName.Punjabi,
        alphabet: ''.split(''),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: false,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: false,
    },
    [language_1.LanguageISO.MI]: {
        iso: language_1.LanguageISO.MI,
        name: language_1.LanguageName.Maori,
        alphabet: 'a,e,h,i,k,m,n,ng,o,p,r,t,u,w,wh'.split(','),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.SM]: {
        iso: language_1.LanguageISO.SM,
        name: language_1.LanguageName.Samoan,
        alphabet: 'a,e,i,o,u,f,g,l,m,n,p,s,t,v'.split(','),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.EL]: {
        iso: language_1.LanguageISO.EL,
        name: language_1.LanguageName.Greek,
        alphabet: 'α,β,γ,δ,ε,ζ,η,θ,ι,κ,λ,μ,ν,ξ,ο,π,ρ,σ,τ,υ,φ,χ,ψ,ω'.split(','),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.ASE]: {
        iso: language_1.LanguageISO.ASE,
        name: language_1.LanguageName.ASL,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: true,
        availableAsLearning: true,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: false,
    },
    [language_1.LanguageISO.FI]: {
        iso: language_1.LanguageISO.FI,
        name: language_1.LanguageName.Finnish,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.AIN]: {
        iso: language_1.LanguageISO.AIN,
        name: language_1.LanguageName.Ainu,
        alphabet: 'ㇰ,ㇱ,ㇲ,ㇳ,ㇴ,ㇵ,ㇶ,ㇷ,ㇸ,ㇹ,ㇺ,ㇻ,ㇼ,ㇽ,ㇾ,ㇿ'.split(','),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: false,
    },
    [language_1.LanguageISO.ET]: {
        iso: language_1.LanguageISO.ET,
        name: language_1.LanguageName.Estonian,
        alphabet: 'abcdefghijklmnopqrsšzžtuvwõäöüxy'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.FA]: {
        iso: language_1.LanguageISO.FA,
        name: language_1.LanguageName.Persian,
        alphabet: splitGraphemes('ا,ب,ت,ث,ج,ح,خ,د,ذ,ر,ز,س,ش,ص,ض,ط,ظ,ع,غ,ف,ق,ك,ل,م,ن,ه,و,ي').filter((graphem) => graphem !== ','),
        hasRomanAid: true,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.HR]: {
        iso: language_1.LanguageISO.HR,
        name: language_1.LanguageName.Croatian,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: true,
        isUiLocalized: false,
        availableInVisualDictionary: true,
    },
    [language_1.LanguageISO.SR]: {
        iso: language_1.LanguageISO.SR,
        name: language_1.LanguageName.Serbian,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: false,
    },
    [language_1.LanguageISO.BS]: {
        iso: language_1.LanguageISO.BS,
        name: language_1.LanguageName.Bosnian,
        alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
        hasRomanAid: false,
        hasAlternativeTranslation: false,
        hasAlphabetTopic: false,
        availableAsLearning: true,
        availableAsNative: false,
        isUiLocalized: false,
        availableInVisualDictionary: false,
    },
};
