export interface Ec2LocalGatewayRouteTables {
    data: Datum[];
}

export interface Datum {
    ec2_local_gateway_route_tables: Ec2LocalGatewayRouteTablesClass;
}

export interface Ec2LocalGatewayRouteTablesClass {
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}