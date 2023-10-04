export interface Ec2TransitGatewayRouteTablePropagations {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_route_table_propagations: Ec2TransitGatewayRouteTablePropagationsClass;
}

export interface Ec2TransitGatewayRouteTablePropagationsClass {
    /** (Required) Identifier of EC2 Transit Gateway Route Table. */
    transit_gateway_route_table_id: any;
    /** (Optional) Custom filter block as described below. */
    filter?:                        any;
    /** (Required) Name of the field to filter by, as defined by */
    name:                           any;
    /** (Required) Set of values that are accepted for the given field. */
    values:                         any;
}