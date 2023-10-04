export interface IdentitystoreGroupMembership {
    resource: Resource[];
}

export interface Resource {
    identitystore_group_membership: IdentitystoreGroupMembershipClass;
}

export interface IdentitystoreGroupMembershipClass {
    /** (Required) The identifier for a user in the Identity Store. */
    member_id:         any;
    /** (Required)  The identifier for a group in the Identity Store. */
    group_id:          any;
    /** (Required) Identity Store ID associated with the Single Sign-On Instance. */
    identity_store_id: any;
}