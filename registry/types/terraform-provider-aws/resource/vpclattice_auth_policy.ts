export interface VpclatticeAuthPolicy {
    resource: Resource[];
}

export interface Resource {
    vpclattice_auth_policy: VpclatticeAuthPolicyClass;
}

export interface VpclatticeAuthPolicyClass {
    /** (Required) The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created. */
    resource_identifier: any;
    /** (Required) The auth policy. The policy string in JSON must not contain newlines or blank lines. */
    policy:              any;
}