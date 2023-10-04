export interface VpcPeeringConnections {
    data: Datum[];
}

export interface Datum {
    vpc_peering_connections: VpcPeeringConnectionsClass;
}

export interface VpcPeeringConnectionsClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}