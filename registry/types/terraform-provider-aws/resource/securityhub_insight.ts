export interface SecurityhubInsight {
    resource: Resource[];
}

export interface Resource {
    securityhub_insight: SecurityhubInsightClass;
}

export interface SecurityhubInsightClass {
    filters?:           { [key: any]: string };
    /** (Required) The attribute used to group the findings for the insight e.g., if an insight is grouped by `ResourceId`, then the insight produces a list of resource identifiers. */
    group_by_attribute: any;
    /** (Required) The name of the custom insight. */
    name:               any;
    /** (Optional) A configuration block of the date range for the date filter. See [date_range](#date_range-argument-reference) below for more details. */
    date_range?:        any;
    /** (Optional) An end date for the date filter. Required with `start` if `date_range` is not specified. */
    end?:               any;
    /** (Optional) A start date for the date filter. Required with `end` if `date_range` is not specified. */
    start?:             any;
    /** (Required) A date range unit for the date filter. Valid values: `DAYS`. */
    unit:               any;
    /** (Required) The string filter value. Valid values include: `NEW`, `NOTIFIED`, `SUPPRESSED`, and `RESOLVED`. */
    value:              any;
    /** (Required) A finding's CIDR value. */
    cidr:               any;
    /** (Required) The condition to apply to a string value when querying for findings. Valid values include: `EQUALS`, `PREFIX`, `NOT_EQUALS`, `PREFIX_NOT_EQUALS`. */
    comparison:         any;
    /** (Required) The key of the map filter. For example, for `ResourceTags`, `Key` identifies the name of the tag. For `UserDefinedFields`, `Key` is the name of the field. */
    key:                any;
    /** (Optional) The equal-to condition to be applied to a single field when querying for findings, provided as a String. */
    eq?:                any;
    /** (Optional) The greater-than-equal condition to be applied to a single field when querying for findings, provided as a String. */
    gte?:               any;
    /** (Optional) The less-than-equal condition to be applied to a single field when querying for findings, provided as a String. */
    lte?:               any;
}