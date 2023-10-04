export interface OrganizationsDelegatedAdministrator {
    resource: Resource[];
}

export interface Resource {
    organizations_delegated_administrator: OrganizationsDelegatedAdministratorClass;
}

export interface OrganizationsDelegatedAdministratorClass {
    /** (Required) The account ID number of the member account in the organization to register as a delegated administrator. */
    account_id:        any;
    /** (Required) The service principal of the AWS service for which you want to make the member account a delegated administrator. */
    service_principal: any;
}