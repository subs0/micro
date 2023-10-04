export interface NetworkmanagerSite {
    resource: Resource[];
}

export interface Resource {
    networkmanager_site: NetworkmanagerSiteClass;
}

export interface NetworkmanagerSiteClass {
    /** (Required) The ID of the Global Network to create the site in. */
    global_network_id: any;
    /** (Optional) Description of the Site. */
    description?:      any;
    /** (Optional) The site location as documented below. */
    location?:         any;
    /** (Optional) Key-value tags for the Site. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Optional) Address of the location. */
    address?:          any;
    /** (Optional) Latitude of the location. */
    latitude?:         any;
    /** (Optional) Longitude of the location. */
    longitude?:        any;
}