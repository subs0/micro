export interface Apigatewayv2Stage {
    resource: Resource[];
}

export interface Resource {
    apigatewayv2_stage: Apigatewayv2StageClass;
}

export interface Apigatewayv2StageClass {
    /** (Required) API identifier. */
    api_id:                  any;
    /** (Required) Name of the stage. Must be between 1 and 128 characters in length. */
    name:                    any;
    access_log_settings?:    AccessLogSettings;
    /** (Optional) Whether updates to an API automatically trigger a new deployment. Defaults to `false`. Applicable for HTTP APIs. */
    auto_deploy?:            any;
    /** (Optional) Identifier of a client certificate for the stage. Use the [`aws_api_gateway_client_certificate`](/docs/providers/aws/r/api_gateway_client_certificate.html) resource to configure a client certificate. */
    client_certificate_id?:  any;
    default_route_settings?: RouteSettings;
    /** (Optional) Deployment identifier of the stage. Use the [`aws_apigatewayv2_deployment`](/docs/providers/aws/r/apigatewayv2_deployment.html) resource to configure a deployment. */
    deployment_id?:          any;
    /** (Optional) Description for the stage. Must be less than or equal to 1024 characters in length. */
    description?:            any;
    route_settings?:         RouteSettings;
    /** (Optional) Map that defines the stage variables for the stage. */
    stage_variables?:        any;
    /** (Optional) Map of tags to assign to the stage. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
}

export interface AccessLogSettings {
    /** (Required) ARN of the CloudWatch Logs log group to receive access logs. Any trailing `:*` is trimmed from the ARN. */
    destination_arn: any;
    /** (Required) Single line [format](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html#apigateway-cloudwatch-log-formats) of the access logs of data. Refer to log settings for [HTTP](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-logging-variables.html) or [Websocket](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-logging.html). */
    format:          any;
}

export interface RouteSettings {
    /** (Optional) Whether data trace logging is enabled for the route. Affects the log entries pushed to Amazon CloudWatch Logs. */
    data_trace_enabled:       any;
    /** (Optional) Whether detailed metrics are enabled for the route. Defaults to `false`. */
    detailed_metrics_enabled: any;
    /** (Optional) Logging level for the route. Affects the log entries pushed to Amazon CloudWatch Logs. */
    logging_level:            any;
    /** (Optional) Throttling burst limit for the route. */
    throttling_burst_limit:   any;
    /** (Optional) Throttling rate limit for the route. */
    throttling_rate_limit:    any;
    /** (Required) Route key. */
    route_key?:               any;
}