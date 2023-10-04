export interface AmplifyDomainAssociation {
    resource: Resource[];
}

export interface Resource {
    amplify_domain_association: AmplifyDomainAssociationClass;
}

export interface AmplifyDomainAssociationClass {
    /** (Required) Unique ID for an Amplify app. */
    app_id:                  any;
    /** (Required) Domain name for the domain association. */
    domain_name:             any;
    /** (Optional) Enables the automated creation of subdomains for branches. */
    enable_auto_sub_domain?: any;
    /** (Required) Setting for the subdomain. Documented below. */
    sub_domain:              any;
    /** (Optional) If enabled, the resource will wait for the domain association status to change to `PENDING_DEPLOYMENT` or `AVAILABLE`. Setting this to `false` will skip the process. Default: `true`. */
    wait_for_verification?:  any;
    /** (Required) Branch name setting for the subdomain. */
    branch_name:             any;
    /** (Required) Prefix setting for the subdomain. */
    prefix:                  any;
}