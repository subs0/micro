export interface CeAnomalyMonitor {
    resource: Resource[];
}

export interface Resource {
    ce_anomaly_monitor: CeAnomalyMonitorClass;
}

export interface CeAnomalyMonitorClass {
    /** (Required) The name of the monitor. */
    name:                   any;
    /** (Required) The possible type values. Valid values: `DIMENSIONAL` | `CUSTOM`. */
    monitor_type:           any;
    /** (Required, if `monitor_type` is `DIMENSIONAL`) The dimensions to evaluate. Valid values: `SERVICE`. */
    monitor_dimension?:     any;
    /** (Required, if `monitor_type` is `CUSTOM`) A valid JSON representation for the [Expression](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_Expression.html) object. */
    monitor_specification?: any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
}