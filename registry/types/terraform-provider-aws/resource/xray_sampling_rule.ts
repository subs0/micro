export interface XraySamplingRule {
    resource: Resource[];
}

export interface Resource {
    xray_sampling_rule: XraySamplingRuleClass;
}

export interface XraySamplingRuleClass {
    /** (Required) The name of the sampling rule. */
    rule_name:      any;
    /** (Required) Matches the ARN of the AWS resource on which the service runs. */
    resource_arn:   any;
    /** (Required) The priority of the sampling rule. */
    priority:       any;
    /** (Required) The percentage of matching requests to instrument, after the reservoir is exhausted. */
    fixed_rate:     any;
    /** (Required) A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively. */
    reservoir_size: any;
    /** (Required) Matches the `name` that the service uses to identify itself in segments. */
    service_name:   any;
    /** (Required) Matches the `origin` that the service uses to identify its type in segments. */
    service_type:   any;
    /** (Required) Matches the hostname from a request URL. */
    host:           any;
    /** (Required) Matches the HTTP method of a request. */
    http_method:    any;
    /** (Required) Matches the path from a request URL. */
    url_path:       any;
    /** (Required) The version of the sampling rule format (`1` ) */
    version:        any;
    /** (Optional) Matches attributes derived from the request. */
    attributes?:    any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}