"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appPlatform_1 = require("./appPlatform");
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
    AppType["lang_fa"] = "lang_fa";
    AppType["lang_hr"] = "lang_hr";
    AppType["lang_et"] = "lang_et";
    AppType["lang_sr"] = "lang_sr";
    AppType["lang_bs"] = "lang_bs";
    AppType["lang_ain"] = "lang_ain";
    AppType["droplets"] = "droplets";
    AppType["droplets_demo_apple_store"] = "droplets_demo_apple_store";
    AppType["upopoy"] = "upopoy";
    AppType["nugget"] = "nugget";
})(AppType = exports.AppType || (exports.AppType = {}));
(function (AppType) {
    AppType.transformAppType = (input) => {
        if (!Object.keys(AppType).includes(input)) {
            Error('AppType wasnt recognised: ' + input);
        }
        return input;
    };
    AppType.all = Object.values(AppType).filter((v) => typeof v === 'string');
    AppType.getIapSuffix = (appType, platform) => {
        // add code for iOS
        switch (platform) {
            case appPlatform_1.AppPlatform.Android:
                switch (appType) {
                    case AppType.lang_ko:
                    case AppType.int:
                    case AppType.local_hu:
                        return appType;
                    case AppType.lang_ptbr:
                        return 'lang_pt2';
                    case AppType.lang_esmx:
                        return 'lang_es2';
                    case AppType.lang_enus:
                        return 'lang_en2';
                    case AppType.lang_zhyue:
                        return 'lang_zh2';
                    default:
                        return appType;
                }
            case appPlatform_1.AppPlatform.iOS:
                switch (appType) {
                    case AppType.lang_enus:
                        return 'lang_enus1';
                    case AppType.lang_ptbr:
                        return 'lang_pt';
                    case AppType.lang_pt:
                        return 'lang_ptpt';
                    case AppType.lang_ja:
                        return 'lang_jp';
                    case AppType.local_hu:
                        return 'hu';
                    default:
                        return appType;
                }
            case appPlatform_1.AppPlatform.Web: return `${appType}_web`;
        }
    };
    const tier1AppTypes = new Set([AppType.int, AppType.lang_ko, AppType.lang_de, AppType.lang_ja]);
    AppType.isTier1App = (appType) => tier1AppTypes.has(appType);
})(AppType = exports.AppType || (exports.AppType = {}));
