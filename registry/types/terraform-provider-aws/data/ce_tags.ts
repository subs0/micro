export interface CeTags {
    data: Datum[];
}

export interface Datum {
    ce_tags: CeTagsClass;
}

export interface CeTagsClass {
    /** (Required) Configuration block for the start and end dates for retrieving the dimension values. */
    time_period:    any;
    /** (Optional) Configuration block for the `Expression` object used to categorize costs. See below. */
    filter?:        any;
    search_any?: string;
    /** (Optional) Configuration block for the value by which you want to sort the data. See below. */
    sort_by?:       any;
    /** (Optional) Key of the tag that you want to return values for. */
    tag_key?:       any;
    /** (Required) End of the time period. */
    start:          any;
    /** (Required) Beginning of the time period. */
    end:            any;
    /** (Optional) Return results that match both `Dimension` objects. */
    and?:           any;
    /** (Optional) Configuration block for the filter that's based on `CostCategory` values. See below. */
    cost_category?: any;
    /** (Optional) Configuration block for the specific `Dimension` to use for `Expression`. See below. */
    dimension?:     any;
    /** (Optional) Return results that match both `Dimension` object. */
    not?:           any;
    /** (Optional) Return results that match both `Dimension` object. */
    or?:            any;
    /** (Optional) Configuration block for the specific `Tag` to use for `Expression`. See below. */
    tag?:           any;
    /** (Required) key that's used to sort the data. Valid values are: `BlendedCost`,  `UnblendedCost`, `AmortizedCost`, `NetAmortizedCost`, `NetUnblendedCost`, `UsageQuantity`, `NormalizedUsageAmount`. */
    key:            any;
    /** (Optional) Match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for MatchOptions is `EQUALS` and `CASE_SENSITIVE`. Valid values are: `EQUALS`,  `ABSENT`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CASE_SENSITIVE`, `CASE_INSENSITIVE`. */
    match_options?: any;
    /** (Optional) Specific value of the Cost Category. */
    values?:        any;
    /** (Optional) order that's used to sort the data. Valid values are: `ASCENDING`,  `DESCENDING`. */
    sort_order?:    any;
}