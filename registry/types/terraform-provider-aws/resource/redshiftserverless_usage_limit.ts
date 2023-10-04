export interface RedshiftserverlessUsageLimit {
    resource: Resource[];
}

export interface Resource {
    redshiftserverless_usage_limit: RedshiftserverlessUsageLimitClass;
}

export interface RedshiftserverlessUsageLimitClass {
    /** (Required) The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing. The value must be a positive number. */
    amount:         any;
    /** (Optional) The action that Amazon Redshift Serverless takes when the limit is reached. Valid values are `log`, `emit-metric`, and `deactivate`. The default is `log`. */
    breach_action?: any;
    /** (Optional) The time period that the amount applies to. A weekly period begins on Sunday. Valid values are `daily`, `weekly`, and `monthly`. The default is `monthly`. */
    period?:        any;
    /** (Required) The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for. */
    resource_arn:   any;
    /** (Required) The type of Amazon Redshift Serverless usage to create a usage limit for. Valid values are `serverless-compute` or `cross-region-datasharing`. */
    usage_type:     any;
}