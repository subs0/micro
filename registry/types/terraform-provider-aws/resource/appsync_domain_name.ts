export interface AppsyncDomainName {
    resource: Resource[];
}

export interface Resource {
    appsync_domain_name: AppsyncDomainNameClass;
}

export interface AppsyncDomainNameClass {
    /** (Required) ARN of the certificate. This can be an Certificate Manager (ACM) certificate or an Identity and Access Management (IAM) server certificate. The certifiacte must reside in us-east-1. */
    certificate_arn: any;
    /** (Optional)  A description of the Domain Name. */
    description?:    any;
    /** (Required) Domain name. */
    domain_name:     any;
}