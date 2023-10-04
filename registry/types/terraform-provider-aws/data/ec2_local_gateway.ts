export interface Ec2LocalGateway {
    data: Datum[];
}

export interface Datum {
    ec2_local_gateway: Ec2LocalGatewayClass;
}

export interface Ec2LocalGatewayClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Id of the specific Local Gateway to retrieve. */
    id?:     any;
    /** (Optional) Current state of the desired Local Gateway. */
    state?:  any;
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}