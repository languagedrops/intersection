"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Errors;
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
})(Errors = exports.Errors || (exports.Errors = {}));
(function (Errors) {
    Errors.getEventType = (error) => {
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
    Errors.isWarning = (error) => Errors.getEventType(error) === 'warning';
    Errors.isError = (error) => Errors.getEventType(error) === 'error';
})(Errors = exports.Errors || (exports.Errors = {}));
