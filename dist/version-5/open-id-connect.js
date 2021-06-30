"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenIdResponseType = exports.OpenIdGrantType = void 0;
var OpenIdGrantType;
(function (OpenIdGrantType) {
    OpenIdGrantType["WechatAuthCode"] = "WechatAuthCode";
    OpenIdGrantType["WechatRefreshToken"] = "WechatRefreshToken";
})(OpenIdGrantType = exports.OpenIdGrantType || (exports.OpenIdGrantType = {}));
var OpenIdResponseType;
(function (OpenIdResponseType) {
    OpenIdResponseType["Wechat"] = "Wechat";
})(OpenIdResponseType = exports.OpenIdResponseType || (exports.OpenIdResponseType = {}));
