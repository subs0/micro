export interface Sesv2DedicatedIPPool {
    resource: Resource[];
}

export interface Resource {
    sesv2_dedicated_ip_pool: Sesv2DedicatedIPPoolClass;
}

export interface Sesv2DedicatedIPPoolClass {
    /** (Required) Name of the dedicated IP pool. */
    pool_name:     any;
    /** (Optional) IP pool scaling mode. Valid values: `STANDARD`, `MANAGED`. If omitted, the AWS API will default to a standard pool. */
    scaling_mode?: any;
    /** (Optional) A map of tags to assign to the pool. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
}