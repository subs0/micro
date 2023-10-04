export interface IdentitystoreGroup {
    resource: Resource[];
}

export interface Resource {
    identitystore_group: IdentitystoreGroupClass;
}

export interface IdentitystoreGroupClass {
    /** (Required) The globally unique identifier for the identity store. */
    identity_store_id: any;
    /** (Optional) A string containing the name of the group. This value is commonly displayed when the group is referenced. */
    display_name?:     any;
    /** (Optional) A string containing the description of the group. */
    description?:      any;
}