export interface LightsailDisk {
    resource: Resource[];
}

export interface Resource {
    lightsail_disk: LightsailDiskClass;
}

export interface LightsailDiskClass {
    /** (Required) The name of the Lightsail load balancer. */
    name:              any;
    /** (Required) The instance port the load balancer will connect. */
    size_in_gb:        any;
    /** (Required) The Availability Zone in which to create your disk. */
    availability_zone: any;
    /** (Optional) A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}