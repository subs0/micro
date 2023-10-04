export interface OamLink {
    resource: Resource[];
}

export interface Resource {
    oam_link: OamLinkClass;
}

export interface OamLinkClass {
    /** (Required) Human-readable name to use to identify this source account when you are viewing data from it in the monitoring account. */
    label_template:  any;
    /** (Required) Types of data that the source account shares with the monitoring account. */
    resource_types:  any;
    /** (Required) Identifier of the sink to use to create this link. */
    sink_identifier: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:           any;
}