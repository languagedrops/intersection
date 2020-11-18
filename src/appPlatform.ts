export enum AppPlatform {
  iOS = 'iOS',
  Android = 'Android',
  Web = 'Web',
}

export namespace AppPlatform {
  export const all = Object.values(AppPlatform).filter((v) => typeof v === 'string') as AppPlatform[]

  export const getSyncInterval = (platform: AppPlatform): number => {
    switch (platform) {
      case AppPlatform.Android:
      case AppPlatform.iOS:
        return 30 * 1000
      case AppPlatform.Web:
        return 5 * 1000
    }
  }

  export const isWebApp = (appPlatform: AppPlatform): boolean => appPlatform === AppPlatform.Web
  export const isIOSApp = (appPlatform: AppPlatform): boolean => appPlatform === AppPlatform.iOS
}
