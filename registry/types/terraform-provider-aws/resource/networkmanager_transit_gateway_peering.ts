export interface NetworkmanagerTransitGatewayPeering {
    resource: Resource[];
}

export interface Resource {
    networkmanager_transit_gateway_peering: NetworkmanagerTransitGatewayPeeringClass;
}

export interface NetworkmanagerTransitGatewayPeeringClass {
    /** (Required) The ID of a core network. */
    core_network_id:     any;
    /** (Optional) Key-value tags for the peering. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Required) The ARN of the transit gateway for the peering request. */
    transit_gateway_arn: any;
}