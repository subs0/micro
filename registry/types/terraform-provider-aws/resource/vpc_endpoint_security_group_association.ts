export interface VpcEndpointSecurityGroupAssociation {
    resource: Resource[];
}

export interface Resource {
    vpc_endpoint_security_group_association: VpcEndpointSecurityGroupAssociationClass;
}

export interface VpcEndpointSecurityGroupAssociationClass {
    /** (Required) The ID of the security group to be associated with the VPC endpoint. */
    security_group_id:            any;
    /** (Required) The ID of the VPC endpoint with which the security group will be associated. */
    vpc_endpoint_id:              any;
    /** (Optional) Whether this association should replace the association with the VPC's default security group that is created when no security groups are specified during VPC endpoint creation. At most 1 association per-VPC endpoint should be configured with `replace_default_association = true`. */
    replace_default_association?: any;
}