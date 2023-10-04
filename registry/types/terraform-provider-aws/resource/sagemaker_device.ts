export interface SagemakerDevice {
    resource: Resource[];
}

export interface Resource {
    sagemaker_device: SagemakerDeviceClass;
}

export interface SagemakerDeviceClass {
    /** (Required) The name of the Device Fleet. */
    device_fleet_name: any;
    /** (Required) The device to register with SageMaker Edge Manager. See [Device](#device) details below. */
    device:            any;
    /** (Required) A description for the device. */
    description:       any;
    /** (Optional) The name of the device. */
    device_name?:      any;
    /** (Optional) Amazon Web Services Internet of Things (IoT) object name. */
    iot_thing_name?:   any;
}