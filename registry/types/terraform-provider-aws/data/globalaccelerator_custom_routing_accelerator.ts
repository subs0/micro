export interface GlobalacceleratorCustomRoutingAccelerator {
    data: Datum[];
}

export interface Datum {
    globalaccelerator_custom_routing_accelerator: GlobalacceleratorCustomRoutingAcceleratorClass;
}

export interface GlobalacceleratorCustomRoutingAcceleratorClass {
    /** (Optional) Full ARN of the custom routing accelerator. */
    arn?:  any;
    /** (Optional) Unique name of the custom routing accelerator. */
    name?: any;
}