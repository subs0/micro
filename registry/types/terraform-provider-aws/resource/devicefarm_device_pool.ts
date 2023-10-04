export interface DevicefarmDevicePool {
    resource: Resource[];
}

export interface Resource {
    devicefarm_device_pool: DevicefarmDevicePoolClass;
}

export interface DevicefarmDevicePoolClass {
    /** (Required) The name of the Device Pool */
    name:         any;
    /** (Required) The ARN of the project for the device pool. */
    project_arn:  any;
    /** (Required) The device pool's rules. See [Rule](#rule). */
    rule:         any;
    /** (Optional) The device pool's description. */
    description?: any;
    /** (Optional) The number of devices that Device Farm can add to your device pool. */
    max_devices?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
    /** (Optional) The rule's stringified attribute. Valid values are: `APPIUM_VERSION`, `ARN`, `AVAILABILITY`, `FLEET_TYPE`, `FORM_FACTOR`, `INSTANCE_ARN`, `INSTANCE_LABELS`, `MANUFACTURER`, `MODEL`, `OS_VERSION`, `PLATFORM`, `REMOTE_ACCESS_ENABLED`, `REMOTE_DEBUG_ENABLED`. */
    attribute?:   any;
    /** (Optional) Specifies how Device Farm compares the rule's attribute to the value. For the operators that are supported by each attribute. Valid values are: `EQUALS`, `NOT_IN`, `IN`, `GREATER_THAN`, `GREATER_THAN_OR_EQUALS`, `LESS_THAN`, `LESS_THAN_OR_EQUALS`, `CONTAINS`. */
    operator?:    any;
    /** (Optional) The rule's value. */
    value?:       any;
}