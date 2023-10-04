export interface NetworkmanagerLink {
    resource: Resource[];
}

export interface Resource {
    networkmanager_link: NetworkmanagerLinkClass;
}

export interface NetworkmanagerLinkClass {
    /** (Required) The upload speed and download speed in Mbps. Documented below. */
    bandwidth:         any;
    /** (Optional) A description of the link. */
    description?:      any;
    /** (Required) The ID of the global network. */
    global_network_id: any;
    /** (Optional) The provider of the link. */
    provider_name?:    any;
    /** (Required) The ID of the site. */
    site_id:           any;
    /** (Optional) Key-value tags for the link. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:             any;
    /** (Optional) The type of the link. */
    type?:             any;
    /** (Optional) Download speed in Mbps. */
    download_speed?:   any;
    /** (Optional) Upload speed in Mbps. */
    upload_speed?:     any;
}