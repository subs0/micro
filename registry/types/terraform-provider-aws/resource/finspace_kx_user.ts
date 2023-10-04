export interface FinspaceKxUser {
    resource: Resource[];
}

export interface Resource {
    finspace_kx_user: FinspaceKxUserClass;
}

export interface FinspaceKxUserClass {
    /** (Required) A unique identifier for the user. */
    name:           any;
    /** (Required) Unique identifier for the KX environment. */
    environment_id: any;
    /** (Required) IAM role ARN to be associated with the user. */
    iam_role:       any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:          any;
}