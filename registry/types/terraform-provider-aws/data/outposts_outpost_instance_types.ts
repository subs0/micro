export interface OutpostsOutpostInstanceTypes {
    data: Datum[];
}

export interface Datum {
    outposts_outpost_instance_types: OutpostsOutpostInstanceTypesClass;
}

export interface OutpostsOutpostInstanceTypesClass {
    /** (Required) Outpost ARN. */
    arn: any;
}