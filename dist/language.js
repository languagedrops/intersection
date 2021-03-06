"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageName = exports.LanguageISO = void 0;
const majime_1 = require("@drops-developers/majime");
var LanguageISO;
(function (LanguageISO) {
    LanguageISO["HU"] = "HU";
    LanguageISO["KO"] = "KO";
    LanguageISO["ES"] = "ES";
    LanguageISO["JP"] = "JP";
    LanguageISO["FR"] = "FR";
    LanguageISO["EN"] = "EN";
    LanguageISO["ZH"] = "ZH";
    LanguageISO["IT"] = "IT";
    LanguageISO["DE"] = "DE";
    LanguageISO["RU"] = "RU";
    LanguageISO["PT"] = "PT";
    LanguageISO["HE"] = "HE";
    LanguageISO["AR"] = "AR";
    LanguageISO["TR"] = "TR";
    LanguageISO["DA"] = "DA";
    LanguageISO["SV"] = "SV";
    LanguageISO["NO"] = "NO";
    LanguageISO["HI"] = "HI";
    LanguageISO["TL"] = "TL";
    LanguageISO["VI"] = "VI";
    LanguageISO["EO"] = "EO";
    LanguageISO["NL"] = "NL";
    LanguageISO["IC"] = "IC";
    LanguageISO["ID"] = "ID";
    LanguageISO["ENGB"] = "ENGB";
    LanguageISO["ESMX"] = "ESMX";
    LanguageISO["PTPT"] = "PTPT";
    LanguageISO["ZHYUE"] = "ZHYUE";
    LanguageISO["TH"] = "TH";
    LanguageISO["PL"] = "PL";
    LanguageISO["HAW"] = "HAW";
    LanguageISO["PA"] = "PA";
    LanguageISO["MI"] = "MI";
    LanguageISO["SM"] = "SM";
    LanguageISO["EL"] = "EL";
    LanguageISO["FI"] = "FI";
    LanguageISO["ASE"] = "ASE";
    LanguageISO["AIN"] = "AIN";
    LanguageISO["FA"] = "FA";
    LanguageISO["ET"] = "ET";
    LanguageISO["HR"] = "HR";
    LanguageISO["SR"] = "SR";
    LanguageISO["BS"] = "BS";
    LanguageISO["SA"] = "SA";
    LanguageISO["SW"] = "SW";
    LanguageISO["YO"] = "YO";
    LanguageISO["IG"] = "IG";
})(LanguageISO = exports.LanguageISO || (exports.LanguageISO = {}));
(function (LanguageISO) {
    LanguageISO.all = Object.values(LanguageISO).filter((v) => typeof v === 'string');
    LanguageISO.allAlphabetized = majime_1.sortedByProperty(LanguageISO.all, (iso) => iso);
    LanguageISO.getByName = (name) => LanguageISO.all.find((languageIso) => languageIso.toString() === name);
})(LanguageISO = exports.LanguageISO || (exports.LanguageISO = {}));
var LanguageName;
(function (LanguageName) {
    LanguageName["English"] = "English";
    LanguageName["Hungarian"] = "Hungarian";
    LanguageName["Chinese"] = "Chinese";
    LanguageName["Korean"] = "Korean";
    LanguageName["Spanish"] = "Spanish";
    LanguageName["Japanese"] = "Japanese";
    LanguageName["French"] = "French";
    LanguageName["Italian"] = "Italian";
    LanguageName["German"] = "German";
    LanguageName["Russian"] = "Russian";
    LanguageName["Portuguese"] = "Portuguese";
    LanguageName["Hebrew"] = "Hebrew";
    LanguageName["Arabic"] = "Arabic";
    LanguageName["Turkish"] = "Turkish";
    LanguageName["Danish"] = "Danish";
    LanguageName["Swedish"] = "Swedish";
    LanguageName["Norwegian"] = "Norwegian";
    LanguageName["Hindi"] = "Hindi";
    LanguageName["Tagalog"] = "Tagalog";
    LanguageName["Vietnamese"] = "Vietnamese";
    LanguageName["Esperanto"] = "Esperanto";
    LanguageName["Dutch"] = "Dutch";
    LanguageName["Icelandic"] = "Icelandic";
    LanguageName["Indonesian"] = "Indonesian";
    LanguageName["EnglishBritish"] = "EnglishBritish";
    LanguageName["SpanishMexican"] = "SpanishMexican";
    LanguageName["PortugueseEuropean"] = "PortugueseEuropean";
    LanguageName["ChineseCantonese"] = "ChineseCantonese";
    LanguageName["Thai"] = "Thai";
    LanguageName["Polish"] = "Polish";
    LanguageName["Hawaiian"] = "Hawaiian";
    LanguageName["Punjabi"] = "Punjabi";
    LanguageName["Maori"] = "Maori";
    LanguageName["Samoan"] = "Samoan";
    LanguageName["Greek"] = "Greek";
    LanguageName["Finnish"] = "Finnish";
    LanguageName["ASL"] = "Asl";
    LanguageName["Ainu"] = "Ainu";
    LanguageName["Persian"] = "Persian";
    LanguageName["Estonian"] = "Estonian";
    LanguageName["Croatian"] = "Croatian";
    LanguageName["Bosnian"] = "Bosnian";
    LanguageName["Serbian"] = "Serbian";
    LanguageName["Sanskrit"] = "Sanskrit";
    LanguageName["Swahili"] = "Swahili";
    LanguageName["Yoruba"] = "Yoruba";
    LanguageName["Igbo"] = "Igbo";
})(LanguageName = exports.LanguageName || (exports.LanguageName = {}));
