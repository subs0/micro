export interface EcrLifecyclePolicy {
    resource: Resource[];
}

export interface Resource {
    ecr_lifecycle_policy: EcrLifecyclePolicyClass;
}

export interface EcrLifecyclePolicyClass {
    /** (Required) Name of the repository to apply the policy. */
    repository: any;
    /** (Required) The policy document. This is a JSON formatted string. See more details about [Policy Parameters](http://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters) in the official AWS docs. */
    policy:     any;
}