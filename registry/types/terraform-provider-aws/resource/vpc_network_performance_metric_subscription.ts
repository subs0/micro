export interface VpcNetworkPerformanceMetricSubscription {
    resource: Resource[];
}

export interface Resource {
    vpc_network_performance_metric_subscription: VpcNetworkPerformanceMetricSubscriptionClass;
}

export interface VpcNetworkPerformanceMetricSubscriptionClass {
    /** (Required) The target Region or Availability Zone that the metric subscription is enabled for. For example, `eu-west-1`. */
    destination: any;
    /** (Optional) The metric used for the enabled subscription. Valid values: `aggregate-latency`. Default: `aggregate-latency`. */
    metric?:     any;
    /** (Required) The source Region or Availability Zone that the metric subscription is enabled for. For example, `us-east-1`. */
    source:      any;
    /** (Optional) The statistic used for the enabled subscription. Valid values: `p50`. Default: `p50`. */
    statistic?:  any;
}