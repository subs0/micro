export interface QuicksightDashboard {
    resource: Resource[];
}

export interface Resource {
    quicksight_dashboard: QuicksightDashboardClass;
}

export interface QuicksightDashboardClass {
    /** (Required, Forces new resource) Identifier for the dashboard. */
    dashboard_id?:                             any;
    /** (Required) Display name for the dashboard. */
    name:                                      any;
    /** (Required) A description of the current dashboard version being created/updated. */
    version_description:                       any;
    /** (Optional, Forces new resource) AWS account ID. */
    aws_account_id?:                           any;
    dashboard_publish_options?:                DashboardPublishOptions;
    definition?:                               Definition;
    parameters?:                               Parameters;
    permissions?:                              Permissions;
    source_entity?:                            SourceEntity;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                     any;
    /** (Optional) The Amazon Resource Name (ARN) of the theme that is being used for this dashboard. The theme ARN must exist in the same AWS account where you create the dashboard. */
    theme_arn?:                                any;
    /** (Optional) The source template. See [source_template](#source_template). */
    source_template?:                          SourceTemplate;
    /** (Required) List of dataset references. See [data_set_references](#data_set_references). */
    data_set_references:                       DataSetReferences;
    /** (Optional) Ad hoc (one-time) filtering option. See [ad_hoc_filtering_option](#ad_hoc_filtering_option). */
    ad_hoc_filtering_option?:                  Option;
    /** (Optional) The drill-down options of data points in a dashboard. See [data_point_drill_up_down_option](#data_point_drill_up_down_option). */
    data_point_drill_up_down_option?:          Option;
    /** (Optional) The data point menu label options of a dashboard. See [data_point_menu_label_option](#data_point_menu_label_option). */
    data_point_menu_label_option?:             Option;
    /** (Optional) The data point tool tip options of a dashboard. See [data_point_tooltip_option](#data_point_tooltip_option). */
    data_point_tooltip_option?:                Option;
    /** (Optional) Export to .csv option. See [export_to_csv_option](#export_to_csv_option). */
    export_to_csv_option?:                     Option;
    /** (Optional) Determines if hidden fields are exported with a dashboard. See [export_with_hidden_fields_option](#export_with_hidden_fields_option). */
    export_with_hidden_fields_option?:         Option;
    /** (Optional) Sheet controls option. See [sheet_controls_option](#sheet_controls_option). */
    sheet_controls_option?:                    SheetControlsOption;
    /** (Optional) The sheet layout maximization options of a dashboard. See [sheet_layout_element_maximization_option](#sheet_layout_element_maximization_option). */
    sheet_layout_element_maximization_option?: Option;
    /** (Optional) The axis sort options of a dashboard. See [visual_axis_sort_option](#visual_axis_sort_option). */
    visual_axis_sort_option?:                  Option;
    /** (Optional) The menu options of a visual in a dashboard. See [visual_menu_option](#visual_menu_option). */
    visual_menu_option?:                       Option;
}

export interface Option {
    /** (Optional) Availability status. Possibles values: ENABLED, DISABLED. */
    availability_status: any;
}

export interface DashboardPublishOptions {
    /** (Optional) Ad hoc (one-time) filtering option. See [ad_hoc_filtering_option](#ad_hoc_filtering_option). */
    ad_hoc_filtering_option:                  any;
    /** (Optional) The drill-down options of data points in a dashboard. See [data_point_drill_up_down_option](#data_point_drill_up_down_option). */
    data_point_drill_up_down_option:          any;
    /** (Optional) The data point menu label options of a dashboard. See [data_point_menu_label_option](#data_point_menu_label_option). */
    data_point_menu_label_option:             any;
    /** (Optional) The data point tool tip options of a dashboard. See [data_point_tooltip_option](#data_point_tooltip_option). */
    data_point_tooltip_option:                any;
    /** (Optional) Export to .csv option. See [export_to_csv_option](#export_to_csv_option). */
    export_to_csv_option:                     any;
    /** (Optional) Determines if hidden fields are exported with a dashboard. See [export_with_hidden_fields_option](#export_with_hidden_fields_option). */
    export_with_hidden_fields_option:         any;
    /** (Optional) Sheet controls option. See [sheet_controls_option](#sheet_controls_option). */
    sheet_controls_option:                    any;
    /** (Optional) The sheet layout maximization options of a dashboard. See [sheet_layout_element_maximization_option](#sheet_layout_element_maximization_option). */
    sheet_layout_element_maximization_option: any;
    /** (Optional) The axis sort options of a dashboard. See [visual_axis_sort_option](#visual_axis_sort_option). */
    visual_axis_sort_option:                  any;
    /** (Optional) The menu options of a visual in a dashboard. See [visual_menu_option](#visual_menu_option). */
    visual_menu_option:                       any;
}

export interface DataSetReferences {
    /** (Required) Dataset Amazon Resource Name (ARN). */
    data_set_arn:         any;
    /** (Required) Dataset placeholder. */
    data_set_placeholder: any;
}

export interface Definition {
    /** (Required) A list dataset identifier declarations. With this mapping,you can use dataset identifiers instead of dataset Amazon Resource Names (ARNs) throughout the dashboard's sub-structures. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_DataSetIdentifierDeclaration.html). */
    data_set_identifiers_declarations: any;
    /** (Optional) The configuration for default analysis settings. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_AnalysisDefaults.html). */
    analysis_defaults:                 any;
    /** (Optional) A list of calculated field definitions for the dashboard. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_CalculatedField.html). */
    calculated_fields:                 any;
    /** (Optional) A list of dashboard-level column configurations. Column configurations are used to set default formatting for a column that's used throughout a dashboard. See [AWS API Documentation for complete description](ttps://docs.aws.amazon.com/quicksight/latest/APIReference/API_ColumnConfiguration.html). */
    column_configurations:             any;
    /** (Optional) A list of filter definitions for a dashboard. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_FilterGroup.html). For more information, see [Filtering Data](https://docs.aws.amazon.com/quicksight/latest/user/filtering-visual-data.html) in Amazon QuickSight User Guide. */
    filter_groups:                     any;
    /** (Optional) A list of parameter declarations for a dashboard. Parameters are named variables that can transfer a value for use by an action or an object. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_ParameterDeclaration.html). For more information, see [Parameters in Amazon QuickSight](https://docs.aws.amazon.com/quicksight/latest/user/parameters-in-quicksight.html) in the Amazon QuickSight User Guide. */
    parameters_declarations:           any;
    /** (Optional) A list of sheet definitions for a dashboard. See [AWS API Documentation for complete description](https://docs.aws.amazon.com/quicksight/latest/APIReference/API_SheetDefinition.html). */
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

export interface SheetControlsOption {
    /** (Optional) Visibility state. Possibles values: EXPANDED, COLLAPSED. */
    visibility_state: any;
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