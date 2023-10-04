export interface CeAnomalySubscription {
    resource: Resource[];
}

export interface Resource {
    ce_anomaly_subscription: CeAnomalySubscriptionClass;
}

export interface CeAnomalySubscriptionClass {
    /** (Optional) The unique identifier for the AWS account in which the anomaly subscription ought to be created. */
    account_id?:           any;
    /** (Required) The frequency that anomaly reports are sent. Valid Values: `DAILY` | `IMMEDIATE` | `WEEKLY`. */
    frequency:             any;
    /** (Required) A list of cost anomaly monitors. */
    monitor_arn_list:      any;
    /** (Required) The name for the subscription. */
    name:                  any;
    /** (Required) A subscriber configuration. Multiple subscribers can be defined. */
    subscriber:            any;
    /** (Required) The type of subscription. Valid Values: `SNS` | `EMAIL`. */
    type:                  any;
    /** (Required) The address of the subscriber. If type is `SNS`, this will be the arn of the sns topic. If type is `EMAIL`, this will be the destination email address. */
    address:               any;
    /** (Optional) The dollar value that triggers a notification if the threshold is exceeded. Depracated, use `threshold_expression` instead. */
    threshold?:            any;
    /** (Optional) An Expression object used to specify the anomalies that you want to generate alerts for. See [Threshold Expression](#threshold-expression). */
    threshold_expression?: any;
    /** (Optional) Configuration block for the specific Tag to use for. See [Tags](#tags) below. */
    tags?:                 any;
    /** (Optional) Return results that match both [Dimension](#dimension) objects. */
    and?:                  any;
    /** (Optional) Configuration block for the filter that's based on  values. See [Cost Category](#cost-category) below. */
    cost_category?:        any;
    /** (Optional) Configuration block for the specific [Dimension](#dimension) to use for. */
    dimension?:            any;
    /** (Optional) Return results that match both [Dimension](#dimension) object. */
    not?:                  any;
    /** (Optional) Return results that match both [Dimension](#dimension) object. */
    or?:                   any;
    /** (Optional) Key for the tag. */
    key?:                  any;
    /** (Optional) Match options that you can use to filter your results. MatchOptions is only applicable for actions related to cost category. The default values for MatchOptions is `EQUALS` and `CASE_SENSITIVE`. Valid values are: `EQUALS`,  `ABSENT`, `STARTS_WITH`, `ENDS_WITH`, `CONTAINS`, `CASE_SENSITIVE`, `CASE_INSENSITIVE`. */
    match_options?:        any;
    /** (Optional) Specific value of the Cost Category. */
    values?:               any;
}