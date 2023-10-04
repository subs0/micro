export interface GlobalacceleratorCustomRoutingListener {
    resource: Resource[];
}

export interface Resource {
    globalaccelerator_custom_routing_listener: GlobalacceleratorCustomRoutingListenerClass;
}

export interface GlobalacceleratorCustomRoutingListenerClass {
    /** (Required) The Amazon Resource Name (ARN) of a custom routing accelerator. */
    accelerator_arn: any;
    /** (Optional) The list of port ranges for the connections from clients to the accelerator. Fields documented below. */
    port_range?:     any;
    /** (Optional) The first port in the range of ports, inclusive. */
    from_port?:      any;
    /** (Optional) The last port in the range of ports, inclusive. */
    to_port?:        any;
}