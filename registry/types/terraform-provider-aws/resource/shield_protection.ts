export interface ShieldProtection {
    resource: Resource[];
}

export interface Resource {
    shield_protection: ShieldProtectionClass;
}

export interface ShieldProtectionClass {
    /** (Required) A friendly name for the Protection you are creating. */
    name:         any;
    /** (Required) The ARN (Amazon Resource Name) of the resource to be protected. */
    resource_arn: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}