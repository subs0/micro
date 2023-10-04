export interface OrganizationsPoliciesForTarget {
    data: Datum[];
}

export interface Datum {
    organizations_policies_for_target: OrganizationsPoliciesForTargetClass;
}

export interface OrganizationsPoliciesForTargetClass {
    /** (Required) The root (string that begins with "r-" followed by 4-32 lowercase letters or digits), account (12 digit string), or Organizational Unit (string starting with "ou-" followed by 4-32 lowercase letters or digits. This string is followed by a second "-" dash and from 8-32 additional lowercase letters or digits.) */
    target_id: any;
    /** (Required) Must supply one of the 4 different policy filters for a target (SERVICE_CONTROL_POLICY | TAG_POLICY | BACKUP_POLICY | AISERVICES_OPT_OUT_POLICY) */
    filter:    any;
}