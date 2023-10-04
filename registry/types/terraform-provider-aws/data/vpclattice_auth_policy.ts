export interface VpclatticeAuthPolicy {
    data: Datum[];
}

export interface Datum {
    vpclattice_auth_policy: VpclatticeAuthPolicyClass;
}

export interface VpclatticeAuthPolicyClass {
    /** (Required) The ID or Amazon Resource Name (ARN) of the service network or service for which the policy is created. */
    resource_identifier: any;
}