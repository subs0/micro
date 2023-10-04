export interface Ec2AvailabilityZoneGroup {
    resource: Resource[];
}

export interface Resource {
    ec2_availability_zone_group: Ec2AvailabilityZoneGroupClass;
}

export interface Ec2AvailabilityZoneGroupClass {
    /** (Required) Name of the Availability Zone Group. */
    group_name:    any;
    /** (Required) Indicates whether to enable or disable Availability Zone Group. Valid values: `opted-in` or `not-opted-in`. */
    opt_in_status: any;
}