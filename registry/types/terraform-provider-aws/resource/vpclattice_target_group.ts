export interface VpclatticeTargetGroup {
    resource: Resource[];
}

export interface Resource {
    vpclattice_target_group: VpclatticeTargetGroupClass;
}

export interface VpclatticeTargetGroupClass {
    /** (Required) The name of the target group. The name must be unique within the account. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen. */
    name:                           any;
    /** (Required) The type of target group. Valid Values are `IP` | `LAMBDA` | `INSTANCE` | `ALB` */
    type:                           any;
    /** (Optional) The target group configuration. If type is set to `LAMBDA,` this parameter should not be specified. */
    config?:                        any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Optional) The health check configuration. */
    health_check?:                  any;
    /** (Optional) The type of IP address used for the target group. Valid values: `IPV4` | `IPV6` */
    ip_address_type?:               any;
    /** (Required) The port on which the targets are listening. */
    port:                           any;
    /** (Required) The protocol to use for routing traffic to the targets. Valid Values are `HTTP` | `HTTPS` */
    protocol:                       any;
    /** (Optional) The protocol version used when performing health checks on targets. The possible protocol versions are `HTTP1` and `HTTP2`. The default is `HTTP1`. */
    protocol_version?:              any;
    /** (Required) The ID of the VPC. */
    vpc_identifier:                 any;
    /** (Optional) Indicates whether health checking is enabled. Defaults to `true`. */
    enabled?:                       any;
    /** (Optional) The approximate amount of time, in seconds, between health checks of an individual target. The range is 5–300 seconds. The default is 30 seconds. */
    health_check_interval_seconds?: any;
    /** (Optional) The amount of time, in seconds, to wait before reporting a target as unhealthy. The range is 1–120 seconds. The default is 5 seconds. */
    health_check_timeout_seconds?:  any;
    "healthy_threshold_count "?:    any;
    /** (Optional) The codes to use when checking for a successful response from a target. These are called _Success codes_ in the console. */
    matcher?:                       any;
    /** (Optional) The HTTP codes to use when checking for a successful response from a target. */
    value?:                         any;
    /** (Optional) The destination for health checks on the targets. If the protocol version is HTTP/1.1 or HTTP/2, specify a valid URI (for example, /path?query). The default path is `/`. Health checks are not supported if the protocol version is gRPC, however, you can choose HTTP/1.1 or HTTP/2 and specify a valid URI. */
    path?:                          any;
    /** (Optional) The number of consecutive failed health checks required before considering a target unhealthy. The range is 2–10. The default is 2. */
    unhealthy_threshold_count?:     any;
}