export interface VpcEndpoint {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint: VpcEndpointClass;
}

export interface VpcEndpointClass {
    /** (Required) The service name. For AWS services the service name is usually in the form `com.amazonaws.<region>.<service>` (the SageMaker Notebook service is an exception to this rule, the service name is in the form `aws.sagemaker.<region>.notebook`). */
    service_name:         any;
    /** (Required) The ID of the VPC in which the endpoint will be used. */
    vpc_id:               any;
    /** (Optional) Accept the VPC endpoint (the VPC endpoint and service need to be in the same AWS account). */
    auto_accept?:         any;
    /** (Optional) A policy to attach to the endpoint that controls access to the service. This is a JSON formatted string. Defaults to full access. All `Gateway` and some `Interface` endpoints support policies - see the [relevant AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-access.html) for more details. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy?:              any;
    /** (Optional; AWS services and AWS Marketplace partner services only) Whether or not to associate a private hosted zone with the specified VPC. Applicable for endpoints of type `Interface`. */
    private_dns_enabled?: any;
    dns_options?:         DNSOptions;
    /** (Optional) The IP address type for the endpoint. Valid values are `ipv4`, `dualstack`, and `ipv6`. */
    ip_address_type?:     any;
    /** (Optional) One or more route table IDs. Applicable for endpoints of type `Gateway`. */
    route_table_ids?:     any;
    /** (Optional) The ID of one or more subnets in which to create a network interface for the endpoint. Applicable for endpoints of type `GatewayLoadBalancer` and `Interface`. */
    subnet_ids?:          any;
    /** (Optional) The ID of one or more security groups to associate with the network interface. Applicable for endpoints of type `Interface`. */
    security_group_ids?:  any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
    /** (Optional) The VPC endpoint type, `Gateway`, `GatewayLoadBalancer`, or `Interface`. Defaults to `Gateway`. */
    vpc_endpoint_type?:   any;
}

export interface DNSOptions {
    /** (Optional) The DNS records created for the endpoint. Valid values are `ipv4`, `dualstack`, `service-defined`, and `ipv6`. */
    dns_record_ip_type:                             any;
    /** (Optional) Indicates whether to enable private DNS only for inbound endpoints. This option is available only for services that support both gateway and interface endpoints. It routes traffic that originates from the VPC to the gateway endpoint and traffic that originates from on-premises to the interface endpoint. Default is `false`. Can only be specified if private_dns_enabled is `true`. */
    private_dns_only_for_inbound_resolver_endpoint: any;
}