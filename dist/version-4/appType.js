"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppType;
(function (AppType) {
    AppType["int"] = "int";
    AppType["local_hu"] = "local_hu";
    AppType["local_ar"] = "local_ar";
    AppType["lang_ru"] = "lang_ru";
    AppType["lang_ar"] = "lang_ar";
    AppType["lang_zh"] = "lang_zh";
    AppType["lang_zhyue"] = "lang_zhyue";
    AppType["lang_da"] = "lang_da";
    AppType["lang_en"] = "lang_en";
    AppType["lang_enus"] = "lang_enus";
    AppType["lang_fr"] = "lang_fr";
    AppType["lang_de"] = "lang_de";
    AppType["lang_it"] = "lang_it";
    AppType["lang_he"] = "lang_he";
    AppType["lang_hu"] = "lang_hu";
    AppType["lang_ja"] = "lang_ja";
    AppType["lang_ko"] = "lang_ko";
    AppType["lang_pt"] = "lang_pt";
    AppType["lang_ptbr"] = "lang_ptbr";
    AppType["lang_es"] = "lang_es";
    AppType["lang_esmx"] = "lang_esmx";
    AppType["lang_tl"] = "lang_tl";
    AppType["lang_tr"] = "lang_tr";
    AppType["lang_sv"] = "lang_sv";
    AppType["lang_no"] = "lang_no";
    AppType["lang_hi"] = "lang_hi";
    AppType["lang_vi"] = "lang_vi";
    AppType["lang_id"] = "lang_id";
    AppType["lang_nl"] = "lang_nl";
    AppType["lang_ic"] = "lang_ic";
    AppType["lang_eo"] = "lang_eo";
    AppType["lang_pl"] = "lang_pl";
    AppType["lang_th"] = "lang_th";
    AppType["scripts"] = "scripts";
    AppType["local_zh"] = "local_zh";
    AppType["global_eagle"] = "global_eagle";
    AppType["lang_haw"] = "lang_haw";
    AppType["lang_mi"] = "lang_mi";
    AppType["lang_sm"] = "lang_sm";
    AppType["lang_el"] = "lang_el";
    AppType["lang_fi"] = "lang_fi";
    AppType["droplets"] = "droplets";
})(AppType = exports.AppType || (exports.AppType = {}));
(function (AppType) {
    AppType.transformAppType = (input) => {
        if (!Object.keys(AppType).includes(input)) {
            Error('AppType wasnt recognised: ' + input);
        }
        return input;
    };
    AppType.all = Object.values(AppType).filter((v) => typeof v === 'string');
})(AppType = exports.AppType || (exports.AppType = {}));
