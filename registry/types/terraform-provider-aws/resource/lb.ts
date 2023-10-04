export interface LB {
    resource: Resource[];
}

export interface Resource {
    lb: LBClass;
}

export interface LBClass {
    access_logs?:                                 AccessLogs;
    /** (Optional) The ID of the customer owned ipv4 pool to use for this load balancer. */
    customer_owned_ipv4_pool?:                    any;
    /** (Optional) Determines how the load balancer handles requests that might pose a security risk to an application due to HTTP desync. Valid values are `monitor`, `defensive` (default), `strictest`. */
    desync_mitigation_mode?:                      any;
    /** (Optional) Indicates whether HTTP headers with header fields that are not valid are removed by the load balancer (true) or routed to targets (false). The default is false. Elastic Load Balancing requires that message header names contain only alphanumeric characters and hyphens. Only valid for Load Balancers of type `application`. */
    drop_invalid_header_fields?:                  any;
    /** (Optional) If true, cross-zone load balancing of the load balancer will be enabled. For `network` and `gateway` type load balancers, this feature is disabled by default (`false`). For `application` load balancer this feature is always enabled (`true`) and cannot be disabled. Defaults to `false`. */
    enable_cross_zone_load_balancing?:            any;
    /** (Optional) If true, deletion of the load balancer will be disabled via the AWS API. This will prevent Terraform from deleting the load balancer. Defaults to `false`. */
    enable_deletion_protection?:                  any;
    /** (Optional) Indicates whether HTTP/2 is enabled in `application` load balancers. Defaults to `true`. */
    enable_http2?:                                any;
    /** (Optional) Indicates whether the two headers (`x-amzn-tls-version` and `x-amzn-tls-cipher-suite`), which contain information about the negotiated TLS version and cipher suite, are added to the client request before sending it to the target. Only valid for Load Balancers of type `application`. Defaults to `false` */
    enable_tls_version_and_cipher_suite_headers?: any;
    /** (Optional) Indicates whether the X-Forwarded-For header should preserve the source port that the client used to connect to the load balancer in `application` load balancers. Defaults to `false`. */
    enable_xff_client_port?:                      any;
    /** (Optional) Indicates whether to allow a WAF-enabled load balancer to route requests to targets if it is unable to forward the request to AWS WAF. Defaults to `false`. */
    enable_waf_fail_open?:                        any;
    /** (Optional) The time in seconds that the connection is allowed to be idle. Only valid for Load Balancers of type `application`. Default: 60. */
    idle_timeout?:                                any;
    /** (Optional) If true, the LB will be internal. Defaults to `false`. */
    internal?:                                    any;
    /** (Optional) The type of IP addresses used by the subnets for your load balancer. The possible values are `ipv4` and `dualstack`. */
    ip_address_type?:                             any;
    /** (Optional) The type of load balancer to create. Possible values are `application`, `gateway`, or `network`. The default value is `application`. */
    load_balancer_type?:                          any;
    /** (Optional) The name of the LB. This name must be unique within your AWS account, can have a maximum of 32 characters, */
    name?:                                        any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:                                 any;
    /** (Optional) A list of security group IDs to assign to the LB. Only valid for Load Balancers of type `application` or `network`. For load balancers of type `network` security groups cannot be added if none are currently present, and cannot all be removed once added. If either of these conditions are met, this will force a recreation of the resource. */
    security_groups?:                             any;
    /** (Optional) Indicates whether the Application Load Balancer should preserve the Host header in the HTTP request and send it to the target without any change. Defaults to `false`. */
    preserve_host_header?:                        any;
    subnet_mapping?:                              SubnetMapping;
    /** (Optional) A list of subnet IDs to attach to the LB. Subnets */
    subnets?:                                     any;
    /** (Optional) Determines how the load balancer modifies the `X-Forwarded-For` header in the HTTP request before sending the request to the target. The possible values are `append`, `preserve`, and `remove`. Only valid for Load Balancers of type `application`. The default is `append`. */
    xff_header_processing_mode?:                  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                        any;
}

export interface AccessLogs {
    /** (Required) The S3 bucket name to store the logs in. */
    bucket:  any;
    /** (Optional) Boolean to enable / disable `access_logs`. Defaults to `false`, even when `bucket` is specified. */
    enabled: any;
    /** (Optional) The S3 bucket prefix. Logs are stored in the root if not configured. */
    prefix:  any;
}

export interface SubnetMapping {
    /** (Required) ID of the subnet of which to attach to the load balancer. You can specify only one subnet per Availability Zone. */
    subnet_id:            any;
    /** (Optional) The allocation ID of the Elastic IP address for an internet-facing load balancer. */
    allocation_id:        any;
    /** (Optional) The IPv6 address. You associate IPv6 CIDR blocks with your VPC and choose the subnets where you launch both internet-facing and internal Application Load Balancers or Network Load Balancers. */
    ipv6_address:         any;
    /** (Optional) The private IPv4 address for an internal load balancer. */
    private_ipv4_address: any;
}