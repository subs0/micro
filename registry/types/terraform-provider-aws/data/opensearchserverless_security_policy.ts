export interface OpensearchserverlessSecurityPolicy {
    data: Datum[];
}

export interface Datum {
    opensearchserverless_security_policy: OpensearchserverlessSecurityPolicyClass;
}

export interface OpensearchserverlessSecurityPolicyClass {
    /** (Required) Name of the policy */
    name: any;
    /** (Required) Type of security policy. One of `encryption` or `network`. */
    type: any;
}