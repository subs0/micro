export interface OpensearchDomainPolicy {
    resource: Resource[];
}

export interface Resource {
    opensearch_domain_policy: OpensearchDomainPolicyClass;
}

export interface OpensearchDomainPolicyClass {
    /** (Optional) IAM policy document specifying the access policies for the domain */
    access_policies?: any;
    /** (Required) Name of the domain. */
    domain_name:      any;
}