export interface OrganizationsDelegatedServices {
    data: Datum[];
}

export interface Datum {
    organizations_delegated_services: OrganizationsDelegatedServicesClass;
}

export interface OrganizationsDelegatedServicesClass {
    /** (Required) Account ID number of a delegated administrator account in the organization. */
    account_id: any;
}