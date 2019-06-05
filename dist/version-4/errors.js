"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayloadErrorsV4;
(function (PayloadErrorsV4) {
    PayloadErrorsV4["InvalidUserEmail"] = "InvalidUserEmail";
    PayloadErrorsV4["Unauthorized"] = "Unauthorized";
    PayloadErrorsV4["InvalidPayload"] = "Invalid payload";
    PayloadErrorsV4["DuplicateUserEmail"] = "DuplicateUserEmail";
    PayloadErrorsV4["MissingReceipt"] = "Invalid input: missing receipt";
    PayloadErrorsV4["MissingReceiptSignature"] = "Invalid input: missing receiptSignature";
    PayloadErrorsV4["MissingProductIdInReceipt"] = "Didn't find productId in receipt";
    PayloadErrorsV4["CannotMergeTwoEmptyWords"] = "Cannot merge two empty words";
    PayloadErrorsV4["CannotMergeTwoEmptyTopics"] = "Cannot merge two empty topics";
    PayloadErrorsV4["CannotMergeTwoEmptyUsers"] = "Cannot merge two empty users";
    PayloadErrorsV4["CannotMergeTwoEmptyUserPayloads"] = "Cannot merge two empty user payloads";
    PayloadErrorsV4["WrongPayloadFromClient"] = "WrongPayloadFromClient";
    PayloadErrorsV4["NoClientProductId"] = "No clientProductId";
    PayloadErrorsV4["WrongFormattedReceipt"] = "Receipt is formatted in a wrong way";
    PayloadErrorsV4["NoLanguagesToDelete"] = "No languages to delete supplied";
    PayloadErrorsV4["NoWordsToDelete"] = "No words to delete supplied";
    PayloadErrorsV4["NoTopicsToDelete"] = "No topics to delete supplied";
    PayloadErrorsV4["WrongWebhook"] = "An unrecognised webhook was triggered";
    PayloadErrorsV4["EmptyEmail"] = "Empty email field";
    PayloadErrorsV4["InternalServerError"] = "Internal server error";
})(PayloadErrorsV4 = exports.PayloadErrorsV4 || (exports.PayloadErrorsV4 = {}));
exports.getEventTypeV4 = (error) => {
    switch (error) {
        case PayloadErrorsV4.InvalidUserEmail:
        case PayloadErrorsV4.DuplicateUserEmail:
        case PayloadErrorsV4.InvalidPayload:
        case PayloadErrorsV4.MissingReceipt:
        case PayloadErrorsV4.MissingReceiptSignature:
        case PayloadErrorsV4.MissingProductIdInReceipt:
        case PayloadErrorsV4.WrongPayloadFromClient:
            return 'warning';
        case PayloadErrorsV4.Unauthorized:
        case PayloadErrorsV4.CannotMergeTwoEmptyWords:
        case PayloadErrorsV4.CannotMergeTwoEmptyTopics:
        case PayloadErrorsV4.CannotMergeTwoEmptyUsers:
        case PayloadErrorsV4.CannotMergeTwoEmptyUserPayloads:
        case PayloadErrorsV4.NoClientProductId:
        case PayloadErrorsV4.WrongFormattedReceipt:
        case PayloadErrorsV4.NoLanguagesToDelete:
        case PayloadErrorsV4.NoWordsToDelete:
        case PayloadErrorsV4.NoTopicsToDelete:
        case PayloadErrorsV4.WrongWebhook:
        case PayloadErrorsV4.EmptyEmail:
        case PayloadErrorsV4.InternalServerError:
            return 'error';
    }
};
exports.getStatusCodeV4 = (error) => {
    switch (error) {
        case PayloadErrorsV4.InvalidUserEmail:
        case PayloadErrorsV4.DuplicateUserEmail:
        case PayloadErrorsV4.InvalidPayload:
        case PayloadErrorsV4.MissingReceipt:
        case PayloadErrorsV4.MissingReceiptSignature:
        case PayloadErrorsV4.MissingProductIdInReceipt:
        case PayloadErrorsV4.WrongPayloadFromClient:
        case PayloadErrorsV4.CannotMergeTwoEmptyWords:
        case PayloadErrorsV4.CannotMergeTwoEmptyTopics:
        case PayloadErrorsV4.CannotMergeTwoEmptyUsers:
        case PayloadErrorsV4.CannotMergeTwoEmptyUserPayloads:
        case PayloadErrorsV4.NoClientProductId:
        case PayloadErrorsV4.WrongFormattedReceipt:
        case PayloadErrorsV4.EmptyEmail:
        case PayloadErrorsV4.NoLanguagesToDelete:
        case PayloadErrorsV4.NoWordsToDelete:
        case PayloadErrorsV4.NoTopicsToDelete:
            return 400;
        case PayloadErrorsV4.Unauthorized:
            return 401;
        case PayloadErrorsV4.InternalServerError:
            return 500;
        case PayloadErrorsV4.WrongWebhook:
            return 501;
    }
};
exports.PayloadIsWarningResponseV4 = (error) => exports.getEventTypeV4(error) === 'warning';
exports.PayloadIsErrorResponseV4 = (error) => exports.getEventTypeV4(error) === 'error';
