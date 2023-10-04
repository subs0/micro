export interface OpensearchserverlessAccessPolicy {
    resource: Resource[];
}

export interface Resource {
    opensearchserverless_access_policy: OpensearchserverlessAccessPolicyClass;
}

export interface OpensearchserverlessAccessPolicyClass {
    /** (Required) Name of the policy. */
    name:         any;
    /** (Required) JSON policy document to use as the content for the new policy */
    policy:       any;
    /** (Required) Type of access policy. Must be `data`. */
    type:         any;
    /** (Optional) Description of the policy. Typically used to store information about the permissions defined in the policy. */
    description?: any;
}