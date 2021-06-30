"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadPurchaseStatusV4 = exports.PayloadPurchaseProviderV4 = void 0;
var PayloadPurchaseProviderV4;
(function (PayloadPurchaseProviderV4) {
    PayloadPurchaseProviderV4["Google"] = "google";
    PayloadPurchaseProviderV4["Apple"] = "apple";
    PayloadPurchaseProviderV4["Paddle"] = "paddle";
    PayloadPurchaseProviderV4["NoProvider"] = "noProvider";
    PayloadPurchaseProviderV4["Gift"] = "gift";
})(PayloadPurchaseProviderV4 = exports.PayloadPurchaseProviderV4 || (exports.PayloadPurchaseProviderV4 = {}));
var PayloadPurchaseStatusV4;
(function (PayloadPurchaseStatusV4) {
    PayloadPurchaseStatusV4["Valid"] = "valid";
    PayloadPurchaseStatusV4["Expired"] = "expired";
    PayloadPurchaseStatusV4["Refunded"] = "refunded";
    PayloadPurchaseStatusV4["Invalid"] = "invalid";
    PayloadPurchaseStatusV4["Error"] = "Error";
})(PayloadPurchaseStatusV4 = exports.PayloadPurchaseStatusV4 || (exports.PayloadPurchaseStatusV4 = {}));
