export interface EcrRegistryPolicy {
    resource: Resource[];
}

export interface Resource {
    ecr_registry_policy: EcrRegistryPolicyClass;
}

export interface EcrRegistryPolicyClass {
    /** (Required) The policy document. This is a JSON formatted string. For more information about building IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy) */
    policy: any;
}