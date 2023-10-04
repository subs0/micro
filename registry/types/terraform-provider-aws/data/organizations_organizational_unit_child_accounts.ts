export interface OrganizationsOrganizationalUnitChildAccounts {
    data: Datum[];
}

export interface Datum {
    organizations_organizational_unit_child_accounts: OrganizationsOrganizationalUnitChildAccountsClass;
}

export interface OrganizationsOrganizationalUnitChildAccountsClass {
    /** (Required) The parent ID of the accounts. */
    parent_id: any;
}