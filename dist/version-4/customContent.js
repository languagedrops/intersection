"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayloadCustomTopicTypeV4 = exports.PayloadCustomPlaylistTypeV4 = exports.CustomContentType = void 0;
var CustomContentType;
(function (CustomContentType) {
    CustomContentType["Word"] = "Word";
    CustomContentType["Topic"] = "Topic";
    CustomContentType["Playlist"] = "Playlist";
})(CustomContentType = exports.CustomContentType || (exports.CustomContentType = {}));
var PayloadCustomPlaylistTypeV4;
(function (PayloadCustomPlaylistTypeV4) {
    PayloadCustomPlaylistTypeV4["Favorite"] = "Favorite";
    PayloadCustomPlaylistTypeV4["UserAdded"] = "UserAdded";
    PayloadCustomPlaylistTypeV4["TrashBin"] = "TrashBin";
})(PayloadCustomPlaylistTypeV4 = exports.PayloadCustomPlaylistTypeV4 || (exports.PayloadCustomPlaylistTypeV4 = {}));
var PayloadCustomTopicTypeV4;
(function (PayloadCustomTopicTypeV4) {
    PayloadCustomTopicTypeV4["Favorite"] = "Favorite";
    PayloadCustomTopicTypeV4["UserAdded"] = "UserAdded";
    PayloadCustomTopicTypeV4["TrashBin"] = "TrashBin";
})(PayloadCustomTopicTypeV4 = exports.PayloadCustomTopicTypeV4 || (exports.PayloadCustomTopicTypeV4 = {}));
