export interface Vpc {
    data: Datum[];
}

export interface Datum {
    vpc: VpcClass;
}

export interface VpcClass {
    /** (Optional) Cidr block of the desired VPC. */
    cidr_block?:      any;
    /** (Optional) DHCP options id of the desired VPC. */
    dhcp_options_id?: any;
    /** (Optional) Boolean constraint on whether the desired VPC is */
    default?:         any;
    /** (Optional) Custom filter block as described below. */
    filter?:          any;
    /** (Optional) ID of the specific VPC to retrieve. */
    id?:              any;
    /** (Optional) Current state of the desired VPC. */
    state?:           any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:            any;
    /** (Required) Name of the field to filter by, as defined by */
    name:             any;
    /** (Required) Set of values that are accepted for the given field. */
    values:           any;
}