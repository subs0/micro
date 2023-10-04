export interface ServicecatalogOrganizationsAccess {
    resource: Resource[];
}

export interface Resource {
    servicecatalog_organizations_access: ServicecatalogOrganizationsAccessClass;
}

export interface ServicecatalogOrganizationsAccessClass {
    /** (Required) Whether to enable AWS Organizations access. */
    enabled: any;
}