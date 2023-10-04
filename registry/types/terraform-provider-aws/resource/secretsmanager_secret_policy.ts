export interface SecretsmanagerSecretPolicy {
    resource: Resource[];
}

export interface Resource {
    secretsmanager_secret_policy: SecretsmanagerSecretPolicyClass;
}

export interface SecretsmanagerSecretPolicyClass {
    /** (Required) Valid JSON document representing a [resource policy](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_resource-based-policies.html). For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). Unlike `aws_secretsmanager_secret`, where `policy` can be set to `"{}"` to delete the policy, `"{}"` is not a valid policy since `policy` is required. */
    policy:               any;
    /** (Required) Secret ARN. */
    secret_arn:           any;
    /** (Optional) Makes an optional API call to Zelkova to validate the Resource Policy to prevent broad access to your secret. */
    block_public_policy?: any;
}