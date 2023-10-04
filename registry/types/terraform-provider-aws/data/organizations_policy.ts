export interface OrganizationsPolicy {
    data: Datum[];
}

export interface Datum {
    organizations_policy: OrganizationsPolicyClass;
}

export interface OrganizationsPolicyClass {
    /** (Required) The unique identifier (ID) of the policy that you want more details on. Policy id starts with a "p-" followed by 8-28 lowercase or uppercase letters, digits, and underscores. */
    policy_id: any;
}