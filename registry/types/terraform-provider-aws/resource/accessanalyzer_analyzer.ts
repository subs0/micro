export interface AccessanalyzerAnalyzer {
    resource: Resource[];
}

export interface Resource {
    accessanalyzer_analyzer: AccessanalyzerAnalyzerClass;
}

export interface AccessanalyzerAnalyzerClass {
    /** (Required) Name of the Analyzer. */
    analyzer_name: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    /** (Optional) Type of Analyzer. Valid values are `ACCOUNT` or `ORGANIZATION`. Defaults to `ACCOUNT`. */
    type?:         any;
}