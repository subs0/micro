export interface CodeartifactDomainPermissionsPolicy {
    resource: Resource[];
}

export interface Resource {
    codeartifact_domain_permissions_policy: CodeartifactDomainPermissionsPolicyClass;
}

export interface CodeartifactDomainPermissionsPolicyClass {
    /** (Required) The name of the domain on which to set the resource policy. */
    domain:           any;
    /** (Required) A JSON policy string to be set as the access control resource policy on the provided domain. */
    policy_document:  any;
    /** (Optional) The account number of the AWS account that owns the domain. */
    domain_owner?:    any;
    /** (Optional) The current revision of the resource policy to be set. This revision is used for optimistic locking, which prevents others from overwriting your changes to the domain's resource policy. */
    policy_revision?: any;
}