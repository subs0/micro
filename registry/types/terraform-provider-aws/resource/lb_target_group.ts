export interface LBTargetGroup {
    resource: Resource[];
}

export interface Resource {
    lb_target_group: LBTargetGroupClass;
}

export interface LBTargetGroupClass {
    /** (Optional) Whether to terminate connections at the end of the deregistration timeout on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#deregistration-delay) for more information. Default is `false`. */
    connection_termination?:             any;
    /** (Optional) Amount time for Elastic Load Balancing to wait before changing the state of a deregistering target from draining to unused. The range is 0-3600 seconds. The default value is 300 seconds. */
    deregistration_delay?:               any;
    health_check?:                       HealthCheck;
    /** (Optional) Whether the request and response headers exchanged between the load balancer and the Lambda function include arrays of values or strings. Only applies when `target_type` is `lambda`. Default is `false`. */
    lambda_multi_value_headers_enabled?: any;
    /** (Optional) Determines how the load balancer selects targets when routing requests. Only applicable for Application Load Balancer Target Groups. The value is `round_robin` or `least_outstanding_requests`. The default is `round_robin`. */
    load_balancing_algorithm_type?:      any;
    /** (Optional) Indicates whether cross zone load balancing is enabled. The value is `"true"`, `"false"` or `"use_load_balancer_configuration"`. The default is `"use_load_balancer_configuration"`. */
    load_balancing_cross_zone_enabled?:  any;
    /** (Optional, Forces new resource) Creates a unique name beginning with the specified prefix. Conflicts with `name`. Cannot be longer than 6 characters. */
    name_prefix?:                        any;
    /** (Optional, Forces new resource) Name of the target group. If omitted, Terraform will assign a random, unique name. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, and must not begin or end with a hyphen. */
    name?:                               any;
    /** (Optional) Whether client IP preservation is enabled. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#client-ip-preservation) for more information. */
    preserve_client_ip?:                 any;
    /** (Optional, Forces new resource) Only applicable when `protocol` is `HTTP` or `HTTPS`. The protocol version. Specify `GRPC` to send requests to targets using gRPC. Specify `HTTP2` to send requests to targets using HTTP/2. The default is `HTTP1`, which sends requests to targets using HTTP/1.1 */
    protocol_version?:                   any;
    /** (Optional) Whether to enable support for proxy protocol v2 on Network Load Balancers. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#proxy-protocol) for more information. Default is `false`. */
    proxy_protocol_v2?:                  any;
    /** (Optional) Amount time for targets to warm up before the load balancer sends them a full share of requests. The range is 30-900 seconds or 0 to disable. The default value is 0 seconds. */
    slow_start?:                         any;
    stickiness?:                         Stickiness;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    target_failover?:                    TargetFailover;
    /** (May be required, Forces new resource) Type of target that you must specify when registering targets with this target group. See [doc](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_CreateTargetGroup.html) for supported values. The default is `instance`. */
    target_type?:                        any;
    /** (Optional, Forces new resource) Identifier of the VPC in which to create the target group. Required when `target_type` is `instance`, `ip` or `alb`. Does not apply when `target_type` is `lambda`. */
    vpc_id?:                             any;
}

export interface HealthCheck {
    /** (Optional) Boolean to enable / disable `stickiness`. Default is `true`. */
    enabled:             any;
    /** (Optional)  Number of consecutive health check successes required before considering a target healthy. The range is 2-10. Defaults to 3. */
    healthy_threshold:   any;
    /** (Optional) Approximate amount of time, in seconds, between health checks of an individual target. The range is 5-300. For `lambda` target groups, it needs to be greater than the timeout of the underlying `lambda`. Defaults to 30. */
    interval:            any;
    /** (May be required) Destination for the health check request. Required for HTTP/HTTPS ALB and HTTP NLB. Only applies to HTTP/HTTPS. */
    path:                any;
    /** (Optional) The port the load balancer uses when performing health checks on targets. Default is traffic-port. */
    port:                any;
    /** (Optional) Protocol the load balancer uses when performing health checks on targets. Must be either `TCP`, `HTTP`, or `HTTPS`. The TCP protocol is not supported for health checks if the protocol of the target group is HTTP or HTTPS. Defaults to HTTP. */
    protocol:            any;
    /** (optional) Amount of time, in seconds, during which no response from a target means a failed health check. The range is 2–120 seconds. For target groups with a protocol of HTTP, the default is 6 seconds. For target groups with a protocol of TCP, TLS or HTTPS, the default is 10 seconds. For target groups with a protocol of GENEVE, the default is 5 seconds. If the target type is lambda, the default is 30 seconds. */
    timeout:             any;
    /** (Optional) Number of consecutive health check failures required before considering a target unhealthy. The range is 2-10. Defaults to 3. */
    unhealthy_threshold: any;
}

export interface Stickiness {
    /** (Optional) Only used when the type is `lb_cookie`. The time period, in seconds, during which requests from a client should be routed to the same target. After this time period expires, the load balancer-generated cookie is considered stale. The range is 1 second to 1 week (604800 seconds). The default value is 1 day (86400 seconds). */
    cookie_duration: any;
    /** (Optional) Name of the application based cookie. AWSALB, AWSALBAPP, and AWSALBTG prefixes are reserved and cannot be used. Only needed when type is `app_cookie`. */
    cookie_name:     any;
    /** (Optional) Boolean to enable / disable `stickiness`. Default is `true`. */
    enabled:         any;
    /** (Required) The type of sticky sessions. The only current possible values are `lb_cookie`, `app_cookie` for ALBs, `source_ip` for NLBs, and `source_ip_dest_ip`, `source_ip_dest_ip_proto` for GWLBs. */
    type:            any;
}

export interface TargetFailover {
    /** (Optional) Indicates how the GWLB handles existing flows when a target is deregistered. Possible values are `rebalance` and `no_rebalance`. Must match the attribute value set for `on_unhealthy`. Default: `no_rebalance`. */
    on_deregistration: any;
    /** Indicates how the GWLB handles existing flows when a target is unhealthy. Possible values are `rebalance` and `no_rebalance`. Must match the attribute value set for `on_deregistration`. Default: `no_rebalance`. */
    on_unhealthy:      any;
}