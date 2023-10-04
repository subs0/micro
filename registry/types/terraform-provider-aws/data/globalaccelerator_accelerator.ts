export interface GlobalacceleratorAccelerator {
    data: Datum[];
}

export interface Datum {
    globalaccelerator_accelerator: GlobalacceleratorAcceleratorClass;
}

export interface GlobalacceleratorAcceleratorClass {
    /** (Optional) Full ARN of the Global Accelerator. */
    arn?:  any;
    /** (Optional) Unique name of the Global Accelerator. */
    name?: any;
}