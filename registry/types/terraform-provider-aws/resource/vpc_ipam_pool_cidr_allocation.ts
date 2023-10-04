export interface VpcIPAMPoolCIDRAllocation {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_pool_cidr_allocation: VpcIPAMPoolCIDRAllocationClass;
}

export interface VpcIPAMPoolCIDRAllocationClass {
    /** (Optional) The CIDR you want to assign to the pool. */
    cidr?:             any;
    /** (Optional) The description for the allocation. */
    description?:      any;
    /** (Optional) Exclude a particular CIDR range from being returned by the pool. */
    disallowed_cidrs?: any;
    /** (Required) The ID of the pool to which you want to assign a CIDR. */
    ipam_pool_id:      any;
    /** (Optional) The netmask length of the CIDR you would like to allocate to the IPAM pool. Valid Values: `0-128`. */
    netmask_length?:   any;
}