export interface Macie2OrganizationAdminAccount {
    resource: Resource[];
}

export interface Resource {
    macie2_organization_admin_account: Macie2OrganizationAdminAccountClass;
}

export interface Macie2OrganizationAdminAccountClass {
    /** (Required) The AWS account ID for the account to designate as the delegated Amazon Macie administrator account for the organization. */
    admin_account_id: any;
}