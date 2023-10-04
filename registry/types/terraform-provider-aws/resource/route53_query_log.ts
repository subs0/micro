export interface Route53QueryLog {
    resource: Resource[];
}

export interface Resource {
    route53_query_log: Route53QueryLogClass;
}

export interface Route53QueryLogClass {
    /** (Required) CloudWatch log group ARN to send query logs. */
    cloudwatch_log_group_arn: any;
    /** (Required) Route53 hosted zone ID to enable query logs. */
    zone_id:                  any;
}