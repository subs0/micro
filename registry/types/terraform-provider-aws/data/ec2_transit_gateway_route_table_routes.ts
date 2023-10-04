export interface Ec2TransitGatewayRouteTableRoutes {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_route_table_routes: Ec2TransitGatewayRouteTableRoutesClass;
}

export interface Ec2TransitGatewayRouteTableRoutesClass {
    /** (Required) Custom filter block as described below. */
    filter:                         any;
    /** (Required) Identifier of EC2 Transit Gateway Route Table. */
    transit_gateway_route_table_id: any;
    /** (Required) Name of the field to filter by, as defined by */
    name:                           any;
    /** (Required) Set of values that are accepted for the given field. */
    values:                         any;
}