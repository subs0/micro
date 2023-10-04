export interface OutpostsOutpost {
    data: Datum[];
}

export interface Datum {
    outposts_outpost: OutpostsOutpostClass;
}

export interface OutpostsOutpostClass {
    /** (Optional) Identifier of the Outpost. */
    id?:       any;
    /** (Optional) Name of the Outpost. */
    name?:     any;
    /** (Optional) ARN. */
    arn?:      any;
    /** (Optional) AWS Account identifier of the Outpost owner. */
    owner_id?: any;
}