export declare enum AppPlatform {
    iOS = "iOS",
    Android = "Android",
    Web = "Web"
}
export declare namespace AppPlatform {
    const all: AppPlatform[];
    const getSyncInterval: (platform: AppPlatform) => number;
    const isWebApp: (appPlatform: AppPlatform) => boolean;
    const isIOSApp: (appPlatform: AppPlatform) => boolean;
}
