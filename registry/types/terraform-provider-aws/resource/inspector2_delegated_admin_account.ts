export interface Inspector2DelegatedAdminAccount {
    resource: Resource[];
}

export interface Resource {
    inspector2_delegated_admin_account: Inspector2DelegatedAdminAccountClass;
}

export interface Inspector2DelegatedAdminAccountClass {
    /** (Required) Account to enable as delegated admin account. */
    account_id: any;
}