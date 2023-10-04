export interface GlobalacceleratorListener {
    resource: Resource[];
}

export interface Resource {
    globalaccelerator_listener: GlobalacceleratorListenerClass;
}

export interface GlobalacceleratorListenerClass {
    /** (Required) The Amazon Resource Name (ARN) of your accelerator. */
    accelerator_arn:  any;
    /** (Optional) Direct all requests from a user to the same endpoint. Valid values are `NONE`, `SOURCE_IP`. Default: `NONE`. If `NONE`, Global Accelerator uses the "five-tuple" properties of source IP address, source port, destination IP address, destination port, and protocol to select the hash value. If `SOURCE_IP`, Global Accelerator uses the "two-tuple" properties of source (client) IP address and destination IP address to select the hash value. */
    client_affinity?: any;
    /** (Optional) The protocol for the connections from clients to the accelerator. Valid values are `TCP`, `UDP`. */
    protocol?:        any;
    /** (Optional) The list of port ranges for the connections from clients to the accelerator. Fields documented below. */
    port_range?:      any;
    /** (Optional) The first port in the range of ports, inclusive. */
    from_port?:       any;
    /** (Optional) The last port in the range of ports, inclusive. */
    to_port?:         any;
}