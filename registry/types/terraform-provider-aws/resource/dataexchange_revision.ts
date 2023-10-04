export interface DataexchangeRevision {
    resource: Resource[];
}

export interface Resource {
    dataexchange_revision: DataexchangeRevisionClass;
}

export interface DataexchangeRevisionClass {
    /** (Required) The dataset id. */
    data_set_id: any;
    /** (Required) An optional comment about the revision. */
    comment:     any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:       any;
}