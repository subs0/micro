export interface VpcEndpointService {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_service: VpcEndpointServiceClass;
}

export interface VpcEndpointServiceClass {
    /** (Required) Whether or not VPC endpoint connection requests to the service must be accepted by the service owner - `true` or `false`. */
    acceptance_required:         any;
    /** (Optional) The ARNs of one or more principals allowed to discover the endpoint service. */
    allowed_principals?:         any;
    /** (Optional) Amazon Resource Names (ARNs) of one or more Gateway Load Balancers for the endpoint service. */
    gateway_load_balancer_arns?: any;
    /** (Optional) Amazon Resource Names (ARNs) of one or more Network Load Balancers for the endpoint service. */
    network_load_balancer_arns?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                       any;
    /** (Optional) The private DNS name for the service. */
    private_dns_name?:           any;
    /** (Optional) The supported IP address types. The possible values are `ipv4` and `ipv6`. */
    supported_ip_address_types?: any;
}