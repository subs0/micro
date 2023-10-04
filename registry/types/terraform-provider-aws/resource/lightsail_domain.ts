export interface LightsailDomain {
    resource: Resource[];
}

export interface Resource {
    lightsail_domain: LightsailDomainClass;
}

export interface LightsailDomainClass {
    /** (Required) The name of the Lightsail domain to manage */
    domain_name: any;
}