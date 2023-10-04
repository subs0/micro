export interface QuicksightNamespace {
    resource: Resource[];
}

export interface Resource {
    quicksight_namespace: QuicksightNamespaceClass;
}

export interface QuicksightNamespaceClass {
    /** (Required) Name of the namespace. */
    namespace:       any;
    /** (Optional) AWS account ID. */
    aws_account_id?: any;
    /** (Optional) User identity directory type. Defaults to `QUICKSIGHT`, the only current valid value. */
    identity_store?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}