export interface VpcEndpointSubnetAssociation {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_subnet_association: VpcEndpointSubnetAssociationClass;
}

export interface VpcEndpointSubnetAssociationClass {
    /** (Required) The ID of the VPC endpoint with which the subnet will be associated. */
    vpc_endpoint_id: any;
    /** (Required) The ID of the subnet to be associated with the VPC endpoint. */
    subnet_id:       any;
}