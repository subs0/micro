export interface Regions {
    data: Datum[];
}

export interface Datum {
    regions: RegionsClass;
}

export interface RegionsClass {
    /** (Optional) If true the source will query all regions regardless of availability. */
    all_regions?: any;
    /** (Optional) Configuration block(s) to use as filters. Detailed below. */
    filter?:      any;
    /** (Required) Name of the filter field. Valid values can be found in the [describe-regions AWS CLI Reference][1]. */
    name:         any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:       any;
}