export interface CeCostCategory {
    resource: Resource[];
}

export interface Resource {
    ce_cost_category: CeCostCategoryClass;
}

export interface CeCostCategoryClass {
    /** (Required) Unique name for the Cost Category. */
    name:               any;
    /** (Required) Configuration block for the Cost Category rules used to categorize costs. See below. */
    rule:               any;
    /** (Required) Rule schema version in this particular Cost Category. */
    rule_version:       any;
    /** (Optional) Default value for the cost category. */
    default_value?:     any;
    /** (Optional) Configuration block for the split charge rules used to allocate your charges between your Cost Category values. See below. */
    split_charge_rule?: any;
    /** (Optional) Configuration block for the specific `Tag` to use for `Expression`. See below. */
    tags?:              any;
    /** (Optional) Configuration block for the value the line item is categorized as if the line item contains the matched dimension. See below. */
    inherited_value?:   any;
    /** (Optional) Parameter type. */
    type?:              any;
    /** (Optional) Default value for the cost category. */
    value?:             any;
    /** (Optional) Key to extract cost category values. */
    dimension_key?:     any;
    /** (Optional) Name of the dimension that's used to group costs. If you specify `LINKED_ACCOUNT_NAME`, the cost category value is based on account name. If you specify `TAG`, the cost category value will be based on the value of the specified tag key. Valid values are `LINKED_ACCOUNT_NAME`, `TAG` */
    dimension_name?:    any;
    /** (Optional) Return results that match both `Dimension` objects. */
    and?:               any;
    /** (Optional) Configuration block for the filter that's based on `CostCategory` values. See below. */
    cost_category?:     any;
    /** (Optional) Configuration block for the specific `Dimension` to use for `Expression`. See below. */
    dimension?:         any;
    /** (Optional) Return results that match both `Dimension` object. */
    not?:               any;
    /** (Optional) Return results that match both `Dimension` object. */
    or?:                any;
    /** (Optional) Key for the tag. */
    key?:               any;
    /** (Optional) Match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for MatchOptions is `EQUALS` and `CASE_SENSITIVE`. Valid values are: `EQUALS`,  `ABSENT`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CASE_SENSITIVE`, `CASE_INSENSITIVE`. */
    match_options?:     any;
    /** (Optional) Parameter values. */
    values?:            any;
    /** (Required) Method that's used to define how to split your source costs across your targets. Valid values are `FIXED`, `PROPORTIONAL`, `EVEN` */
    method:             any;
    /** (Optional) Configuration block for the parameters for a split charge method. This is only required for the `FIXED` method. See below. */
    parameter?:         any;
    /** (Required) Cost Category value that you want to split. */
    source:             any;
    /** (Required) Cost Category values that you want to split costs across. These values can't be used as a source in other split charge rules. */
    targets:            any;
}