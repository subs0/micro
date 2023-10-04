export interface SecurityhubOrganizationAdminAccount {
    resource: Resource[];
}

export interface Resource {
    securityhub_organization_admin_account: SecurityhubOrganizationAdminAccountClass;
}

export interface SecurityhubOrganizationAdminAccountClass {
    /** (Required) The AWS account identifier of the account to designate as the Security Hub administrator account. */
    admin_account_id: any;
}