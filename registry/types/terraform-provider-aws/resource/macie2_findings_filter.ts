export interface Macie2FindingsFilter {
    resource: Resource[];
}

export interface Resource {
    macie2_findings_filter: Macie2FindingsFilterClass;
}

export interface Macie2FindingsFilterClass {
    /** (Required) The criteria to use to filter findings. */
    finding_criteria: any;
    /** (Optional) A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters. If omitted, Terraform will assign a random, unique name. Conflicts with `name_prefix`. */
    name?:            any;
    /**  (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:     any;
    /** (Optional) A custom description of the filter. The description can contain as many as 512 characters. */
    description?:     any;
    /** (Required) The action to perform on findings that meet the filter criteria (`finding_criteria`). Valid values are: `ARCHIVE`, suppress (automatically archive) the findings; and, `NOOP`, don't perform any action on the findings. */
    action:           any;
    /** (Optional) The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings. */
    position?:        any;
    /** (Optional) A map of key-value pairs that specifies the tags to associate with the filter. */
    tags?:            any;
    /**  (Optional) A condition that specifies the property, operator, and one or more values to use to filter the results.  (documented below) */
    criterion?:       any;
    /** (Required) The name of the field to be evaluated. */
    field:            any;
    /** (Optional) The value for the property exclusively matches (equals an exact match for) all the specified values. If you specify multiple values, Amazon Macie uses AND logic to join the values. */
    eq_exact_match?:  any;
    /** (Optional) The value for the property matches (equals) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values. */
    eq?:              any;
    /** (Optional) The value for the property doesn't match (doesn't equal) the specified value. If you specify multiple values, Amazon Macie uses OR logic to join the values. */
    neq?:             any;
    /** (Optional) The value for the property is less than the specified value. */
    lt?:              any;
    /** (Optional) The value for the property is less than or equal to the specified value. */
    lte?:             any;
    /** (Optional) The value for the property is greater than the specified value. */
    gt?:              any;
    /** (Optional) The value for the property is greater than or equal to the specified value. */
    gte?:             any;
}