import { allMigrations } from './allMigrations'

export const migrateAPIPayloadToDataBasePayload = (payload: any, version: number) => {
  const index = allMigrations.findIndex((migration) => migration.version === version)
  if (index === -1) {
    return payload
  }

  return allMigrations
    .slice(index)
    .reduce((accum, item) => item.transformToDataBasePayload(accum), payload)
}

export const migrateDataBasePayloadToAPIPayload = (payload: any, version: number) => {
  const index = allMigrations.findIndex((migration) => migration.version === version)
  if (index === -1) {
    return payload
  }

  return allMigrations
    .slice(index)
    .reduce((accum, item) => item.transformFromDataBasePayload(accum), payload)
}
