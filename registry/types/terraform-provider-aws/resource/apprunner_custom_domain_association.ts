export interface ApprunnerCustomDomainAssociation {
    resource: Resource[];
}

export interface Resource {
    apprunner_custom_domain_association: ApprunnerCustomDomainAssociationClass;
}

export interface ApprunnerCustomDomainAssociationClass {
    /** (Required) Custom domain endpoint to association. Specify a base domain e.g., `example.com` or a subdomain e.g., `subdomain.example.com`. */
    domain_name: any;
    /** (Required) ARN of the App Runner service. */
    service_arn: any;
}