
/**
 * Logs with a green tick
 * @param message to log
 */
export const logSuccess = (...message: string[]) => {
  console.log('\x1b[32m', '[\u2713]', '\x1b[0m', ...message)
}

/**
 * Logs with a red cross
 * @param message to log
 */
export const logFail = (...message: string[]) => {
  console.log('\x1b[31m', '[\u2718]', '\x1b[0m', ...message)
}
