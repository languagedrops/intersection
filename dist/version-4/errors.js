"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayloadErrorsResponseV4;
(function (PayloadErrorsResponseV4) {
    PayloadErrorsResponseV4["InvalidUserEmail"] = "InvalidUserEmail";
    PayloadErrorsResponseV4["Unauthorized"] = "Unauthorized";
    PayloadErrorsResponseV4["InvalidPayload"] = "Invalid payload";
    PayloadErrorsResponseV4["DuplicateUserEmail"] = "DuplicateUserEmail";
    PayloadErrorsResponseV4["MissingReceipt"] = "Invalid input: missing receipt";
    PayloadErrorsResponseV4["MissingReceiptSignature"] = "Invalid input: missing receiptSignature";
    PayloadErrorsResponseV4["MissingProductIdInReceipt"] = "Didn't find productId in receipt";
    PayloadErrorsResponseV4["CannotMergeTwoEmptyWords"] = "Cannot merge two empty words";
    PayloadErrorsResponseV4["CannotMergeTwoEmptyTopics"] = "Cannot merge two empty topics";
    PayloadErrorsResponseV4["CannotMergeTwoEmptyUsers"] = "Cannot merge two empty users";
    PayloadErrorsResponseV4["CannotMergeTwoEmptyUserPayloads"] = "Cannot merge two empty user payloads";
    PayloadErrorsResponseV4["WrongPayloadFromClient"] = "WrongPayloadFromClient";
    PayloadErrorsResponseV4["NoClientProductId"] = "No clientProductId";
    PayloadErrorsResponseV4["WrongFormattedReceipt"] = "Receipt is formatted in a wrong way";
    PayloadErrorsResponseV4["NoLanguagesToDelete"] = "No languages to delete supplied";
    PayloadErrorsResponseV4["NoWordsToDelete"] = "No words to delete supplied";
    PayloadErrorsResponseV4["NoTopicsToDelete"] = "No topics to delete supplied";
})(PayloadErrorsResponseV4 = exports.PayloadErrorsResponseV4 || (exports.PayloadErrorsResponseV4 = {}));
exports.getEventTypeV4 = (error) => {
    switch (error) {
        case PayloadErrorsResponseV4.InvalidUserEmail:
        case PayloadErrorsResponseV4.DuplicateUserEmail:
        case PayloadErrorsResponseV4.InvalidPayload:
        case PayloadErrorsResponseV4.MissingReceipt:
        case PayloadErrorsResponseV4.MissingReceiptSignature:
        case PayloadErrorsResponseV4.MissingProductIdInReceipt:
        case PayloadErrorsResponseV4.WrongPayloadFromClient:
            return 'warning';
        case PayloadErrorsResponseV4.Unauthorized:
        case PayloadErrorsResponseV4.CannotMergeTwoEmptyWords:
        case PayloadErrorsResponseV4.CannotMergeTwoEmptyTopics:
        case PayloadErrorsResponseV4.CannotMergeTwoEmptyUsers:
        case PayloadErrorsResponseV4.CannotMergeTwoEmptyUserPayloads:
        case PayloadErrorsResponseV4.NoClientProductId:
        case PayloadErrorsResponseV4.WrongFormattedReceipt:
        case PayloadErrorsResponseV4.NoLanguagesToDelete:
        case PayloadErrorsResponseV4.NoWordsToDelete:
        case PayloadErrorsResponseV4.NoTopicsToDelete:
            return 'error';
    }
};
exports.PayloadIsWarningResponseV4 = (error) => exports.getEventTypeV4(error) === 'warning';
exports.PayloadIsErrorResponseV4 = (error) => exports.getEventTypeV4(error) === 'error';
