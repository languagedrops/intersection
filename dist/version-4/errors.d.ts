export declare type PayloadEventTypeResponseV4 = 'error' | 'warning' | 'info' | 'success';
export declare enum PayloadErrorsResponseV4 {
    InvalidUserEmail = "InvalidUserEmail",
    Unauthorized = "Unauthorized",
    InvalidPayload = "Invalid payload",
    DuplicateUserEmail = "DuplicateUserEmail",
    MissingReceipt = "Invalid input: missing receipt",
    MissingReceiptSignature = "Invalid input: missing receiptSignature",
    MissingProductIdInReceipt = "Didn't find productId in receipt",
    CannotMergeTwoEmptyWords = "Cannot merge two empty words",
    CannotMergeTwoEmptyTopics = "Cannot merge two empty topics",
    CannotMergeTwoEmptyUsers = "Cannot merge two empty users",
    CannotMergeTwoEmptyUserPayloads = "Cannot merge two empty user payloads",
    WrongPayloadFromClient = "WrongPayloadFromClient",
    NoClientProductId = "No clientProductId",
    WrongFormattedReceipt = "Receipt is formatted in a wrong way",
    NoLanguagesToDelete = "No languages to delete supplied",
    NoWordsToDelete = "No words to delete supplied",
    NoTopicsToDelete = "No topics to delete supplied"
}
export declare const getEventTypeV4: (error: PayloadErrorsResponseV4) => PayloadEventTypeResponseV4;
export declare const PayloadIsWarningResponseV4: (error: PayloadErrorsResponseV4) => boolean;
export declare const PayloadIsErrorResponseV4: (error: PayloadErrorsResponseV4) => boolean;
