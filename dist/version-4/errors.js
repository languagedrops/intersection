"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PayloadErrorsResponseV4;
(function (PayloadErrorsResponseV4) {
    let Errors;
    (function (Errors) {
        Errors["InvalidUserEmail"] = "InvalidUserEmail";
        Errors["Unauthorized"] = "Unauthorized";
        Errors["InvalidPayload"] = "Invalid payload";
        Errors["DuplicateUserEmail"] = "DuplicateUserEmail";
        Errors["MissingReceipt"] = "Invalid input: missing receipt";
        Errors["MissingReceiptSignature"] = "Invalid input: missing receiptSignature";
        Errors["MissingProductIdInReceipt"] = "Didn't find productId in receipt";
        Errors["CannotMergeTwoEmptyWords"] = "Cannot merge two empty words";
        Errors["CannotMergeTwoEmptyTopics"] = "Cannot merge two empty topics";
        Errors["CannotMergeTwoEmptyUsers"] = "Cannot merge two empty users";
        Errors["CannotMergeTwoEmptyUserPayloads"] = "Cannot merge two empty user payloads";
        Errors["WrongPayloadFromClient"] = "WrongPayloadFromClient";
        Errors["NoClientProductId"] = "No clientProductId";
        Errors["WrongFormattedReceipt"] = "Receipt is formatted in a wrong way";
        Errors["NoLanguagesToDelete"] = "No languages to delete supplied";
        Errors["NoWordsToDelete"] = "No words to delete supplied";
        Errors["NoTopicsToDelete"] = "No topics to delete supplied";
    })(Errors = PayloadErrorsResponseV4.Errors || (PayloadErrorsResponseV4.Errors = {}));
    PayloadErrorsResponseV4.getEventType = (error) => {
        switch (error) {
            case Errors.InvalidUserEmail:
            case Errors.DuplicateUserEmail:
            case Errors.InvalidPayload:
            case Errors.MissingReceipt:
            case Errors.MissingReceiptSignature:
            case Errors.MissingProductIdInReceipt:
            case Errors.WrongPayloadFromClient:
                return 'warning';
            case Errors.Unauthorized:
            case Errors.CannotMergeTwoEmptyWords:
            case Errors.CannotMergeTwoEmptyTopics:
            case Errors.CannotMergeTwoEmptyUsers:
            case Errors.CannotMergeTwoEmptyUserPayloads:
            case Errors.NoClientProductId:
            case Errors.WrongFormattedReceipt:
            case Errors.NoLanguagesToDelete:
            case Errors.NoWordsToDelete:
            case Errors.NoTopicsToDelete:
                return 'error';
        }
    };
    PayloadErrorsResponseV4.isWarning = (error) => PayloadErrorsResponseV4.getEventType(error) === 'warning';
    PayloadErrorsResponseV4.isError = (error) => PayloadErrorsResponseV4.getEventType(error) === 'error';
})(PayloadErrorsResponseV4 = exports.PayloadErrorsResponseV4 || (exports.PayloadErrorsResponseV4 = {}));
