export interface VpcIPAMOrganizationAdminAccount {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_organization_admin_account: VpcIPAMOrganizationAdminAccountClass;
}

export interface VpcIPAMOrganizationAdminAccountClass {
    /** (Required) */
    delegated_admin_account_id?: any;
}