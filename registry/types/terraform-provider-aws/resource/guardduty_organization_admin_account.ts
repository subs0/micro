export interface GuarddutyOrganizationAdminAccount {
    resource: Resource[];
}

export interface Resource {
    guardduty_organization_admin_account: GuarddutyOrganizationAdminAccountClass;
}

export interface GuarddutyOrganizationAdminAccountClass {
    /** (Required) AWS account identifier to designate as a delegated administrator for GuardDuty. */
    admin_account_id: any;
}