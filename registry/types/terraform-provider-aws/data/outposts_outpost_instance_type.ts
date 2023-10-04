export interface OutpostsOutpostInstanceType {
    data: Datum[];
}

export interface Datum {
    outposts_outpost_instance_type: OutpostsOutpostInstanceTypeClass;
}

export interface OutpostsOutpostInstanceTypeClass {
    /** (Required) Outpost ARN. */
    arn:                       any;
    /** (Optional) Desired instance type. Conflicts with `preferred_instance_types`. */
    instance_type?:            any;
    /** (Optional) Ordered list of preferred instance types. The first match in this list will be returned. If no preferred matches are found and the original search returned more than one result, an error is returned. Conflicts with `instance_type`. */
    preferred_instance_types?: any;
}