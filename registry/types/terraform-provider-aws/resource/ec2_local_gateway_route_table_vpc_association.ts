export interface Ec2LocalGatewayRouteTableVpcAssociation {
    resource: Resource[];
}

export interface Resource {
    ec2_local_gateway_route_table_vpc_association: Ec2LocalGatewayRouteTableVpcAssociationClass;
}

export interface Ec2LocalGatewayRouteTableVpcAssociationClass {
    /** (Required) Identifier of EC2 Local Gateway Route Table. */
    local_gateway_route_table_id: any;
    /** (Required) Identifier of EC2 VPC. */
    vpc_id:                       any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
}