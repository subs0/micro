export interface SecurityGroups {
    data: Datum[];
}

export interface Datum {
    security_groups: SecurityGroupsClass;
}

export interface SecurityGroupsClass {
    /** (Optional) Map of tags, each pair of which must exactly match for desired security groups. */
    tags?:   any;
    /** (Optional) One or more name/value pairs to use as filters. There are several valid keys, for a full reference, check out [describe-security-groups in the AWS CLI reference][1]. */
    filter?: any;
}