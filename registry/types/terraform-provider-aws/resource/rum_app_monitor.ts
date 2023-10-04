export interface RumAppMonitor {
    resource: Resource[];
}

export interface Resource {
    rum_app_monitor: RumAppMonitorClass;
}

export interface RumAppMonitorClass {
    /** (Required) The name of the log stream. */
    name:                       any;
    /** (Required) The top-level internet domain name for which your application has administrative authority. */
    domain:                     any;
    app_monitor_configuration?: AppMonitorConfiguration;
    /** (Optional) Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter  specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. Default value is `false`. */
    cw_log_enabled?:            any;
    custom_events?:             CustomEvents;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                      any;
}

export interface AppMonitorConfiguration {
    /** (Optional) If you set this to `true`, RUM web client sets two cookies, a session cookie  and a user cookie. The cookies allow the RUM web client to collect data relating to the number of users an application has and the behavior of the application across a sequence of events. Cookies are stored in the top-level domain of the current page. */
    allow_cookies:       any;
    /** (Optional) If you set this to `true`, RUM enables X-Ray tracing for the user sessions  that RUM samples. RUM adds an X-Ray trace header to allowed HTTP requests. It also records an X-Ray segment for allowed HTTP requests. */
    enable_xray:         any;
    /** (Optional) A list of URLs in your website or application to exclude from RUM data collection. */
    excluded_pages:      any;
    /** (Optional) A list of pages in the CloudWatch RUM console that are to be displayed with a "favorite" icon. */
    favorite_pages:      any;
    /** (Optional) The ARN of the guest IAM role that is attached to the Amazon Cognito identity pool that is used to authorize the sending of data to RUM. */
    guest_role_arn:      any;
    /** (Optional) The ID of the Amazon Cognito identity pool that is used to authorize the sending of data to RUM. */
    identity_pool_id:    any;
    /** (Optional)  If this app monitor is to collect data from only certain pages in your application, this structure lists those pages. */
    included_pages:      any;
    /** (Optional) Specifies the percentage of user sessions to use for RUM data collection. Choosing a higher percentage gives you more data but also incurs more costs. The number you specify is the percentage of user sessions that will be used. Default value is `0.1`. */
    session_sample_rate: any;
    /** (Optional) An array that lists the types of telemetry data that this app monitor is to collect. Valid values are `errors`, `performance`, and `http`. */
    telemetries:         any;
}

export interface CustomEvents {
    /** (Optional) Specifies whether this app monitor allows the web client to define and send custom events. The default is for custom events to be `DISABLED`. Valid values are `DISABLED` and `ENABLED`. */
    status: any;
}