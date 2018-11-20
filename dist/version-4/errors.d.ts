export declare namespace PayloadErrorsResponseV4 {
    type EventType = 'error' | 'warning' | 'info' | 'success';
    enum Errors {
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
    const getEventType: (error: Errors) => EventType;
    const isWarningV4: (error: Errors) => boolean;
    const isErrorV4: (error: Errors) => boolean;
}
