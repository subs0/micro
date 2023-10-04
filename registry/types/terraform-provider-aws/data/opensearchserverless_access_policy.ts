export interface OpensearchserverlessAccessPolicy {
    data: Datum[];
}

export interface Datum {
    opensearchserverless_access_policy: OpensearchserverlessAccessPolicyClass;
}

export interface OpensearchserverlessAccessPolicyClass {
    /** (Required) Name of the policy. */
    name: any;
    /** (Required) Type of access policy. Must be `data`. */
    type: any;
}