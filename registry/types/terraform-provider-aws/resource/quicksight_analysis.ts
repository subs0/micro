export interface QuicksightAnalysis {
    resource: Resource[];
}

export interface Resource {
    quicksight_analysis: QuicksightAnalysisClass;
}

export interface QuicksightAnalysisClass {
    /** (Required, Forces new resource) Identifier for the analysis. */
    analysis_id?:             any;
    /** (Required) Display name for the analysis. */
    name:                     any;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:          any;
    definition?:              Definition;
    parameters?:              Parameters;
    permissions?:             Permissions;
    /** (Optional) A value that specifies the number of days that Amazon QuickSight waits before it deletes the analysis. Use `0` to force deletion without recovery. Minimum value of `7`. Maximum value of `30`. Default to `30`. */
    recovery_window_in_days?: any;
    source_entity?:           SourceEntity;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Optional) The Amazon Resource Name (ARN) of the theme that is being used for this analysis. The theme ARN must exist in the same AWS account where you create the analysis. */
    theme_arn?:               any;
    /** (Optional) The source template. See [source_template](#source_template). */
    source_template?:         SourceTemplate;
    /** (Required) List of dataset references. See [data_set_references](#data_set_references). */
    data_set_references:      DataSetReferences;
}

export interface DataSetReferences {
    /** (Required) Dataset Amazon Resource Name (ARN). */
    data_set_arn:         any;
    /** (Required) Dataset placeholder. */
    data_set_placeholder: any;
}

export interface Definition {
    /** (Required) A list dataset identifier declarations. With this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the analysis sub-structures. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSetIdentifierDeclaration.html). */
    data_set_identifiers_declarations: any;
    /** (Optional) The configuration for default analysis settings. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AnalysisDefaults.html). */
    analysis_defaults:                 any;
    /** (Optional) A list of calculated field definitions for the analysis. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CalculatedField.html). */
    calculated_fields:                 any;
    /** (Optional) A list of analysis-level column configurations. Column configurations are used to set default formatting for a column that's used throughout an analysis. See [AWS API Documentation for complete description](ttps://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnConfiguration.html). */
    column_configurations:             any;
    /** (Optional) A list of filter definitions for an analysis. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_FilterGroup.html). For more information, see [Filtering Data](https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html) in Amazon QuickSight User Guide. */
    filter_groups:                     any;
    /** (Optional) A list of parameter declarations for an analysis. Parameters are named variables that can transfer a value for use by an action or an object. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ParameterDeclaration.html). For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the Amazon QuickSight User Guide. */
    parameters_declarations:           any;
    /** (Optional) A list of sheet definitions for an analysis. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SheetDefinition.html). */
    sheets:                            any;
}

export interface Parameters {
    /** (Optional) A list of parameters that have a data type of date-time. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DateTimeParameter.html). */
    date_time_parameters: any;
    /** (Optional) A list of parameters that have a data type of decimal. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DecimalParameter.html). */
    decimal_parameters:   any;
    /** (Optional) A list of parameters that have a data type of integer. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_IntegerParameter.html). */
    integer_parameters:   any;
    any_parameters:    string;
}

export interface Permissions {
    /** (Required) List of IAM actions to grant or revoke permissions on. */
    actions:   any;
    /** (Required) ARN of the principal. See the [ResourcePermission documentation](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ResourcePermission.html) for the applicable ARN values. */
    principal: any;
}

export interface SourceEntity {
    /** (Optional) The source template. See [source_template](#source_template). */
    source_template: any;
}

export interface SourceTemplate {
    /** (Required) The Amazon Resource Name (ARN) of the resource. */
    arn:                 any;
    /** (Required) List of dataset references. See [data_set_references](#data_set_references). */
    data_set_references: any;
}