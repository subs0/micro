export interface RedshiftUsageLimit {
    resource: Resource[];
}

export interface Resource {
    redshift_usage_limit: RedshiftUsageLimitClass;
}

export interface RedshiftUsageLimitClass {
    /** (Required) The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number. */
    amount:             any;
    /** (Optional) The action that Amazon Redshift takes when the limit is reached. The default is `log`. Valid values are `log`, `emit-metric`, and `disable`. */
    breach_action?:     any;
    /** (Required) The identifier of the cluster that you want to limit usage. */
    cluster_identifier: any;
    /** (Required) The Amazon Redshift feature that you want to limit. Valid values are `spectrum`, `concurrency-scaling`, and `cross-region-datasharing`. */
    feature_type:       any;
    /** (Required) The type of limit. Depending on the feature type, this can be based on a time duration or data size. If FeatureType is `spectrum`, then LimitType must be `data-scanned`. If FeatureType is `concurrency-scaling`, then LimitType must be `time`. If FeatureType is `cross-region-datasharing`, then LimitType must be `data-scanned`. Valid values are `data-scanned`, and `time`. */
    limit_type:         any;
    /** (Optional) The time period that the amount applies to. A weekly period begins on Sunday. The default is `monthly`. Valid values are `daily`, `weekly`, and `monthly`. */
    period?:            any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}