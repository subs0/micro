export interface Ec2TransitGatewayVpcAttachmentAccepter {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_vpc_attachment_accepter: Ec2TransitGatewayVpcAttachmentAccepterClass;
}

export interface Ec2TransitGatewayVpcAttachmentAccepterClass {
    /** (Required) The ID of the EC2 Transit Gateway Attachment to manage. */
    transit_gateway_attachment_id:                    any;
    /** (Optional) Boolean whether the VPC Attachment should be associated with the EC2 Transit Gateway association default route table. Default value: `true`. */
    transit_gateway_default_route_table_association?: any;
    /** (Optional) Boolean whether the VPC Attachment should propagate routes with the EC2 Transit Gateway propagation default route table. Default value: `true`. */
    transit_gateway_default_route_table_propagation?: any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway VPC Attachment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                            any;
}