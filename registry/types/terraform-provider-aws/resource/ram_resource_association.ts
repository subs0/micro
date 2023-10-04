export interface RAMResourceAssociation {
    resource: Resource[];
}

export interface Resource {
    ram_resource_association: RAMResourceAssociationClass;
}

export interface RAMResourceAssociationClass {
    /** (Required) Amazon Resource Name (ARN) of the resource to associate with the RAM Resource Share. */
    resource_arn:       any;
    /** (Required) Amazon Resource Name (ARN) of the RAM Resource Share. */
    resource_share_arn: any;
}