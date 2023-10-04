export interface QuicksightTemplate {
    resource: Resource[];
}

export interface Resource {
    quicksight_template: QuicksightTemplateClass;
}

export interface QuicksightTemplateClass {
    /** (Required, Forces new resource) Identifier for the template. */
    template_id?:        any;
    /** (Required) Display name for the template. */
    name:                any;
    /** (Required) A description of the current template version being created/updated. */
    version_description: any;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:     any;
    definition?:         Definition;
    permissions?:        Permissions;
    source_entity?:      SourceEntity;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) The source analysis, if it is based on an analysis.. Only one of `source_analysis` or `source_template` should be configured. See [source_analysis](#source_analysis). */
    source_analysis?:    SourceAnalysis;
    /** (Optional) The source template, if it is based on an template.. Only one of `source_analysis` or `source_template` should be configured. See [source_template](#source_template). */
    source_template?:    SourceTemplate;
    /** (Required) A list of dataset references used as placeholders in the template. See [data_set_references](#data_set_references). */
    data_set_references: DataSetReferences;
}

export interface DataSetReferences {
    /** (Required) Dataset Amazon Resource Name (ARN). */
    data_set_arn:         any;
    /** (Required) Dataset placeholder. */
    data_set_placeholder: any;
}

export interface Definition {
    /** (Required) A list of dataset configurations. These configurations define the required columns for each dataset used within a template. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSetConfiguration.html). */
    data_set_configuration:  any;
    /** (Optional) The configuration for default analysis settings. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AnalysisDefaults.html). */
    analysis_defaults:       any;
    /** (Optional) A list of calculated field definitions for the template. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CalculatedField.html). */
    calculated_fields:       any;
    /** (Optional) A list of template-level column configurations. Column configurations are used to set default formatting for a column that's used throughout a template. See [AWS API Documentation for complete description](ttps://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnConfiguration.html). */
    column_configurations:   any;
    /** (Optional) A list of filter definitions for a template. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_FilterGroup.html). For more information, see [Filtering Data](https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html) in Amazon QuickSight User Guide. */
    filter_groups:           any;
    /** (Optional) A list of parameter declarations for a template. Parameters are named variables that can transfer a value for use by an action or an object. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ParameterDeclaration.html). For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the Amazon QuickSight User Guide. */
    parameters_declarations: any;
    /** (Optional) A list of sheet definitions for a template. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SheetDefinition.html). */
    sheets:                  any;
}

export interface Permissions {
    /** (Required) List of IAM actions to grant or revoke permissions on. */
    actions:   any;
    /** (Required) ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values. */
    principal: any;
}

export interface SourceAnalysis {
    /** (Required) The Amazon Resource Name (ARN) of the resource. */
    arn:                 any;
    /** (Required) A list of dataset references used as placeholders in the template. See [data_set_references](#data_set_references). */
    data_set_references: any;
}

export interface SourceEntity {
    /** (Optional) The source analysis, if it is based on an analysis.. Only one of `source_analysis` or `source_template` should be configured. See [source_analysis](#source_analysis). */
    source_analysis: any;
    /** (Optional) The source template, if it is based on an template.. Only one of `source_analysis` or `source_template` should be configured. See [source_template](#source_template). */
    source_template: any;
}

export interface SourceTemplate {
    /** (Required) The Amazon Resource Name (ARN) of the resource. */
    arn: any;
}