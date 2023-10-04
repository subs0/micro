export interface Ec2TransitGatewayConnectPeer {
    data: Datum[];
}

export interface Datum {
    ec2_transit_gateway_connect_peer: Ec2TransitGatewayConnectPeerClass;
}

export interface Ec2TransitGatewayConnectPeerClass {
    /** (Optional) One or more configuration blocks containing name-values filters. Detailed below. */
    filter?:                          any;
    /** (Optional) Identifier of the EC2 Transit Gateway Connect Peer. */
    transit_gateway_connect_peer_id?: any;
    /** (Required) Name of the filter. */
    name:                             any;
    /** (Required) List of one or more values for the filter. */
    values:                           any;
}