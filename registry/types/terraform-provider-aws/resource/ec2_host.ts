export interface Ec2Host {
    resource: Resource[];
}

export interface Resource {
    ec2_host: Ec2HostClass;
}

export interface Ec2HostClass {
    /** (Optional) The ID of the Outpost hardware asset on which to allocate the Dedicated Hosts. This parameter is supported only if you specify OutpostArn. If you are allocating the Dedicated Hosts in a Region, omit this parameter. */
    asset_id?:         any;
    /** (Optional) Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID. Valid values: `on`, `off`. Default: `on`. */
    auto_placement?:   any;
    /** (Required) The Availability Zone in which to allocate the Dedicated Host. */
    availability_zone: any;
    /** (Optional) Indicates whether to enable or disable host recovery for the Dedicated Host. Valid values: `on`, `off`. Default: `off`. */
    host_recovery?:    any;
    /** (Optional) Specifies the instance family to be supported by the Dedicated Hosts. If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family. Exactly one of `instance_family` or `instance_type` must be specified. */
    instance_family?:  any;
    /** (Optional) Specifies the instance type to be supported by the Dedicated Hosts. If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only. Exactly one of `instance_family` or `instance_type` must be specified. */
    instance_type?:    any;
    /** (Optional) The Amazon Resource Name (ARN) of the AWS Outpost on which to allocate the Dedicated Host. */
    outpost_arn?:      any;
    /** (Optional) Map of tags to assign to this resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}