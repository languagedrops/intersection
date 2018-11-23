
export type PayloadEventTypeResponseV4 = 'error' | 'warning' | 'info' | 'success'

export interface PayloadErrorResponseV4 {
  readonly message: PayloadErrorsResponseV4,
  readonly details: string,
  readonly payload: string,
}

export enum PayloadErrorsResponseV4 {
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

export const getEventTypeV4 = (error: PayloadErrorsResponseV4): PayloadEventTypeResponseV4 => {
  switch (error) {
    case PayloadErrorsResponseV4.InvalidUserEmail:
    case PayloadErrorsResponseV4.DuplicateUserEmail:
    case PayloadErrorsResponseV4.InvalidPayload:
    case PayloadErrorsResponseV4.MissingReceipt:
    case PayloadErrorsResponseV4.MissingReceiptSignature:
    case PayloadErrorsResponseV4.MissingProductIdInReceipt:
    case PayloadErrorsResponseV4.WrongPayloadFromClient:
      return 'warning'
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
      return 'error'
  }
}

export const PayloadIsWarningResponseV4 = (error: PayloadErrorsResponseV4) => getEventTypeV4(error) === 'warning'
export const PayloadIsErrorResponseV4 = (error: PayloadErrorsResponseV4) => getEventTypeV4(error) === 'error'

