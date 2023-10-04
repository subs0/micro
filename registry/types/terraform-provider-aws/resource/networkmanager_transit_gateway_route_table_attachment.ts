export interface NetworkmanagerTransitGatewayRouteTableAttachment {
    resource: Resource[];
}

export interface Resource {
    networkmanager_transit_gateway_route_table_attachment: NetworkmanagerTransitGatewayRouteTableAttachmentClass;
}

export interface NetworkmanagerTransitGatewayRouteTableAttachmentClass {
    /** (Required) The ID of the peer for the attachment. */
    peering_id:                      any;
    /** (Optional) Key-value tags for the attachment. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
    /** (Required) The ARN of the transit gateway route table for the attachment. */
    transit_gateway_route_table_arn: any;
}