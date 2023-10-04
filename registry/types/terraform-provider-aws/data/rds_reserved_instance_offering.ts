export interface RDSReservedInstanceOffering {
    data: Datum[];
}

export interface Datum {
    rds_reserved_instance_offering: RDSReservedInstanceOfferingClass;
}

export interface RDSReservedInstanceOfferingClass {
    /** (Required) DB instance class for the reserved DB instance. */
    db_instance_class:   any;
    /** (Required) Duration of the reservation in years or seconds. Valid values are `1`, `3`, `31536000`, `94608000` */
    duration:            any;
    /** (Required) Whether the reservation applies to Multi-AZ deployments. */
    multi_az:            any;
    /** (Required) Offering type of this reserved DB instance. Valid values are `No Upfront`, `Partial Upfront`, `All Upfront`. */
    offering_type:       any;
    /** (Required) Description of the reserved DB instance. */
    product_description: any;
}