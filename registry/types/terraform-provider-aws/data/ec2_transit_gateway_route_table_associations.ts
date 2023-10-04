export interface Ec2TransitGatewayRouteTableAssociations {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_route_table_associations: Ec2TransitGatewayRouteTableAssociationsClass;
}

export interface Ec2TransitGatewayRouteTableAssociationsClass {
    /** (Required) Identifier of EC2 Transit Gateway Route Table. */
    transit_gateway_route_table_id: any;
    /** (Optional) Custom filter block as described below. */
    filter?:                        any;
    /** (Required) Name of the field to filter by, as defined by */
    name:                           any;
    /** (Required) Set of values that are accepted for the given field. */
    values:                         any;
}