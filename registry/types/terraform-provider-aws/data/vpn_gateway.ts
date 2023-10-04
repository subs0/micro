export interface VPNGateway {
    data: Datum[];
}

export interface Datum {
    vpn_gateway: VPNGatewayClass;
}

export interface VPNGatewayClass {
    /** (Optional) ID of the specific VPN Gateway to retrieve. */
    id?:                any;
    /** (Optional) State of the specific VPN Gateway to retrieve. */
    state?:             any;
    /** (Optional) Availability Zone of the specific VPN Gateway to retrieve. */
    availability_zone?: any;
    /** (Optional) ID of a VPC attached to the specific VPN Gateway to retrieve. */
    attached_vpc_id?:   any;
    /** (Optional) Custom filter block as described below. */
    filter?:            any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:              any;
    /** (Optional) Autonomous System Number (ASN) for the Amazon side of the specific VPN Gateway to retrieve. */
    amazon_side_asn?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:               any;
    /** (Required) Set of values that are accepted for the given field. */
    values:             any;
}