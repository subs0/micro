export interface CloudfrontMonitoringSubscription {
    resource: Resource[];
}

export interface Resource {
    cloudfront_monitoring_subscription: CloudfrontMonitoringSubscriptionClass;
}

export interface CloudfrontMonitoringSubscriptionClass {
    /** (Required) The ID of the distribution that you are enabling metrics for. */
    distribution_id:                      any;
    monitoring_subscription:              MonitoringSubscription;
    /** (Required) A subscription configuration for additional CloudWatch metrics. See below. */
    realtime_metrics_subscription_config: RealtimeMetricsSubscriptionConfig;
}

export interface MonitoringSubscription {
    /** (Required) A subscription configuration for additional CloudWatch metrics. See below. */
    realtime_metrics_subscription_config: any;
}

export interface RealtimeMetricsSubscriptionConfig {
    /** (Required) A flag that indicates whether additional CloudWatch metrics are enabled for a given CloudFront distribution. Valid values are `Enabled` and `Disabled`. See below. */
    realtime_metrics_subscription_status: any;
}