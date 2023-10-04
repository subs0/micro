export interface NetworkInterfaceAttachment {
    resource: Resource[];
}

export interface Resource {
    network_interface_attachment: NetworkInterfaceAttachmentClass;
}

export interface NetworkInterfaceAttachmentClass {
    /** (Required) Instance ID to attach. */
    instance_id:          any;
    /** (Required) ENI ID to attach. */
    network_interface_id: any;
    /** (Required) Network interface index (int). */
    device_index:         any;
}