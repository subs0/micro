export interface Ec2SubnetCIDRReservation {
    resource: Resource[];
}

export interface Resource {
    ec2_subnet_cidr_reservation: Ec2SubnetCIDRReservationClass;
}

export interface Ec2SubnetCIDRReservationClass {
    /** (Required) The CIDR block for the reservation. */
    cidr_block:       any;
    /** (Required) The type of reservation to create. Valid values: `explicit`, `prefix` */
    reservation_type: any;
    /** (Required) The ID of the subnet to create the reservation for. */
    subnet_id:        any;
    /** (Optional) A brief description of the reservation. */
    description?:     any;
}