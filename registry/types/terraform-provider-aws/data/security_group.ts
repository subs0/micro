export interface SecurityGroup {
    data: Datum[];
}

export interface Datum {
    security_group: SecurityGroupClass;
}

export interface SecurityGroupClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Id of the specific security group to retrieve. */
    id?:     any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Optional) Id of the VPC that the desired security group belongs to. */
    vpc_id?: any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}