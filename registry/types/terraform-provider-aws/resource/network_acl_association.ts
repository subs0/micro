export interface NetworkACLAssociation {
    resource: Resource[];
}

export interface Resource {
    network_acl_association: NetworkACLAssociationClass;
}

export interface NetworkACLAssociationClass {
    /** (Required) The ID of the network ACL. */
    network_acl_id: any;
    /** (Required) The ID of the associated Subnet. */
    subnet_id:      any;
}