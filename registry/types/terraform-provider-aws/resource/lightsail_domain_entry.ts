export interface LightsailDomainEntry {
    resource: Resource[];
}

export interface Resource {
    lightsail_domain_entry: LightsailDomainEntryClass;
}

export interface LightsailDomainEntryClass {
    /** (Required) The name of the Lightsail domain in which to create the entry */
    domain_name: any;
    /** (Required) Name of the entry record */
    name:        any;
    /** (Required) Type of record */
    type:        any;
    /** (Required) Target of the domain entry */
    target:      any;
    /** (Optional) If the entry should be an alias Defaults to `false` */
    is_alias?:   any;
}