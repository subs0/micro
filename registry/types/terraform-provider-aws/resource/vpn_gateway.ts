export interface VPNGateway {
    resource: Resource[];
}

export interface Resource {
    vpn_gateway: VPNGatewayClass;
}

export interface VPNGatewayClass {
    /** (Optional) The VPC ID to create in. */
    vpc_id?:            any;
    /** (Optional) The Availability Zone for the virtual private gateway. */
    availability_zone?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
    /** (Optional) The Autonomous System Number (ASN) for the Amazon side of the gateway. If you don't specify an ASN, the virtual private gateway is created with the default ASN. */
    amazon_side_asn?:   any;
}