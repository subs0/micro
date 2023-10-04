export interface OutpostsOutposts {
    data: Datum[];
}

export interface Datum {
    outposts_outposts: OutpostsOutpostsClass;
}

export interface OutpostsOutpostsClass {
    /** (Optional) Availability Zone name. */
    availability_zone?:    any;
    /** (Optional) Availability Zone identifier. */
    availability_zone_id?: any;
    /** (Optional) Site identifier. */
    site_id?:              any;
    /** (Optional) AWS Account identifier of the Outpost owner. */
    owner_id?:             any;
}