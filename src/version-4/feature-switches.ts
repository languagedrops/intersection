interface FeatureSwitch {
    readonly name: string,
    readonly rule: string,
}

export type PayloadGetFeatureSwitchesResponseV4 = FeatureSwitch[]
