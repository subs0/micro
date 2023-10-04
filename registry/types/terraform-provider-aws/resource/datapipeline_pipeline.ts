export interface DatapipelinePipeline {
    resource: Resource[];
}

export interface Resource {
    datapipeline_pipeline: DatapipelinePipelineClass;
}

export interface DatapipelinePipelineClass {
    /** (Required) The name of Pipeline. */
    name:         any;
    /** (Optional) The description of Pipeline. */
    description?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:        any;
}