export interface GlueDataQualityRuleset {
    resource: Resource[];
}

export interface Resource {
    glue_data_quality_ruleset: GlueDataQualityRulesetClass;
}

export interface GlueDataQualityRulesetClass {
    /** (Optional) Description of the data quality ruleset. */
    description?:  any;
    /** (Required, Forces new resource) Name of the data quality ruleset. */
    name?:         any;
    /** (Optional) A Data Quality Definition Language (DQDL) ruleset. For more information, see the AWS Glue developer guide. */
    ruleset?:      any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:         any;
    target_table?: TargetTable;
}

export interface TargetTable {
    /** (Optional, Forces new resource) The catalog id where the AWS Glue table exists. */
    catalog_id:    any;
    /** (Required, Forces new resource) Name of the database where the AWS Glue table exists. */
    database_name: any;
    /** (Required, Forces new resource) Name of the AWS Glue table. */
    table_name:    any;
}