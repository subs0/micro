export interface Ec2TransitGatewayPeeringAttachment {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_peering_attachment: Ec2TransitGatewayPeeringAttachmentClass;
}

export interface Ec2TransitGatewayPeeringAttachmentClass {
    /** (Optional) Account ID of EC2 Transit Gateway to peer with. Defaults to the account ID the [AWS provider][1] is currently connected to. */
    peer_account_id?:        any;
    /** (Required) Region of EC2 Transit Gateway to peer with. */
    peer_region:             any;
    /** (Required) Identifier of EC2 Transit Gateway to peer with. */
    peer_transit_gateway_id: any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway Peering Attachment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Required) Identifier of EC2 Transit Gateway. */
    transit_gateway_id:      any;
}