export interface Route53HealthCheck {
    resource: Resource[];
}

export interface Resource {
    route53_health_check: Route53HealthCheckClass;
}

export interface Route53HealthCheckClass {
    /** (Optional) This is a reference name used in Caller Reference */
    reference_name?:                  any;
    /** (Optional) The fully qualified domain name of the endpoint to be checked. If a value is set for `ip_address`, the value set for `fqdn` will be passed in the `Host` header. */
    fqdn?:                            any;
    /** (Optional) The IP address of the endpoint to be checked. */
    ip_address?:                      any;
    /** (Optional) The port of the endpoint to be checked. */
    port?:                            any;
    /** (Required) The protocol to use when performing health checks. Valid values are `HTTP`, `HTTPS`, `HTTP_STR_MATCH`, `HTTPS_STR_MATCH`, `TCP`, `CALCULATED`, `CLOUDWATCH_METRIC` and `RECOVERY_CONTROL`. */
    type:                             any;
    /** (Optional) The number of consecutive health checks that an endpoint must pass or fail. */
    failure_threshold?:               any;
    /** (Required) The number of seconds between the time that Amazon Route 53 gets a response from your endpoint and the time that it sends the next health-check request. */
    request_interval:                 any;
    /** (Optional) The path that you want Amazon Route 53 to request when performing health checks. */
    resource_path?:                   any;
    search_any?:                   string;
    /** (Optional) A Boolean value that indicates whether you want Route 53 to measure the latency between health checkers in multiple AWS regions and your endpoint and to display CloudWatch latency graphs in the Route 53 console. */
    measure_latency?:                 any;
    /** (Optional) A boolean value that indicates whether the status of health check should be inverted. For example, if a health check is healthy but Inverted is True , then Route 53 considers the health check to be unhealthy. */
    invert_healthcheck?:              any;
    /** (Optional) A boolean value that stops Route 53 from performing health checks. When set to true, Route 53 will do the following depending on the type of health check: */
    disabled?:                        any;
    /** (Optional) A boolean value that indicates whether Route53 should send the `fqdn` to the endpoint when performing the health check. This defaults to AWS' defaults: when the `type` is "HTTPS" `enable_sni` defaults to `true`, when `type` is anything else `enable_sni` defaults to `false`. */
    enable_sni?:                      any;
    /** (Optional) For a specified parent health check, a list of HealthCheckId values for the associated child health checks. */
    child_healthchecks?:              any;
    /** (Optional) The minimum number of child health checks that must be healthy for Route 53 to consider the parent health check to be healthy. Valid values are integers between 0 and 256, inclusive */
    child_health_threshold?:          any;
    /** (Optional) The name of the CloudWatch alarm. */
    cloudwatch_alarm_name?:           any;
    /** (Optional) The CloudWatchRegion that the CloudWatch alarm was created in. */
    cloudwatch_alarm_region?:         any;
    /** (Optional) The status of the health check when CloudWatch has insufficient data about the state of associated alarm. Valid values are `Healthy` , `Unhealthy` and `LastKnownStatus`. */
    insufficient_data_health_status?: any;
    /** (Optional) A list of AWS regions that you want Amazon Route 53 health checkers to check the specified endpoint from. */
    regions?:                         any;
    /** (Optional) The Amazon Resource Name (ARN) for the Route 53 Application Recovery Controller routing control. This is used when health check type is `RECOVERY_CONTROL` */
    routing_control_arn?:             any;
    /** (Optional) A map of tags to assign to the health check. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
}