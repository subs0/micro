export interface VpclatticeResourcePolicy {
    resource: Resource[];
}

export interface Resource {
    vpclattice_resource_policy: VpclatticeResourcePolicyClass;
}

export interface VpclatticeResourcePolicyClass {
    /** (Required) The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created. */
    resource_arn: any;
    /** (Required) An IAM policy. The policy string in JSON must not contain newlines or blank lines. */
    policy:       any;
}