export interface GlobalacceleratorCustomRoutingAccelerator {
    resource: Resource[];
}

export interface Resource {
    globalaccelerator_custom_routing_accelerator: GlobalacceleratorCustomRoutingAcceleratorClass;
}

export interface GlobalacceleratorCustomRoutingAcceleratorClass {
    /** (Required) The name of a custom routing accelerator. */
    name:                 any;
    /** (Optional) The IP address type that an accelerator supports. For a custom routing accelerator, the value must be `"IPV4"`. */
    ip_address_type?:     any;
    /** (Optional) The IP addresses to use for BYOIP accelerators. If not specified, the service assigns IP addresses. Valid values: 1 or 2 IPv4 addresses. */
    ip_addresses?:        any;
    /** (Optional) Indicates whether the accelerator is enabled. Defaults to `true`. Valid values: `true`, `false`. */
    enabled?:             any;
    /** (Optional) The attributes of the accelerator. Fields documented below. */
    attributes?:          any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Optional) Indicates whether flow logs are enabled. Defaults to `false`. Valid values: `true`, `false`. */
    flow_logs_enabled?:   any;
    /** (Optional) The name of the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`. */
    flow_logs_s3_bucket?: any;
    /** (Optional) The prefix for the location in the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`. */
    flow_logs_s3_prefix?: any;
}