"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PurchaseProvider;
(function (PurchaseProvider) {
    PurchaseProvider["Google"] = "google";
    PurchaseProvider["Apple"] = "apple";
    PurchaseProvider["Paddle"] = "paddle";
})(PurchaseProvider = exports.PurchaseProvider || (exports.PurchaseProvider = {}));
var PurchaseStatus;
(function (PurchaseStatus) {
    PurchaseStatus["Valid"] = "valid";
    PurchaseStatus["Expired"] = "expired";
    PurchaseStatus["Refunded"] = "refunded";
    PurchaseStatus["Invalid"] = "invalid";
    PurchaseStatus["Error"] = "Error";
})(PurchaseStatus = exports.PurchaseStatus || (exports.PurchaseStatus = {}));
