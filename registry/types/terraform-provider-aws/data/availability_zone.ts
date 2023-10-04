export interface AvailabilityZone {
    data: Datum[];
}

export interface Datum {
    availability_zone: AvailabilityZoneClass;
}

export interface AvailabilityZoneClass {
    /** (Optional) Set to `true` to include all Availability Zones and Local Zones regardless of your opt in status. */
    all_availability_zones?: any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:                 any;
    /** (Required) Name of the filter field. Valid values can be found in the [EC2 DescribeAvailabilityZones API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html). */
    name:                    any;
    /** (Optional) Specific availability zone state to require. May be any of `"available"`, `"information"` or `"impaired"`. */
    state?:                  any;
    /** (Optional) Zone ID of the availability zone to select. */
    zone_id?:                any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:                  any;
}