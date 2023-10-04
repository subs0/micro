export interface Ec2TransitGatewayVpcAttachment {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_vpc_attachment: Ec2TransitGatewayVpcAttachmentClass;
}

export interface Ec2TransitGatewayVpcAttachmentClass {
    /** (Required) Identifiers of EC2 Subnets. */
    subnet_ids:                                       any;
    /** (Required) Identifier of EC2 Transit Gateway. */
    transit_gateway_id:                               any;
    /** (Required) Identifier of EC2 VPC. */
    vpc_id:                                           any;
    /** (Optional) Whether Appliance Mode support is enabled. If enabled, a traffic flow between a source and destination uses the same Availability Zone for the VPC attachment for the lifetime of that flow. Valid values: `disable`, `enable`. Default value: `disable`. */
    appliance_mode_support?:                          any;
    /** (Optional) Whether DNS support is enabled. Valid values: `disable`, `enable`. Default value: `enable`. */
    dns_support?:                                     any;
    /** (Optional) Whether IPv6 support is enabled. Valid values: `disable`, `enable`. Default value: `disable`. */
    ipv6_support?:                                    any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                            any;
    /** (Optional) Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`. */
    transit_gateway_default_route_table_association?: any;
    /** (Optional) Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. This cannot be configured or perform drift detection with Resource Access Manager shared EC2 Transit Gateways. Default value: `true`. */
    transit_gateway_default_route_table_propagation?: any;
}