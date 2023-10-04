export interface GlueWorkflow {
    resource: Resource[];
}

export interface Resource {
    glue_workflow: GlueWorkflowClass;
}

export interface GlueWorkflowClass {
    /** (Optional) Prevents exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs. */
    max_concurrent_runs?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}