export interface OrganizationsDelegatedAdministrators {
    data: Datum[];
}

export interface Datum {
    organizations_delegated_administrators: OrganizationsDelegatedAdministratorsClass;
}

export interface OrganizationsDelegatedAdministratorsClass {
    /** (Optional) Specifies a service principal name. If specified, then the operation lists the delegated administrators only for the specified service. If you don't specify a service principal, the operation lists all delegated administrators for all services in your organization. */
    service_principal?: any;
}