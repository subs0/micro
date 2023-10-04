export interface VpcIPAMPoolCidrs {
    data: Datum[];
}

export interface Datum {
    vpc_ipam_pool_cidrs: VpcIPAMPoolCidrsClass;
}

export interface VpcIPAMPoolCidrsClass {
    /** ID of the IPAM pool you would like the list of provisioned CIDRs. */
    ipam_pool_id?: any;
    /** Custom filter block as described below. */
    filter?:       any;
}