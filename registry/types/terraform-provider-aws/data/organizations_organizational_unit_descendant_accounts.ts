export interface OrganizationsOrganizationalUnitDescendantAccounts {
    data: Datum[];
}

export interface Datum {
    organizations_organizational_unit_descendant_accounts: OrganizationsOrganizationalUnitDescendantAccountsClass;
}

export interface OrganizationsOrganizationalUnitDescendantAccountsClass {
    /** (Required) The parent ID of the accounts. */
    parent_id: any;
}