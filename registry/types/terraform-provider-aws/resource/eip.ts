export interface Eip {
    resource: Resource[];
}

export interface Resource {
    eip: EipClass;
}

export interface EipClass {
    /** (Optional) IP address from an EC2 BYOIP pool. This option is only available for VPC EIPs. */
    address?:                   any;
    /** (Optional) User-specified primary or secondary private IP address to associate with the Elastic IP address. If no private IP address is specified, the Elastic IP address is associated with the primary private IP address. */
    associate_with_private_ip?: any;
    /** (Optional) ID  of a customer-owned address pool. For more on customer owned IP addressed check out [Customer-owned IP addresses guide](https://docs.aws.amazon.com/outposts/latest/userguide/outposts-networking-components.html#ip-addressing). */
    customer_owned_ipv4_pool?:  any;
    /** Indicates if this EIP is for use in VPC (`vpc`). */
    domain?:                    any;
    /** (Optional) EC2 instance ID. */
    instance?:                  any;
    /** (Optional) Location from which the IP address is advertised. Use this parameter to limit the address to this location. */
    network_border_group?:      any;
    /** (Optional) Network interface ID to associate with. */
    network_interface?:         any;
    /** (Optional) EC2 IPv4 address pool identifier or `amazon`. */
    public_ipv4_pool?:          any;
    /** (Optional) Map of tags to assign to the resource. Tags can only be applied to EIPs in a VPC. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
    /** (Optional **Deprecated**) Boolean if the EIP is in a VPC or not. Use `domain` instead. */
    vpc?:                       any;
}