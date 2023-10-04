export interface LightsailInstance {
    resource: Resource[];
}

export interface Resource {
    lightsail_instance: LightsailInstanceClass;
}

export interface LightsailInstanceClass {
    /** (Required) The name of the Lightsail Instance. Names be unique within each AWS Region in your Lightsail account. */
    name:              any;
    /** (Required) The Availability Zone in which to create your */
    availability_zone: any;
    /** (Required) The ID for a virtual private server image. A list of available blueprint IDs can be obtained using the AWS CLI command: `aws lightsail get-blueprints` */
    blueprint_id:      any;
    /** (Required) The bundle of specification information (see list below) */
    bundle_id:         any;
    /** (Optional) The name of your key pair. Created in the */
    key_pair_name?:    any;
    /** (Optional) Single lined launch script as a string to configure server with additional user data */
    user_data?:        any;
    /** (Optional) The IP address type of the Lightsail Instance. Valid Values: `dualstack` | `ipv4`. */
    ip_address_type?:  any;
    /** (Optional) The add on configuration for the instance. [Detailed below](#add_on). */
    add_on?:           any;
    /** (Optional) A map of tags to assign to the resource. To create a key-only tag, use an empty string as the value. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Required) The add-on type. There is currently only one valid type `AutoSnapshot`. */
    type:              any;
    /** (Required) The daily time when an automatic snapshot will be created. Must be in HH:00 format, and in an hourly increment and specified in Coordinated Universal Time (UTC). The snapshot will be automatically created between the time specified and up to 45 minutes after. */
    snapshot_time:     any;
    /** (Required) The status of the add on. Valid Values: `Enabled`, `Disabled`. */
    status:            any;
}