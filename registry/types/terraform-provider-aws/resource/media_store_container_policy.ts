export interface MediaStoreContainerPolicy {
    resource: Resource[];
}

export interface Resource {
    media_store_container_policy: MediaStoreContainerPolicyClass;
}

export interface MediaStoreContainerPolicyClass {
    /** (Required) The name of the container. */
    container_name: any;
    /** (Required) The contents of the policy. For more information about building AWS IAM policy documents with Terraform, see the [AWS IAM Policy Document Guide](https://learn.hashicorp.com/terraform/aws/iam-policy). */
    policy:         any;
}