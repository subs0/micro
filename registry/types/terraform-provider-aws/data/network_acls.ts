export interface NetworkAcls {
    data: Datum[];
}

export interface Datum {
    network_acls: NetworkAclsClass;
}

export interface NetworkAclsClass {
    /** (Optional) VPC ID that you want to filter from. */
    vpc_id?: any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}