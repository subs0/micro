export interface APIGatewayStage {
    resource: Resource[];
}

export interface Resource {
    api_gateway_stage: APIGatewayStageClass;
}

export interface APIGatewayStageClass {
    /** (Required) ID of the associated REST API */
    rest_api_id:               any;
    /** (Required) Name of the stage */
    stage_name:                any;
    /** (Required) ID of the deployment that the stage points to */
    deployment_id:             any;
    /** (Optional) Enables access logs for the API stage. See [Access Log Settings](#access-log-settings) below. */
    access_log_settings?:      any;
    /** (Optional) Whether a cache cluster is enabled for the stage */
    cache_cluster_enabled?:    any;
    /** (Optional) Size of the cache cluster for the stage, if enabled. Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`. */
    cache_cluster_size?:       any;
    /** (Optional) Configuration settings of a canary deployment. See [Canary Settings](#canary-settings) below. */
    canary_settings?:          any;
    /** (Optional) Identifier of a client certificate for the stage. */
    client_certificate_id?:    any;
    /** (Optional) Description of the stage. */
    description?:              any;
    /** (Optional) Version of the associated API documentation */
    documentation_version?:    any;
    /** (Optional) Map that defines the stage variables */
    variables?:                any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Optional) Whether active tracing with X-ray is enabled. Defaults to `false`. */
    xray_tracing_enabled?:     any;
    /** (Required) ARN of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with `amazon-apigateway-`. Automatically removes trailing `:*` if present. */
    destination_arn:           any;
    /** (Required) Formatting and values recorded in the logs. */
    format:                    any;
    /** (Optional) Percent `0.0` - `100.0` of traffic to divert to the canary deployment. */
    percent_traffic?:          any;
    /** (Optional) Map of overridden stage `variables` (including new variables) for the canary deployment. */
    stage_variable_overrides?: any;
    /** (Optional) Whether the canary deployment uses the stage cache. Defaults to false. */
    use_stage_cache?:          any;
}