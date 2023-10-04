export interface Ec2TransitGatewayRouteTables {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_route_tables: Ec2TransitGatewayRouteTablesClass;
}

export interface Ec2TransitGatewayRouteTablesClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}