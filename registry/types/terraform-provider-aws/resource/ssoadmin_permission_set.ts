export interface SsoadminPermissionSet {
    resource: Resource[];
}

export interface Resource {
    ssoadmin_permission_set: SsoadminPermissionSetClass;
}

export interface SsoadminPermissionSetClass {
    /** (Optional) The description of the Permission Set. */
    description?:      any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the SSO Instance under which the operation will be executed. */
    instance_arn?:     any;
    /** (Required, Forces new resource) The name of the Permission Set. */
    name?:             any;
    /** (Optional) The relay state URL used to redirect users within the application during the federation authentication process. */
    relay_state?:      any;
    /** (Optional) The length of time that the application user sessions are valid in the ISO-8601 standard. Default: `PT1H`. */
    session_duration?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
}