export interface Ec2TransitGatewayPeeringAttachmentAccepter {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_peering_attachment_accepter: Ec2TransitGatewayPeeringAttachmentAccepterClass;
}

export interface Ec2TransitGatewayPeeringAttachmentAccepterClass {
    /** (Required) The ID of the EC2 Transit Gateway Peering Attachment to manage. */
    transit_gateway_attachment_id: any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway Peering Attachment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                         any;
}