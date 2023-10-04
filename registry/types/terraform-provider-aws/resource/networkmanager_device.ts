export interface NetworkmanagerDevice {
    resource: Resource[];
}

export interface Resource {
    networkmanager_device: NetworkmanagerDeviceClass;
}

export interface NetworkmanagerDeviceClass {
    /** (Optional) The AWS location of the device. Documented below. */
    aws_location?:     any;
    /** (Optional) A description of the device. */
    description?:      any;
    /** (Required) The ID of the global network. */
    global_network_id: any;
    /** (Optional) The location of the device. Documented below. */
    location?:         any;
    /** (Optional) The model of device. */
    model?:            any;
    /** (Optional) The serial number of the device. */
    serial_number?:    any;
    /** (Optional) The ID of the site. */
    site_id?:          any;
    /** (Optional) Key-value tags for the device. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Optional) The type of device. */
    type?:             any;
    /** (Optional) The vendor of the device. */
    vendor?:           any;
    /** (Optional) The Amazon Resource Name (ARN) of the subnet that the device is located in. */
    subnet_arn?:       any;
    /** (Optional) The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost. */
    zone?:             any;
    /** (Optional) The physical address. */
    address?:          any;
    /** (Optional) The latitude. */
    latitude?:         any;
    /** (Optional) The longitude. */
    longitude?:        any;
}