export interface Ec2LocalGateways {
    data: Datum[];
}

export interface Datum {
    ec2_local_gateways: Ec2LocalGatewaysClass;
}

export interface Ec2LocalGatewaysClass {
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}