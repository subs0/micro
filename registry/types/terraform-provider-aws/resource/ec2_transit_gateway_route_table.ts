export interface Ec2TransitGatewayRouteTable {
    resource: Resource[];
}

export interface Resource {
    ec2_transit_gateway_route_table: Ec2TransitGatewayRouteTableClass;
}

export interface Ec2TransitGatewayRouteTableClass {
    /** (Required) Identifier of EC2 Transit Gateway. */
    transit_gateway_id: any;
    /** (Optional) Key-value tags for the EC2 Transit Gateway Route Table. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:              any;
}