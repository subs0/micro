export interface Wafv2WebACLLoggingConfiguration {
    resource: Resource[];
}

export interface Resource {
    wafv2_web_acl_logging_configuration: Wafv2WebACLLoggingConfigurationClass;
}

export interface Wafv2WebACLLoggingConfigurationClass {
    /** (Required) Configuration block that allows you to associate Amazon Kinesis Data Firehose, Cloudwatch Log log group, or S3 bucket Amazon Resource Names (ARNs) with the web ACL. **Note:** data firehose, log group, or bucket name **must** be prefixed with `aws-waf-logs-`, e.g. `aws-waf-logs-example-firehose`, `aws-waf-logs-example-log-group`, or `aws-waf-logs-example-bucket`. */
    log_destination_configs: any;
    /** (Optional) Configuration block that specifies which web requests are kept in the logs and which are dropped. It allows filtering based on the rule action and the web request labels applied by matching rules during web ACL evaluation. For more details, refer to the [Logging Filter](#logging-filter) section below. */
    logging_filter?:         any;
    /** (Optional) Configuration for parts of the request that you want to keep out of the logs. Up to 100 `redacted_fields` blocks are supported. See [Redacted Fields](#redacted-fields) below for more details. */
    redacted_fields?:        any;
    /** (Required) Amazon Resource Name (ARN) of the web ACL that you want to associate with `log_destination_configs`. */
    resource_arn:            any;
    /** (Required) Default handling for logs that don't match any of the specified filtering conditions. Valid values for `default_behavior` are `KEEP` or `DROP`. */
    default_behavior:        any;
    /** (Required) Filter(s) that you want to apply to the logs. See [Filter](#filter) below for more details. */
    filter:                  any;
    /** (Required) Parameter that determines how to handle logs that meet the conditions and requirements of the filter. The valid values for `behavior` are `KEEP` or `DROP`. */
    behavior:                any;
    /** (Required) Match condition(s) for the filter. See [Condition](#condition) below for more details. */
    condition:               any;
    /** (Required) Logic to apply to the filtering conditions. You can specify that a log must match all conditions or at least one condition in order to satisfy the filter. Valid values for `requirement` are `MEETS_ALL` or `MEETS_ANY`. */
    requirement:             any;
    /** (Optional) Configuration for a single action condition. See [Action Condition](#action-condition) below for more details. */
    action_condition?:       any;
    /** (Optional) Condition for a single label name. See [Label Name Condition](#label-name-condition) below for more details. */
    label_name_condition?:   any;
    /** (Required) Action setting that a log record must contain in order to meet the condition. Valid values for `action` are `ALLOW`, `BLOCK`, and `COUNT`. */
    action:                  any;
    /** (Required) Name of the label that a log record must contain in order to meet the condition. It must be a fully qualified label name, which includes a prefix, optional namespaces, and the label name itself. The prefix identifies the rule group or web ACL context of the rule that added the label. */
    label_name:              any;
    /** (Optional) HTTP method to be redacted. It must be specified as an empty configuration block `{}`. The method indicates the type of operation that the request is asking the origin to perform. */
    method?:                 any;
    query_any?:           string;
    /** (Optional) "single_header" refers to the redaction of a single header. For more information, please see the details below under [Single Header](#single-header). */
    single_header?:          any;
    /** (Optional) Configuration block that redacts the request URI path. It should be specified as an empty configuration block `{}`. The URI path is the part of a web request that identifies a resource, such as `/images/daily-ad.jpg`. */
    uri_path?:               any;
    /** (Optional) Name of the query header to redact. This setting must be provided in lowercase characters. */
    name?:                   any;
}