export interface RouteTables {
    data: Datum[];
}

export interface Datum {
    route_tables: RouteTablesClass;
}

export interface RouteTablesClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) VPC ID that you want to filter from. */
    vpc_id?: any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}