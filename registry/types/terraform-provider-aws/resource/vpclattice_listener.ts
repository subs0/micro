export interface VpclatticeListener {
    resource: Resource[];
}

export interface Resource {
    vpclattice_listener: VpclatticeListenerClass;
}

export interface VpclatticeListenerClass {
    /** (Required) Default action block for the default listener rule. Default action blocks are defined below. */
    default_action:          any;
    /** (Required, Forces new resource) Name of the listener. A listener name must be unique within a service. Valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen. */
    name?:                   any;
    /** (Optional, Forces new resource) Listener port. You can specify a value from 1 to 65535. If `port` is not specified and `protocol` is HTTP, the value will default to 80. If `port` is not specified and `protocol` is HTTPS, the value will default to 443. */
    port?:                   any;
    /** (Required, Forces new resource) Protocol for the listener. Supported values are `HTTP` or `HTTPS` */
    protocol?:               any;
    /** (Optional) Amazon Resource Name (ARN) of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments. */
    service_arn?:            any;
    /** (Optional) ID of the VPC Lattice service. You must include either the `service_arn` or `service_identifier` arguments. */
    service_identifier?:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    "fixed-response"?:       any;
    /** (Optional) Route requests to one or more target groups. See Forward blocks below. */
    forward?:                any;
    /** (Required) Custom HTTP status code to return, e.g. a 404 response code. See [Listeners](https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html) in the AWS documentation for a list of supported codes. */
    status_code:             any;
    /** (Required) One or more target group blocks. */
    target_groups:           any;
    /** (Required) ID or Amazon Resource Name (ARN) of the target group. */
    target_group_identifier: any;
    /** (Optional) Determines how requests are distributed to the target group. Only required if you specify multiple target groups for a forward action. For example, if you specify two target groups, one with a */
    weight?:                 any;
}