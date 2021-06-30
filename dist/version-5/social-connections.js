"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayloadConnectionStatus;
(function (PayloadConnectionStatus) {
    PayloadConnectionStatus["connected"] = "connected";
    PayloadConnectionStatus["disconnected"] = "disconnected";
})(PayloadConnectionStatus = exports.PayloadConnectionStatus || (exports.PayloadConnectionStatus = {}));
var PayloadConnectionRequestType;
(function (PayloadConnectionRequestType) {
    PayloadConnectionRequestType["get"] = "get";
    PayloadConnectionRequestType["initiateConnection"] = "initiateConnection";
    PayloadConnectionRequestType["removeConnection"] = "removeConnection";
})(PayloadConnectionRequestType = exports.PayloadConnectionRequestType || (exports.PayloadConnectionRequestType = {}));
var PayloadConnectionsErrorStatus;
(function (PayloadConnectionsErrorStatus) {
    PayloadConnectionsErrorStatus["userNotFound"] = "userNotFound";
    PayloadConnectionsErrorStatus["linkNotFound"] = "linkNotFound";
})(PayloadConnectionsErrorStatus = exports.PayloadConnectionsErrorStatus || (exports.PayloadConnectionsErrorStatus = {}));
