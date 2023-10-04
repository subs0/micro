export interface ConfigConfigurationAggregator {
    resource: Resource[];
}

export interface Resource {
    config_configuration_aggregator: ConfigConfigurationAggregatorClass;
}

export interface ConfigConfigurationAggregatorClass {
    /** (Required) The name of the configuration aggregator. */
    name:                             any;
    /** (Optional) The account(s) to aggregate config data from as documented below. */
    account_aggregation_source?:      any;
    /** (Optional) The organization to aggregate config data from as documented below. */
    organization_aggregation_source?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                            any;
    /** (Required) List of 12-digit account IDs of the account(s) being aggregated. */
    account_ids:                      any;
    /** (Optional) If true, aggregate existing AWS Config regions and future regions. */
    all_regions?:                     any;
    /** (Optional) List of source regions being aggregated. */
    regions?:                         any;
    /** (Required) ARN of the IAM role used to retrieve AWS Organization details associated with the aggregator account. */
    role_arn:                         any;
}