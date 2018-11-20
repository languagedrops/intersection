export namespace PayloadErrorsResponseV4 {

  export type EventType = 'error' | 'warning' | 'info' | 'success'

  export enum Errors {
    InvalidUserEmail = 'InvalidUserEmail',
    Unauthorized = 'Unauthorized',
    InvalidPayload = 'Invalid payload',
    DuplicateUserEmail = 'DuplicateUserEmail',
    MissingReceipt = 'Invalid input: missing receipt',
    MissingReceiptSignature = 'Invalid input: missing receiptSignature',
    MissingProductIdInReceipt = 'Didn\'t find productId in receipt',
    CannotMergeTwoEmptyWords = 'Cannot merge two empty words',
    CannotMergeTwoEmptyTopics = 'Cannot merge two empty topics',
    CannotMergeTwoEmptyUsers = 'Cannot merge two empty users',
    CannotMergeTwoEmptyUserPayloads = 'Cannot merge two empty user payloads',
    WrongPayloadFromClient = 'WrongPayloadFromClient',
    NoClientProductId = 'No clientProductId',
    WrongFormattedReceipt = 'Receipt is formatted in a wrong way',
    NoLanguagesToDelete = 'No languages to delete supplied',
    NoWordsToDelete = 'No words to delete supplied',
    NoTopicsToDelete = 'No topics to delete supplied',
  }

  export const getEventType = (error: Errors): EventType => {
    switch (error) {
      case Errors.InvalidUserEmail:
      case Errors.DuplicateUserEmail:
      case Errors.InvalidPayload:
      case Errors.MissingReceipt:
      case Errors.MissingReceiptSignature:
      case Errors.MissingProductIdInReceipt:
      case Errors.WrongPayloadFromClient:
        return 'warning'
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
        return 'error'
    }
  }

  export const isWarningV4 = (error: Errors) => getEventType(error) === 'warning'
  export const isErrorV4 = (error: Errors) => getEventType(error) === 'error'
}
