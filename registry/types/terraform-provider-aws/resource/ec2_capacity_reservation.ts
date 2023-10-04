export interface Ec2CapacityReservation {
    resource: Resource[];
}

export interface Resource {
    ec2_capacity_reservation: Ec2CapacityReservationClass;
}

export interface Ec2CapacityReservationClass {
    /** (Required) The Availability Zone in which to create the Capacity Reservation. */
    availability_zone:        any;
    /** (Optional) Indicates whether the Capacity Reservation supports EBS-optimized instances. */
    ebs_optimized?:           any;
    /** (Optional) The date and time at which the Capacity Reservation expires. When a Capacity Reservation expires, the reserved capacity is released and you can no longer launch instances into it. Valid values: [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) (`YYYY-MM-DDTHH:MM:SSZ`) */
    end_date?:                any;
    /** (Optional) Indicates the way in which the Capacity Reservation ends. Specify either `unlimited` or `limited`. */
    end_date_type?:           any;
    /** (Optional) Indicates whether the Capacity Reservation supports instances with temporary, block-level storage. */
    ephemeral_storage?:       any;
    /** (Required) The number of instances for which to reserve capacity. */
    instance_count:           any;
    /** (Optional) Indicates the type of instance launches that the Capacity Reservation accepts. Specify either `open` or `targeted`. */
    instance_match_criteria?: any;
    /** (Required) The type of operating system for which to reserve capacity. Valid options are `Linux/UNIX`, `Red Hat Enterprise Linux`, `SUSE Linux`, `Windows`, `Windows with SQL Server`, `Windows with SQL Server Enterprise`, `Windows with SQL Server Standard` or `Windows with SQL Server Web`. */
    instance_platform:        any;
    /** (Required) The instance type for which to reserve capacity. */
    instance_type:            any;
    /** (Optional) The Amazon Resource Name (ARN) of the Outpost on which to create the Capacity Reservation. */
    outpost_arn?:             any;
    /** (Optional) The Amazon Resource Name (ARN) of the cluster placement group in which to create the Capacity Reservation. */
    placement_group_arn?:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Optional) Indicates the tenancy of the Capacity Reservation. Specify either `default` or `dedicated`. */
    tenancy?:                 any;
}