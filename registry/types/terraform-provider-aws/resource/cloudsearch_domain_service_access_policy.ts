export interface CloudsearchDomainServiceAccessPolicy {
    resource: Resource[];
}

export interface Resource {
    cloudsearch_domain_service_access_policy: CloudsearchDomainServiceAccessPolicyClass;
}

export interface CloudsearchDomainServiceAccessPolicyClass {
    /** (Required) The access rules you want to configure. These rules replace any existing rules. See the [AWS documentation](https://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html) for details. */
    access_policy: any;
    /** (Required) The CloudSearch domain name the policy applies to. */
    domain_name:   any;
}