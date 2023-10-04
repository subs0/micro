export interface OpensearchserverlessSecurityPolicy {
    resource: Resource[];
}

export interface Resource {
    opensearchserverless_security_policy: OpensearchserverlessSecurityPolicyClass;
}

export interface OpensearchserverlessSecurityPolicyClass {
    /** (Required) Name of the policy. */
    name:         any;
    /** (Required) JSON policy document to use as the content for the new policy */
    policy:       any;
    /** (Required) Type of security policy. One of `encryption` or `network`. */
    type:         any;
    /** (Optional) Description of the policy. Typically used to store information about the permissions defined in the policy. */
    description?: any;
}