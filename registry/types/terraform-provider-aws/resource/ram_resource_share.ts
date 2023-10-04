export interface RAMResourceShare {
    resource: Resource[];
}

export interface Resource {
    ram_resource_share: RAMResourceShareClass;
}

export interface RAMResourceShareClass {
    /** (Required) The name of the resource share. */
    name:                       any;
    /** (Optional) Indicates whether principals outside your organization can be associated with a resource share. */
    allow_external_principals?: any;
    /** (Optional) Specifies the Amazon Resource Names (ARNs) of the RAM permission to associate with the resource share. If you do not specify an ARN for the permission, RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share. */
    permission_arns?:           any;
    /** (Optional) A map of tags to assign to the resource share. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}