export interface EcrpublicRepositoryPolicy {
    resource: Resource[];
}

export interface Resource {
    ecrpublic_repository_policy: EcrpublicRepositoryPolicyClass;
}

export interface EcrpublicRepositoryPolicyClass {
    /** (Required) Name of the repository to apply the policy. */
    repository_name: any;
    /** (Required) The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    policy:          any;
}