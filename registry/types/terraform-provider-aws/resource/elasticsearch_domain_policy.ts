export interface ElasticsearchDomainPolicy {
    resource: Resource[];
}

export interface Resource {
    elasticsearch_domain_policy: ElasticsearchDomainPolicyClass;
}

export interface ElasticsearchDomainPolicyClass {
    /** (Required) Name of the domain. */
    domain_name:      any;
    /** (Optional) IAM policy document specifying the access policies for the domain */
    access_policies?: any;
}