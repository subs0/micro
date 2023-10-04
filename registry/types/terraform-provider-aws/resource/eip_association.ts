export interface EipAssociation {
    resource: Resource[];
}

export interface Resource {
    eip_association: EipAssociationClass;
}

export interface EipAssociationClass {
    /** (Optional) The allocation ID. This is required for EC2-VPC. */
    allocation_id?:        any;
    /** (Optional, Boolean) Whether to allow an Elastic IP to */
    allow_reassociation?:  any;
    /** (Optional) The ID of the instance. This is required for */
    instance_id?:          any;
    /** (Optional) The ID of the network interface. If the */
    network_interface_id?: any;
    /** (Optional) The primary or secondary private IP address */
    private_ip_address?:   any;
    /** (Optional) The Elastic IP address. This is required for EC2-Classic. */
    public_ip?:            any;
}