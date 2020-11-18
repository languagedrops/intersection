"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppPlatform;
(function (AppPlatform) {
    AppPlatform["iOS"] = "iOS";
    AppPlatform["Android"] = "Android";
    AppPlatform["Web"] = "Web";
})(AppPlatform = exports.AppPlatform || (exports.AppPlatform = {}));
(function (AppPlatform) {
    AppPlatform.all = Object.values(AppPlatform).filter((v) => typeof v === 'string');
    AppPlatform.getSyncInterval = (platform) => {
        switch (platform) {
            case AppPlatform.Android:
            case AppPlatform.iOS:
                return 30 * 1000;
            case AppPlatform.Web:
                return 5 * 1000;
        }
    };
    AppPlatform.isWebApp = (appPlatform) => appPlatform === AppPlatform.Web;
    AppPlatform.isIOSApp = (appPlatform) => appPlatform === AppPlatform.iOS;
})(AppPlatform = exports.AppPlatform || (exports.AppPlatform = {}));
