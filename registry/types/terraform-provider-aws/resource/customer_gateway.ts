export interface CustomerGateway {
    resource: Resource[];
}

export interface Resource {
    customer_gateway: CustomerGatewayClass;
}

export interface CustomerGatewayClass {
    /** (Required) The gateway's Border Gateway Protocol (BGP) Autonomous System Number (ASN). */
    bgp_asn:          any;
    /** (Optional) The Amazon Resource Name (ARN) for the customer gateway certificate. */
    certificate_arn?: any;
    /** (Optional) A name for the customer gateway device. */
    device_name?:     any;
    /** (Optional) The IPv4 address for the customer gateway device's outside interface. */
    ip_address?:      any;
    /** (Required) The type of customer gateway. The only type AWS */
    type:             any;
    /** (Optional) Tags to apply to the gateway. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
}