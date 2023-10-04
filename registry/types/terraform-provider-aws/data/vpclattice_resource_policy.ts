export interface VpclatticeResourcePolicy {
    data: Datum[];
}

export interface Datum {
    vpclattice_resource_policy: VpclatticeResourcePolicyClass;
}

export interface VpclatticeResourcePolicyClass {
    /** (Required) Resource ARN of the resource for which a policy is retrieved. */
    resource_arn: any;
}