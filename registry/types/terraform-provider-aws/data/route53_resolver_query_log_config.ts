export interface Route53ResolverQueryLogConfig {
    data: Datum[];
}

export interface Datum {
    route53_resolver_query_log_config: Route53ResolverQueryLogConfigClass;
}

export interface Route53ResolverQueryLogConfigClass {
    /** (Optional) ID of the Route53 Resolver Query Logging Configuration. */
    resolver_query_log_config_id?: any;
    /** (Optional) One or more name/value pairs to use as filters. There are */
    filter?:                       any;
    /** The ID for the query logging configuration. */
    id?:                           any;
    /** Computed ARN of the Route53 Resolver Query Logging Configuration. */
    arn?:                          any;
    /** The ARN of the resource that you want Resolver to send query logs: an Amazon S3 bucket, a CloudWatch Logs log group or a Kinesis Data Firehose delivery stream. */
    destination_arn?:              any;
    /** The name of the query logging configuration. */
    name?:                         any;
    /** The AWS account ID for the account that created the query logging configuration. */
    owner_id?:                     any;
    /** An indication of whether the query logging configuration is shared with other AWS accounts or was shared with the current account by another AWS account. */
    share_status?:                 any;
    /** Map of tags to assign to the service. */
    tags?:                         any;
}