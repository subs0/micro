export interface OrganizationsPolicies {
    data: Datum[];
}

export interface Datum {
    organizations_policies: OrganizationsPoliciesClass;
}

export interface OrganizationsPoliciesClass {
    /** (Required) The type of policies to be returned in the response. Valid values are `SERVICE_CONTROL_POLICY | TAG_POLICY | BACKUP_POLICY | AISERVICES_OPT_OUT_POLICY` */
    filter: any;
}