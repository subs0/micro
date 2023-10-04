export interface EksAddon {
    resource: Resource[];
}

export interface Resource {
    eks_addon: EksAddonClass;
}

export interface EksAddonClass {
    /** (Optional) custom configuration values for addons with single JSON string. This JSON string value must match the JSON schema derived from [describe-addon-configuration](https://docs.aws.amazon.com/cli/latest/reference/eks/describe-addon-configuration.html). */
    configuration_values?:        any;
    /** (Optional) How to resolve field value conflicts when migrating a self-managed add-on to an Amazon EKS add-on. Valid values are `NONE` and `OVERWRITE`. For more details see the [CreateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_CreateAddon.html) API Docs. */
    resolve_conflicts_on_create?: any;
    /** (Optional) How to resolve field value conflicts for an Amazon EKS add-on if you've changed a value from the Amazon EKS default value. Valid values are `NONE`, `OVERWRITE`, and `PRESERVE`. For more details see the [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs. */
    resolve_conflicts_on_update?: any;
    /** (**Deprecated** use the `resolve_conflicts_on_create` and `resolve_conflicts_on_update` attributes instead) Define how to resolve parameter value conflicts when migrating an existing add-on to an Amazon EKS add-on or when applying version updates to the add-on. Valid values are `NONE`, `OVERWRITE` and `PRESERVE`. Note that `PRESERVE` is only valid on addon update, not for initial addon creation. If you need to set this to `PRESERVE`, use the `resolve_conflicts_on_create` and `resolve_conflicts_on_update` attributes instead. For more details check [UpdateAddon](https://docs.aws.amazon.com/eks/latest/APIReference/API_UpdateAddon.html) API Docs. */
    resolve_conflicts?:           any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                        any;
    /** (Optional) Indicates if you want to preserve the created resources when deleting the EKS add-on. */
    preserve?:                    any;
    /** (Optional) The Amazon Resource Name (ARN) of an */
    service_account_role_arn?:    any;
}