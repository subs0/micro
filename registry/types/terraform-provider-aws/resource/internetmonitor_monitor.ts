export interface InternetmonitorMonitor {
    resource: Resource[];
}

export interface Resource {
    internetmonitor_monitor: InternetmonitorMonitorClass;
}

export interface InternetmonitorMonitorClass {
    /** (Required) The name of the monitor. */
    monitor_name:                        any;
    /** (Optional) Health event thresholds. A health event threshold percentage, for performance and availability, determines when Internet Monitor creates a health event when there's an internet issue that affects your application end users. See [Health Events Config](#health-events-config) below. */
    health_events_config?:               any;
    /** (Optional) Publish internet measurements for Internet Monitor to an Amazon S3 bucket in addition to CloudWatch Logs. */
    internet_measurements_log_delivery?: any;
    /** (Optional) The maximum number of city-networks to monitor for your resources. A city-network is the location (city) where clients access your application resources from and the network or ASN, such as an internet service provider (ISP), that clients access the resources through. This limit helps control billing costs. */
    max_city_networks_to_monitor?:       any;
    /** (Optional) The resources to include in a monitor, which you provide as a set of Amazon Resource Names (ARNs). */
    resources?:                          any;
    /** (Optional) The status for a monitor. The accepted values for Status with the UpdateMonitor API call are the following: `ACTIVE` and `INACTIVE`. */
    status?:                             any;
    /** (Optional) Map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                               any;
    /** (Optional) The percentage of the internet-facing traffic for your application that you want to monitor with this monitor. */
    traffic_percentage_to_monitor?:      any;
    /** (Optional) The health event threshold percentage set for availability scores. */
    availability_score_threshold?:       any;
    /** (Optional) The health event threshold percentage set for performance scores. */
    performance_score_threshold?:        any;
}