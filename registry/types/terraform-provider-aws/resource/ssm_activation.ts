export interface SsmActivation {
    resource: Resource[];
}

export interface Resource {
    ssm_activation: SsmActivationClass;
}

export interface SsmActivationClass {
    /** (Optional) The default name of the registered managed instance. */
    name?:               any;
    /** (Optional) The description of the resource that you want to register. */
    description?:        any;
    /** (Optional) UTC timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) by which this activation request should expire. The default value is 24 hours from resource creation time. Terraform will only perform drift detection of its value when present in a configuration. */
    expiration_date?:    any;
    /** (Required) The IAM Role to attach to the managed instance. */
    iam_role:            any;
    /** (Optional) The maximum number of managed instances you want to register. The default value is 1 instance. */
    registration_limit?: any;
    /** (Optional) A map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
}