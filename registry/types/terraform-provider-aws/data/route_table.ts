export interface RouteTable {
    data: Datum[];
}

export interface Datum {
    route_table: RouteTableClass;
}

export interface RouteTableClass {
    filter?:         Filter;
    /** (Optional) ID of an Internet Gateway or Virtual Private Gateway which is connected to the Route Table (not exported if not passed as a parameter). */
    gateway_id?:     any;
    /** (Optional) ID of the specific Route Table to retrieve. */
    route_table_id?: any;
    /** (Optional) ID of a Subnet which is connected to the Route Table (not exported if not passed as a parameter). */
    subnet_id?:      any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired Route Table. */
    tags?:           any;
    /** (Optional) ID of the VPC that the desired Route Table belongs to. */
    vpc_id?:         any;
}

export interface Filter {
    /** (Required) Name of the field to filter by, as defined by [the underlying AWS API](http://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeRouteTables.html). */
    name:   any;
    /** (Required) Set of values that are accepted for the given field. A Route Table will be selected if any one of the given values matches. */
    values: any;
}