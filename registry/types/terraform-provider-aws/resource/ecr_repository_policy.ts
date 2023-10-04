export interface EcrRepositoryPolicy {
    resource: Resource[];
}

export interface Resource {
    ecr_repository_policy: EcrRepositoryPolicyClass;
}

export interface EcrRepositoryPolicyClass {
    /** (Required) Name of the repository to apply the policy. */
    repository: any;
    /** (Required) The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    policy:     any;
}