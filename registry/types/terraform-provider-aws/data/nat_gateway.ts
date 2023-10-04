export interface NatGateway {
    data: Datum[];
}

export interface Datum {
    nat_gateway: NatGatewayClass;
}

export interface NatGatewayClass {
    /** (Optional) ID of the specific NAT Gateway to retrieve. */
    id?:        any;
    /** (Optional) ID of subnet that the NAT Gateway resides in. */
    subnet_id?: any;
    /** (Optional) ID of the VPC that the NAT Gateway resides in. */
    vpc_id?:    any;
    /** (Optional) State of the NAT Gateway (pending | failed | available | deleting | deleted ). */
    state?:     any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:      any;
    /** (Optional) Custom filter block as described below. */
    filter?:    any;
    /** (Required) Name of the field to filter by, as defined by */
    name:       any;
    /** (Required) Set of values that are accepted for the given field. */
    values:     any;
}