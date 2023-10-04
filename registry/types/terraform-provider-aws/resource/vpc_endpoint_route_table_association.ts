export interface VpcEndpointRouteTableAssociation {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_route_table_association: VpcEndpointRouteTableAssociationClass;
}

export interface VpcEndpointRouteTableAssociationClass {
    /** (Required) Identifier of the EC2 Route Table to be associated with the VPC Endpoint. */
    route_table_id:  any;
    /** (Required) Identifier of the VPC Endpoint with which the EC2 Route Table will be associated. */
    vpc_endpoint_id: any;
}