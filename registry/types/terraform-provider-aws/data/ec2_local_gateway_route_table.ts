export interface Ec2LocalGatewayRouteTable {
    data: Datum[];
}

export interface Datum {
    ec2_local_gateway_route_table: Ec2LocalGatewayRouteTableClass;
}

export interface Ec2LocalGatewayRouteTableClass {
    /** (Optional) Local Gateway Route Table Id assigned to desired local gateway route table */
    local_gateway_route_table_id?: any;
    /** (Optional) ID of the specific local gateway route table to retrieve. */
    local_gateway_id?:             any;
    /** (Optional) ARN of the Outpost the local gateway route table is associated with. */
    outpost_arn?:                  any;
    /** (Optional) State of the local gateway route table. */
    state?:                        any;
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:                         any;
    /** (Required) Name of the field to filter by, as defined by */
    name:                          any;
    /** (Required) Set of values that are accepted for the given field. */
    values:                        any;
}