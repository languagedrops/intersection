interface FeatureSwitch {
    readonly name: string,
    readonly rule: string,
}

export type PayloadGetFeatureSwitchesResponseV1 = FeatureSwitch[]
