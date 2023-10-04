export interface RAMPrincipalAssociation {
    resource: Resource[];
}

export interface Resource {
    ram_principal_association: RAMPrincipalAssociationClass;
}

export interface RAMPrincipalAssociationClass {
    /** (Required) The principal to associate with the resource share. Possible values are an AWS account ID, an AWS Organizations Organization ARN, or an AWS Organizations Organization Unit ARN. */
    principal:          any;
    /** (Required) The Amazon Resource Name (ARN) of the resource share. */
    resource_share_arn: any;
}