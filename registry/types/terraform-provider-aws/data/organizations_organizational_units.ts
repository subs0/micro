export interface OrganizationsOrganizationalUnits {
    data: Datum[];
}

export interface Datum {
    organizations_organizational_units: OrganizationsOrganizationalUnitsClass;
}

export interface OrganizationsOrganizationalUnitsClass {
    /** (Required) Parent ID of the organizational unit. */
    parent_id: any;
}