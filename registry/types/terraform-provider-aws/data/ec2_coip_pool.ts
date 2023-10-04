export interface Ec2CoipPool {
    data: Datum[];
}

export interface Datum {
    ec2_coip_pool: Ec2CoipPoolClass;
}

export interface Ec2CoipPoolClass {
    /** (Optional) Local Gateway Route Table Id assigned to desired COIP Pool */
    local_gateway_route_table_id?: any;
    /** (Optional) ID of the specific COIP Pool to retrieve. */
    pool_id?:                      any;
    /** (Optional) Mapping of tags, each pair of which must exactly match */
    tags?:                         any;
    /** (Required) Name of the field to filter by, as defined by */
    name:                          any;
    /** (Required) Set of values that are accepted for the given field. */
    values:                        any;
}