export interface VpcIPAMPreviewNextCIDR {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_preview_next_cidr: VpcIPAMPreviewNextCIDRClass;
}

export interface VpcIPAMPreviewNextCIDRClass {
    /** (Optional) Exclude a particular CIDR range from being returned by the pool. */
    disallowed_cidrs?: any;
    /** (Required) The ID of the pool to which you want to assign a CIDR. */
    ipam_pool_id:      any;
    /** (Optional) The netmask length of the CIDR you would like to preview from the IPAM pool. */
    netmask_length?:   any;
}