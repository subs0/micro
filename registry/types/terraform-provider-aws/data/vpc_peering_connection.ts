export interface VpcPeeringConnection {
    data: Datum[];
}

export interface Datum {
    vpc_peering_connection: VpcPeeringConnectionClass;
}

export interface VpcPeeringConnectionClass {
    /** (Optional) ID of the specific VPC Peering Connection to retrieve. */
    id?:              any;
    /** (Optional) Status of the specific VPC Peering Connection to retrieve. */
    status?:          any;
    /** (Optional) ID of the requester VPC of the specific VPC Peering Connection to retrieve. */
    vpc_id?:          any;
    /** (Optional) AWS account ID of the owner of the requester VPC of the specific VPC Peering Connection to retrieve. */
    owner_id?:        any;
    /** (Optional) Primary CIDR block of the requester VPC of the specific VPC Peering Connection to retrieve. */
    cidr_block?:      any;
    /** (Optional) Region of the requester VPC of the specific VPC Peering Connection to retrieve. */
    region?:          any;
    /** (Optional) ID of the accepter VPC of the specific VPC Peering Connection to retrieve. */
    peer_vpc_id?:     any;
    /** (Optional) AWS account ID of the owner of the accepter VPC of the specific VPC Peering Connection to retrieve. */
    peer_owner_id?:   any;
    /** (Optional) Primary CIDR block of the accepter VPC of the specific VPC Peering Connection to retrieve. */
    peer_cidr_block?: any;
    /** (Optional) Region of the accepter VPC of the specific VPC Peering Connection to retrieve. */
    peer_region?:     any;
    /** (Optional) Custom filter block as described below. */
    filter?:          any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:            any;
    /** (Required) Name of the field to filter by, as defined by */
    name:             any;
    /** (Required) Set of values that are accepted for the given field. */
    values:           any;
}