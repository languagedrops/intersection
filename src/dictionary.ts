export interface Dictionary<T> { readonly [key: string]: T }
export type KeyedDictionary<K extends keyof any, T> = { [P in K]?: T }
