export interface Ec2TransitGatewayConnect {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_connect: Ec2TransitGatewayConnectClass;
}

export interface Ec2TransitGatewayConnectClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?:                     any;
    /** (Optional) Identifier of the EC2 Transit Gateway Connect. */
    transit_gateway_connect_id?: any;
    /** (Required) Name of the filter. */
    name:                        any;
    /** (Required) List of one or more values for the filter. */
    values:                      any;
}