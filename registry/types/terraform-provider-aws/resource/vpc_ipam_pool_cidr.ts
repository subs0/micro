export interface VpcIPAMPoolCIDR {
    resource: Resource[];
}

export interface Resource {
    vpc_ipam_pool_cidr: VpcIPAMPoolCIDRClass;
}

export interface VpcIPAMPoolCIDRClass {
    /** (Optional) The CIDR you want to assign to the pool. Conflicts with `netmask_length`. */
    cidr?:                       any;
    cidr_authorization_context?: CIDRAuthorizationContext;
    /** (Required) The ID of the pool to which you want to assign a CIDR. */
    ipam_pool_id:                any;
    /** (Optional) If provided, the cidr provisioned into the specified pool will be the next available cidr given this declared netmask length. Conflicts with `cidr`. */
    netmask_length?:             any;
}

export interface CIDRAuthorizationContext {
    /** (Optional) The plain-text authorization message for the prefix and account. */
    message:   any;
    /** (Optional) The signed authorization message for the prefix and account. */
    signature: any;
}