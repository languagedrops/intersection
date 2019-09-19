import { SettingsAPIMigration } from './types'
import { Migration4 } from './migrations/migration4'

export const allMigrations: Array<SettingsAPIMigration<any, any, any>> = [Migration4]
