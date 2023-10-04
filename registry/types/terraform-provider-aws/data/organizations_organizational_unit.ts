export interface OrganizationsOrganizationalUnit {
    data: Datum[];
}

export interface Datum {
    organizations_organizational_unit: OrganizationsOrganizationalUnitClass;
}

export interface OrganizationsOrganizationalUnitClass {
    /** (Required) Parent ID of the organizational unit. */
    parent_id: any;
    /** (Required) Name of the organizational unit */
    name:      any;
}