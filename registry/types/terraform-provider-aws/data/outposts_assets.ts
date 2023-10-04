export interface OutpostsAssets {
    data: Datum[];
}

export interface Datum {
    outposts_assets: OutpostsAssetsClass;
}

export interface OutpostsAssetsClass {
    /** (Required) Outpost ARN. */
    arn:               any;
    /** (Optional) Filters by list of Host IDs of a Dedicated Host. */
    host_id_filter?:   any;
    /** (Optional) Filters by list of state status. Valid values: "ACTIVE", "RETIRING". */
    status_id_filter?: any;
}