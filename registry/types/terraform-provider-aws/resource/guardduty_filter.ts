export interface GuarddutyFilter {
    resource: Resource[];
}

export interface Resource {
    guardduty_filter: GuarddutyFilterClass;
}

export interface GuarddutyFilterClass {
    /** (Required) ID of a GuardDuty detector, attached to your account. */
    detector_id:            any;
    /** (Required) The name of your filter. */
    name:                   any;
    /** (Optional) Description of the filter. */
    description?:           any;
    /** (Required) Specifies the position of the filter in the list of current filters. Also specifies the order in which this filter is applied to the findings. */
    rank:                   any;
    /** (Required) Specifies the action that is to be applied to the findings that match the filter. Can be one of `ARCHIVE` or `NOOP`. */
    action:                 any;
    /** (Required) The name of the field to be evaluated. The full list of field names can be found in [AWS documentation](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_filter-findings.html#filter_criteria). */
    field:                  any;
    /** (Optional) List of string values to be evaluated. */
    equals?:                any;
    /** (Optional) List of string values to be evaluated. */
    not_equals?:            any;
    /** (Optional) A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    greater_than?:          any;
    /** (Optional) A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    greater_than_or_equal?: any;
    /** (Optional) A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    less_than?:             any;
    /** (Optional) A value to be evaluated. Accepts either an integer or a date in [RFC 3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    less_than_or_equal?:    any;
}