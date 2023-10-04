export interface SecretsmanagerSecret {
    resource: Resource[];
}

export interface Resource {
    secretsmanager_secret: SecretsmanagerSecretClass;
}

export interface SecretsmanagerSecretClass {
    /** (Optional) Description of the secret. */
    description?:                    any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:                    any;
    /** (Optional) Friendly name of the new secret. The secret name can consist of uppercase letters, lowercase letters, digits, and any of the following characters: `/_+=.@-` Conflicts with `name_prefix`. */
    name?:                           any;
    /** (Optional) Valid JSON document representing a [resource policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html). For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). Removing `policy` from your configuration or setting `policy` to null or an empty string (i.e., `policy = ""`) _will not_ delete the policy since it could have been set by `aws_secretsmanager_secret_policy`. To delete the `policy`, set it to `"{}"` (an empty JSON document). */
    policy?:                         any;
    /** (Optional) Number of days that AWS Secrets Manager waits before it can delete the secret. This value can be `0` to force deletion without recovery or range from `7` to `30` days. The default value is `30`. */
    recovery_window_in_days?:        any;
    replica?:                        Replica;
    /** (Optional) Accepts boolean value to specify whether to overwrite a secret with the same name in the destination Region. */
    force_overwrite_replica_secret?: any;
    /** (Optional) Key-value map of user-defined tags that are attached to the secret. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                           any;
}

export interface Replica {
    /** (Optional) ARN, Key ID, or Alias of the AWS KMS key within the region secret is replicated to. If one is not specified, then Secrets Manager defaults to using the AWS account's default KMS key (`aws/secretsmanager`) in the region or creates one for use if non-existent. */
    kms_key_id: any;
    /** (Required) Region for replicating the secret. */
    region:     any;
}