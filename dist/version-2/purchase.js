"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayloadPurchaseProviderV2;
(function (PayloadPurchaseProviderV2) {
    PayloadPurchaseProviderV2["Google"] = "google";
    PayloadPurchaseProviderV2["Apple"] = "apple";
    PayloadPurchaseProviderV2["Paddle"] = "paddle";
})(PayloadPurchaseProviderV2 = exports.PayloadPurchaseProviderV2 || (exports.PayloadPurchaseProviderV2 = {}));
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["subscription"] = "subscription";
    SubscriptionType["lifetime"] = "lifetime";
})(SubscriptionType = exports.SubscriptionType || (exports.SubscriptionType = {}));
var PayloadPurchaseStatusV2;
(function (PayloadPurchaseStatusV2) {
    PayloadPurchaseStatusV2["Valid"] = "valid";
    PayloadPurchaseStatusV2["Expired"] = "expired";
    PayloadPurchaseStatusV2["Refunded"] = "refunded";
    PayloadPurchaseStatusV2["Invalid"] = "invalid";
})(PayloadPurchaseStatusV2 = exports.PayloadPurchaseStatusV2 || (exports.PayloadPurchaseStatusV2 = {}));
