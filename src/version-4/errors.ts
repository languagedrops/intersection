
export type PayloadEventTypeResponseV4 = 'error' | 'warning' | 'info' | 'success'
export type PayloadStatusCodesV4 = 400 | 401 | 500 | 501

export interface PayloadErrorResponseV4 {
  readonly errorMessage: PayloadErrorsV4,
  readonly details: string,
  readonly payload: string,
}

export enum PayloadErrorsV4 {
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
  WrongWebhook = 'An unrecognised webhook was triggered',
  EmptyEmail = 'Empty email field',
  InternalServerError = 'Internal server error',
}

export const getEventTypeV4 = (error: PayloadErrorsV4): PayloadEventTypeResponseV4 => {
  switch (error) {
    case PayloadErrorsV4.InvalidUserEmail:
    case PayloadErrorsV4.DuplicateUserEmail:
    case PayloadErrorsV4.InvalidPayload:
    case PayloadErrorsV4.MissingReceipt:
    case PayloadErrorsV4.MissingReceiptSignature:
    case PayloadErrorsV4.MissingProductIdInReceipt:
    case PayloadErrorsV4.WrongPayloadFromClient:
      return 'warning'
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
      return 'error'
  }
}

export const getStatusCodeV4 = (error: PayloadErrorsV4): PayloadStatusCodesV4 => {
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
      return 400
    case PayloadErrorsV4.Unauthorized:
      return 401
    case PayloadErrorsV4.InternalServerError:
      return 500
    case PayloadErrorsV4.WrongWebhook:
      return 501
  }
}

export const PayloadIsWarningResponseV4 = (error: PayloadErrorsV4) => getEventTypeV4(error) === 'warning'
export const PayloadIsErrorResponseV4 = (error: PayloadErrorsV4) => getEventTypeV4(error) === 'error'

