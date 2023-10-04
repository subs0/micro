export interface SsmParameter {
    resource: Resource[];
}

export interface Resource {
    ssm_parameter: SsmParameterClass;
}

export interface SsmParameterClass {
    /** (Required) Name of the parameter. If the name contains a path (e.g., any forward slashes (`/`)), it must be fully qualified with a leading forward slash (`/`). For additional requirements and constraints, see the [AWS SSM User Guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-parameter-name-constraints.html). */
    name:             any;
    /** (Required) Type of the parameter. Valid types are `String`, `StringList` and `SecureString`. */
    type:             any;
    /** (Optional) Regular expression used to validate the parameter value. */
    allowed_pattern?: any;
    /** (Optional) Data type of the parameter. Valid values: `text`, `aws:ssm:integration` and `aws:ec2:image` for AMI format, see the [Native parameter support for Amazon Machine Image IDs](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-ec2-aliases.html). */
    data_type?:       any;
    /** (Optional) Description of the parameter. */
    description?:     any;
    /** (Optional, exactly one of `value` or `insecure_value` is required) Value of the parameter. **Use caution:** This value is _never_ marked as sensitive in the Terraform plan output. This argument is not valid with a `type` of `SecureString`. */
    insecure_value?:  any;
    /** (Optional) KMS key ID or ARN for encrypting a SecureString. */
    key_id?:          any;
    /** (Optional, **Deprecated**) Overwrite an existing parameter. If not specified, defaults to `false` if the resource has not been created by Terraform to avoid overwrite of existing resource, and will default to `true` otherwise (Terraform lifecycle rules should then be used to manage the update behavior). */
    overwrite?:       any;
    /** (Optional) Map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:            any;
    /** (Optional) Parameter tier to assign to the parameter. If not specified, will use the default parameter tier for the region. Valid tiers are `Standard`, `Advanced`, and `Intelligent-Tiering`. Downgrading an `Advanced` tier parameter to `Standard` will recreate the resource. For more information on parameter tiers, see the [AWS SSM Parameter tier comparison and guide](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-advanced-parameters.html). */
    tier?:            any;
    /** (Optional, exactly one of `value` or `insecure_value` is required) Value of the parameter. This value is always marked as sensitive in the Terraform plan output, regardless of `type`. In Terraform CLI version 0.15 and later, this may require additional configuration handling for certain scenarios. For more information, see the [Terraform v0.15 Upgrade Guide](https://www.terraform.io/upgrade-guides/0-15.html#sensitive-output-values). */
    value?:           any;
}