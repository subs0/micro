export interface Ec2TransitGatewayRouteTable {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_route_table: Ec2TransitGatewayRouteTableClass;
}

export interface Ec2TransitGatewayRouteTableClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?: any;
    /** (Optional) Identifier of the EC2 Transit Gateway Route Table. */
    id?:     any;
    /** (Required) Name of the filter. */
    name:    any;
    /** (Required) List of one or more values for the filter. */
    values:  any;
}