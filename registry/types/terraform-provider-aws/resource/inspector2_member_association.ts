export interface Inspector2MemberAssociation {
    resource: Resource[];
}

export interface Resource {
    inspector2_member_association: Inspector2MemberAssociationClass;
}

export interface Inspector2MemberAssociationClass {
    /** (Required) ID of the account to associate */
    account_id: any;
}