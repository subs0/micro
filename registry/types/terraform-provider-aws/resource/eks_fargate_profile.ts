export interface EksFargateProfile {
    resource: Resource[];
}

export interface Resource {
    eks_fargate_profile: EksFargateProfileClass;
}

export interface EksFargateProfileClass {
    /** (Required) Configuration block(s) for selecting Kubernetes Pods to execute with this EKS Fargate Profile. Detailed below. */
    selector:  any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:     any;
    /** (Required) Kubernetes namespace for selection. */
    namespace: any;
    /** (Optional) Key-value map of Kubernetes labels for selection. */
    labels?:   any;
}