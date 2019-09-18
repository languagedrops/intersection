export interface DeprecatedAppInfo {
    readonly version: string;
    readonly message?: string;
}
export interface PayloadGetDeprecatedAppVersionsResponseV4 {
    readonly deprecatedVersion: DeprecatedAppInfo[];
}
