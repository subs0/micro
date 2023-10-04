export interface AvailabilityZones {
    data: Datum[];
}

export interface Datum {
    availability_zones: AvailabilityZonesClass;
}

export interface AvailabilityZonesClass {
    /** (Optional) Set to `true` to include all Availability Zones and Local Zones regardless of your opt in status. */
    all_availability_zones?: any;
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?:                 any;
    /** (Optional) List of Availability Zone names to exclude. */
    exclude_names?:          any;
    /** (Optional) List of Availability Zone IDs to exclude. */
    exclude_zone_ids?:       any;
    /** (Optional) Allows to filter list of Availability Zones based on their */
    state?:                  any;
    /** (Required) Name of the filter field. Valid values can be found in the [EC2 DescribeAvailabilityZones API Reference](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html). */
    name:                    any;
    /** (Required) Set of values that are accepted for the given filter field. Results will be selected if any given value matches. */
    values:                  any;
}