export interface AppsyncDomainNameAPIAssociation {
    resource: Resource[];
}

export interface Resource {
    appsync_domain_name_api_association: AppsyncDomainNameAPIAssociationClass;
}

export interface AppsyncDomainNameAPIAssociationClass {
    /** (Required) API ID. */
    api_id:      any;
    /** (Required) Appsync domain name. */
    domain_name: any;
}