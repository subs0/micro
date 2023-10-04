export interface MskClusterPolicy {
    resource: Resource[];
}

export interface Resource {
    msk_cluster_policy: MskClusterPolicyClass;
}

export interface MskClusterPolicyClass {
    /** (Required) The Amazon Resource Name (ARN) that uniquely identifies the cluster. */
    cluster_arn: any;
    /** (Required) Resource policy for cluster. */
    policy:      any;
}