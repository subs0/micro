export interface GlobalacceleratorCustomRoutingEndpointGroup {
    resource: Resource[];
}

export interface Resource {
    globalaccelerator_custom_routing_endpoint_group: GlobalacceleratorCustomRoutingEndpointGroupClass;
}

export interface GlobalacceleratorCustomRoutingEndpointGroupClass {
    /** (Required) The Amazon Resource Name (ARN) of the custom routing listener. */
    listener_arn:              any;
    /** (Required) The port ranges and protocols for all endpoints in a custom routing endpoint group to accept client traffic on. Fields documented below. */
    destination_configuration: any;
    /** (Optional) The list of endpoint objects. Fields documented below. */
    endpoint_configuration?:   any;
    /** (Required) The first port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator. */
    from_port:                 any;
    /** (Required) The protocol for the endpoint group that is associated with a custom routing accelerator. The protocol can be either `"TCP"` or `"UDP"`. */
    protocols:                 any;
    /** (Required) The last port, inclusive, in the range of ports for the endpoint group that is associated with a custom routing accelerator. */
    to_port:                   any;
    /** (Optional) An ID for the endpoint. For custom routing accelerators, this is the virtual private cloud (VPC) subnet ID. */
    endpoint_id?:              any;
}