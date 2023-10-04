export interface Ec2NetworkInsightsAnalysis {
    resource: Resource[];
}

export interface Resource {
    ec2_network_insights_analysis: Ec2NetworkInsightsAnalysisClass;
}

export interface Ec2NetworkInsightsAnalysisClass {
    /** (Required) ID of the Network Insights Path to run an analysis on. */
    network_insights_path_id: any;
    /** (Optional) A list of ARNs for resources the path must traverse. */
    filter_in_arns?:          any;
    /** (Optional) If enabled, the resource will wait for the Network Insights Analysis status to change to `succeeded` or `failed`. Setting this to `false` will skip the process. Default: `true`. */
    wait_for_completion?:     any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
}