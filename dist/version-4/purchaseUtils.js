"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const purchase_1 = require("./purchase");
const appPlatform_1 = require("../appPlatform");
const appType_1 = require("../appType");
const language_1 = require("../language");
exports.getProductId = (identifier, platform, appType) => {
    if (platform === appPlatform_1.AppPlatform.Web) {
        return getProductIdWeb(identifier);
    }
    else {
        return getProductIdMobile(identifier, platform, appType);
    }
};
const getProductIdWeb = (identifier) => {
    switch (identifier) {
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly10: return '542286';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly13: return '590841';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly15: return '527451';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly15: return '636504';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly30: return '563890';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly35: return '544320';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear30: return '563890';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear30Plus1: return '563890';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40: return '542307';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly45: return '593398';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70: return '527452';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial: return '591248';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearlyEducation: return '601126';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearlyKahootPlus: return '650014';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime55: return '636592';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime65: return '636657';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime65Plus1Year: return '636657';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime80: return '629966';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime160: return '542281';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime180: return '590836';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGift1Year35: return '575274';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGift1Month10: return '575273';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGiftLifetime160: return '575271';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime90: return '633275';
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetimeKahootPlus: return '650015';
        default: return '';
    }
};
const getProductIdMobile = (identifier, platform, appType) => {
    const iapSuffix = appType_1.AppType.getIapSuffix(appType, platform);
    const applePriceMatchSuffix = 'apple_price';
    switch (identifier) {
        case purchase_1.PayloadIAPIdentifierV4.iapForever10Mins:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return `forever_10_mins_${iapSuffix}`;
            }
            switch (appType) {
                case appType_1.AppType.local_hu: return 'drops_topup_forever_10mins_hu';
                case appType_1.AppType.int: return 'drops_topup_forever_5mins';
                default: return `forever_10_mins_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return `forever_10_mins_discounted_60_${iapSuffix}`;
            }
            switch (appType) {
                case appType_1.AppType.local_hu: return 'drops_topup_forever_10mins_discounted_hu';
                case appType_1.AppType.int: return 'drops_topup_forever_10mins_discounted';
                default: return `forever_10_mins_discounted_60_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted40:
            if (platform === appPlatform_1.AppPlatform.Android) {
                switch (appType) {
                    case appType_1.AppType.int: return `forever_10_mins_discounted_40_alternative_${iapSuffix}`;
                    default: return `forever_10_mins_discounted_40_${iapSuffix}`;
                }
            }
            return `forever_10_mins_discounted_40_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted45:
            return `forever_10_mins_discounted_45_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted50:
            return `forever_10_mins_discounted_50_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted80:
            return `forever_10_mins_discounted_80_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iap10MinsMonthly:
            if (platform === appPlatform_1.AppPlatform.Android) {
                switch (appType) {
                    case appType_1.AppType.int: return `subscription_monthly_curious_${iapSuffix}_${applePriceMatchSuffix}`;
                    case appType_1.AppType.lang_zhyue: return `subscription_monthly_10mins_alternative_${iapSuffix}`;
                    default: return `subscription_monthly_10mins_${iapSuffix}`;
                }
            }
            switch (appType) {
                case appType_1.AppType.local_hu:
                case appType_1.AppType.int:
                case appType_1.AppType.local_ar:
                    return `drops_topup_monthly_10mins_${iapSuffix}`;
                default: return `subscription_monthly_10mins_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iap10MinsYearly:
            if (platform === appPlatform_1.AppPlatform.Android) {
                switch (appType) {
                    case appType_1.AppType.int: return `subscription_yearly_10mins_${iapSuffix}_${applePriceMatchSuffix}`;
                    default: return `subscription_yearly_10mins_${iapSuffix}`;
                }
            }
            switch (appType) {
                case appType_1.AppType.local_hu:
                case appType_1.AppType.int:
                    return `drops_topup_yearly_10mins_${iapSuffix}`;
                default: return `subscription_yearly_10mins_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapForever99Mins:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return `forever_unlimited_time_${iapSuffix}`;
            }
            switch (appType) {
                case appType_1.AppType.local_hu: return 'drops_topup_forever_99mins_hu';
                case appType_1.AppType.int: return 'drops_topup_forever_99mins';
                default: return `forever_unlimited_time_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return `forever_unlimited_time_discounted_60_${iapSuffix}`;
            }
            switch (appType) {
                case appType_1.AppType.local_hu: return 'drops_topup_forever_99mins_discounted_hu';
                case appType_1.AppType.int: return 'drops_topup_forever_99mins_discounted';
                default: return `forever_unlimited_time_discounted_60_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted40:
            return `forever_unlimited_time_discounted_40_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted45:
            return `forever_unlimited_time_discounted_45_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted50:
            return `forever_unlimited_time_discounted_50_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted80:
            return `forever_unlimited_time_discounted_80_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapUnlimitedMonthly:
            if (platform === appPlatform_1.AppPlatform.Android) {
                switch (appType) {
                    case appType_1.AppType.int: return `subscription_monthly_unliminted_time_${iapSuffix}_${applePriceMatchSuffix}`;
                    default: return `subscription_monthly_unliminted_time_${iapSuffix}`;
                }
            }
            else {
                return `subscription_monthly_unliminted_time_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapUnlimitedYearly:
            if (platform === appPlatform_1.AppPlatform.Android) {
                switch (appType) {
                    case appType_1.AppType.int: return `subscription_yearly_unliminted_time_${iapSuffix}_${applePriceMatchSuffix}`;
                    default: return `subscription_yearly_unliminted_time_${iapSuffix}`;
                }
            }
            else {
                return `subscription_yearly_unliminted_time_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguages:
            return `forever_all_languages_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted:
            return `forever_all_languages_discounted_60_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted40:
            return `forever_all_languages_discounted_40_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted45:
            return `forever_all_languages_discounted_45_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted50:
            return `forever_all_languages_discounted_50_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted80:
            return `forever_all_languages_discounted_80_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapAllLanguagesMonthly:
            if (platform === appPlatform_1.AppPlatform.Android) {
                switch (appType) {
                    case appType_1.AppType.int: return `subscription_monthly_all_languages_${iapSuffix}_${applePriceMatchSuffix}`;
                    case appType_1.AppType.lang_zhyue: return `subscription_monthly_all_languages_alternative_${iapSuffix}`;
                    default: return `subscription_monthly_all_languages_${iapSuffix}`;
                }
            }
            else {
                return `subscription_monthly_all_languages_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapAllLanguagesMonthlyFreeTrial:
            return `subscription_monthly_all_languages_trial_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapUnlimitedMonthlyFreeTrial:
            return `subscription_monthly_unliminted_time_trial_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapAllLanguagesYearly:
            if (platform === appPlatform_1.AppPlatform.Android) {
                switch (appType) {
                    case appType_1.AppType.int: return `subscription_yearly_all_languages_${iapSuffix}_${applePriceMatchSuffix}`;
                    default: return `subscription_yearly_all_languages_${iapSuffix}`;
                }
            }
            else {
                return `subscription_yearly_all_languages_${iapSuffix}`;
            }
        // simplified pricing model:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime160:
            if (appType === appType_1.AppType.local_zh && platform === appPlatform_1.AppPlatform.Android) {
                return `Drops premium lifetime`; // this is what we display on the AliPay checkout screen
            }
            else {
                return `premium_lifetime_160_${iapSuffix}_v2`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime180:
            return `premium_lifetime_180_${iapSuffix.replace('lang_', '')}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime80:
            if (platform === appPlatform_1.AppPlatform.iOS) {
                return `forever_all_languages_discounted_80_${iapSuffix}`;
            }
            else {
                if (appType_1.AppType.isTier1App(appType)) {
                    return `premium_lifetime_80_${iapSuffix.replace('lang_', '')}_v2`;
                }
                else {
                    return `premium_lifetime_80_${iapSuffix}_v2`;
                }
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime55:
            if (platform === appPlatform_1.AppPlatform.Android) {
                if (appType_1.AppType.isTier1App(appType)) {
                    return `premium_lifetime_55_${iapSuffix.replace('lang_', '')}_v2`;
                }
                else {
                    return `premium_lifetime_55_${iapSuffix}_v2`;
                }
            }
            else {
                return `forever_all_languages_discounted_55_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime65Plus1Year:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime65:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return `premium_lifetime_65_${iapSuffix}_v2`;
            }
            else {
                return `forever_all_languages_discounted_60_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime35:
            return `premium_lifetime_35_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70:
            return `premium_yearly_70_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial:
            if (appType === appType_1.AppType.lang_enus && platform === appPlatform_1.AppPlatform.iOS) {
                return `premium_yearly_70_freetrial_lang_enus_v2`;
            }
            return `premium_yearly_70_freetrial_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial3Days:
            return `premium_yearly_70_freetrial_3days_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial14Days:
            return `premium_yearly_70_freetrial_14days_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly55:
            return `premium_yearly_55_${iapSuffix}_v3`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly50:
            return `premium_yearly_50_${iapSuffix}_v3`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly45:
            return `premium_yearly_45_${iapSuffix.replace('lang_', '')}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear15:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return `premium_yearly_40_first_year_15_${iapSuffix}_v2`;
            }
            else {
                return `subscription_yearly_unliminted_time_${iapSuffix}`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear30Plus1:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear30:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return `premium_yearly_40_first_year_30_${iapSuffix}_v2`;
            }
            else {
                return `premium_yearly_40_freetrial_${iapSuffix}_v3`;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40Plus1:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40:
            return `premium_yearly_40_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FreeTrial:
            return `premium_yearly_40_freetrial_${iapSuffix}_v3`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly35:
            return `premium_yearly_35_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly30:
            return `premium_yearly_30_${iapSuffix}`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly25:
            return `premium_yearly_25_${iapSuffix.replace('lang_', '')}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly15:
            return `premium_yearly_15_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumQuarterly30:
            return `premium_quarterly_30_${iapSuffix}_v3`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly10:
            return `premium_monthly_10_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly13:
            return `premium_monthly_13_${iapSuffix.replace('lang_', '')}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly15:
            return `premium_monthly_15_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly3:
            return `premium_monthly_3_${iapSuffix}_v2`;
        case purchase_1.PayloadIAPIdentifierV4.iapPremium1year40:
            if (appType === appType_1.AppType.local_zh && platform === appPlatform_1.AppPlatform.Android) {
                return `Drops premium 1 year - 40% discount`; // this is what we display on the AliPay checkout screen
            }
            else {
                return ``;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremium1year70:
            if (appType === appType_1.AppType.local_zh && platform === appPlatform_1.AppPlatform.Android) {
                return `Drops premium 1 year`; // this is what we display on the AliPay checkout screen
            }
            else {
                return ``;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremium3months30:
            if (appType === appType_1.AppType.local_zh && platform === appPlatform_1.AppPlatform.Android) {
                return `Drops premium 3 months`; // this is what we display on the AliPay checkout screen
            }
            else {
                return ``;
            }
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearlyEducation:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearlyKahootPlus:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGift1Year35:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGift1Month10:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGiftLifetime160:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime90:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetimeKahootPlus:
            return '';
    }
};
exports.getAlternativeProductIdsMobile = (identifier, platform, appType) => {
    const iapSuffix = appType_1.AppType.getIapSuffix(appType, platform);
    switch (identifier) {
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted40:
            return [`forever_10_mins_discounted_40_${iapSuffix}`];
        case purchase_1.PayloadIAPIdentifierV4.iapForever10Mins:
            return platform === appPlatform_1.AppPlatform.iOS ? ['forever5Mins'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted:
            return platform === appPlatform_1.AppPlatform.iOS ? ['forever10MinsDiscounted'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted80:
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted45:
        case purchase_1.PayloadIAPIdentifierV4.iapForever10MinsDiscounted50:
            return [];
        case purchase_1.PayloadIAPIdentifierV4.iap10MinsMonthly:
            return platform === appPlatform_1.AppPlatform.Android ? [`subscription_monthly_curious_${iapSuffix}`, 'subscription_monthly_10mins_int_cis_30', 'subscription_monthly_10mins_int_cis_50'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iap10MinsYearly:
            return platform === appPlatform_1.AppPlatform.Android ? [`subscription_yearly_10mins_${iapSuffix}`, 'subscription_yearly_10mins_int_cis_30', 'subscription_yearly_10mins_int_cis_50'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapForever99Mins:
            return platform === appPlatform_1.AppPlatform.iOS ? ['forever99Mins'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted:
            return platform === appPlatform_1.AppPlatform.iOS ? ['forever99MinsDiscounted'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted40:
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted80:
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted45:
        case purchase_1.PayloadIAPIdentifierV4.iapForever99MinsDiscounted50:
            return [];
        case purchase_1.PayloadIAPIdentifierV4.iapUnlimitedMonthly:
            if (platform === appPlatform_1.AppPlatform.Android) {
                return [`subscription_monthly_unliminted_time_${iapSuffix}`, 'subscription_monthly_unliminted_time_int_cis_30', 'subscription_monthly_unliminted_time_int_cis_50'];
            }
            else {
                if ([appType_1.AppType.lang_he, appType_1.AppType.lang_ar, appType_1.AppType.lang_ja, appType_1.AppType.lang_tl].includes(appType)) {
                    return [`subscription_monthly_unliminted_time_trial_${iapSuffix}`];
                }
                else {
                    return [];
                }
            }
        case purchase_1.PayloadIAPIdentifierV4.iapUnlimitedYearly:
            return platform === appPlatform_1.AppPlatform.Android ? [`subscription_yearly_unliminted_time_${iapSuffix}`, 'subscription_yearly_unliminted_time_int_cis_30', 'subscription_yearly_unliminted_time_int_cis_50'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguages:
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted:
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted40:
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted80:
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted45:
        case purchase_1.PayloadIAPIdentifierV4.iapForeverAllLanguagesDiscounted50:
            return [];
        case purchase_1.PayloadIAPIdentifierV4.iapAllLanguagesMonthly:
            return platform === appPlatform_1.AppPlatform.Android ? [`subscription_monthly_all_languages_${iapSuffix}`, 'subscription_monthly_all_languages_int_cis_30', 'subscription_monthly_all_languages_int_cis_50'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapAllLanguagesMonthlyFreeTrial:
            return [];
        case purchase_1.PayloadIAPIdentifierV4.iapUnlimitedMonthlyFreeTrial:
            return [];
        case purchase_1.PayloadIAPIdentifierV4.iapAllLanguagesYearly:
            return platform === appPlatform_1.AppPlatform.Android ? [`subscription_yearly_all_languages_${iapSuffix}`, 'subscription_yearly_all_languages_int_cis_30', 'subscription_yearly_all_languages_int_cis_50'] : [];
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime35:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime55:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime65:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime65Plus1Year:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime80:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime90:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime160:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetime180:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly35:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly30:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly25:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly15:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly3:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly10:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly13:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumMonthly15:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearlyEducation:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearlyKahootPlus:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FreeTrial:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial3Days:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial14Days:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumQuarterly30:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40Plus1:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear15:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear30:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly40FirstYear30Plus1:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly45:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly50:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly55:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGift1Year35:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGift1Month10:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumGiftLifetime160:
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumLifetimeKahootPlus:
            return [];
        case purchase_1.PayloadIAPIdentifierV4.iapPremiumYearly70FreeTrial:
            return language_1.LanguageISO.all
                .map((iso) => `premium_yearly_70_freetrial_${iso.toLowerCase()}_${iapSuffix}_v2`);
        case purchase_1.PayloadIAPIdentifierV4.iapPremium1year70:
        case purchase_1.PayloadIAPIdentifierV4.iapPremium1year40:
        case purchase_1.PayloadIAPIdentifierV4.iapPremium3months30:
            return [];
    }
};
