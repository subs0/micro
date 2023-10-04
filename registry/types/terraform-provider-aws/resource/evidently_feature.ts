export interface EvidentlyFeature {
    resource: Resource[];
}

export interface Resource {
    evidently_feature: EvidentlyFeatureClass;
}

export interface EvidentlyFeatureClass {
    /** (Optional) The name of the variation to use as the default variation. The default variation is served to users who are not allocated to any ongoing launches or experiments of this feature. This variation must also be listed in the `variations` structure. If you omit `default_variation`, the first variation listed in the `variations` structure is used as the default variation. */
    default_variation?:   any;
    /** (Optional) Specifies the description of the feature. */
    description?:         any;
    /** (Optional) Specify users that should always be served a specific variation of a feature. Each user is specified by a key-value pair . For each key, specify a user by entering their user ID, account ID, or some other identifier. For the value, specify the name of the variation that they are to be served. */
    entity_overrides?:    any;
    /** (Optional) Specify `ALL_RULES` to activate the traffic allocation specified by any ongoing launches or experiments. Specify `DEFAULT_VARIATION` to serve the default variation to all users instead. */
    evaluation_strategy?: any;
    /** (Required) The name of the variation. Minimum length of `1`. Maximum length of `127`. */
    name:                 any;
    /** (Required) The name or ARN of the project that is to contain the new feature. */
    project:              any;
    /** (Optional) Tags to apply to the feature. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Required) One or more blocks that contain the configuration of the feature's different variations. [Detailed below](#variations) */
    variations:           any;
    /** (Required) A block that specifies the value assigned to this variation. [Detailed below](#value) */
    value:                any;
    /** (Optional) If this feature uses the Boolean variation type, this field contains the Boolean value of this variation. */
    bool_value?:          any;
    /** (Optional) If this feature uses the double integer variation type, this field contains the double integer value of this variation. */
    double_value?:        any;
    /** (Optional) If this feature uses the long variation type, this field contains the long value of this variation. Minimum value of `-9007199254740991`. Maximum value of `9007199254740991`. */
    long_value?:          any;
    any_value?:        string;
}