export interface RDSReservedInstance {
    resource: Resource[];
}

export interface Resource {
    rds_reserved_instance: RDSReservedInstanceClass;
}

export interface RDSReservedInstanceClass {
    /** (Required) ID of the Reserved DB instance offering to purchase. To determine an `offering_id`, see the `aws_rds_reserved_instance_offering` data source. */
    offering_id:     any;
    /** (Optional) Number of instances to reserve. Default value is `1`. */
    instance_count?: any;
    /** (Optional) Customer-specified identifier to track this reservation. */
    reservation_id?: any;
    /** (Optional) Map of tags to assign to the DB reservation. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}