export interface CloudhsmV2HSM {
    resource: Resource[];
}

export interface Resource {
    cloudhsm_v2_hsm: CloudhsmV2HSMClass;
}

export interface CloudhsmV2HSMClass {
    /** (Required) The ID of Cloud HSM v2 cluster to which HSM will be added. */
    cluster_id:         any;
    /** (Optional) The ID of subnet in which HSM module will be located. Conflicts with `availability_zone`. */
    subnet_id?:         any;
    /** (Optional) The IDs of AZ in which HSM module will be located. Conflicts with `subnet_id`. */
    availability_zone?: any;
    /** (Optional) The IP address of HSM module. Must be within the CIDR of selected subnet. */
    ip_address?:        any;
}