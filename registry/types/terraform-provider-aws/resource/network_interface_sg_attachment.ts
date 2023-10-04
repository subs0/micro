export interface NetworkInterfaceSgAttachment {
    resource: Resource[];
}

export interface Resource {
    network_interface_sg_attachment: NetworkInterfaceSgAttachmentClass;
}

export interface NetworkInterfaceSgAttachmentClass {
    /** (Required) The ID of the security group. */
    security_group_id:    any;
    /** (Required) The ID of the network interface to attach to. */
    network_interface_id: any;
}