export interface NetworkfirewallLoggingConfiguration {
    resource: Resource[];
}

export interface Resource {
    networkfirewall_logging_configuration: NetworkfirewallLoggingConfigurationClass;
}

export interface NetworkfirewallLoggingConfigurationClass {
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the Network Firewall firewall. */
    firewall_arn?:          any;
    /** (Required) A configuration block describing how AWS Network Firewall performs logging for a firewall. See [Logging Configuration](#logging-configuration) below for details. */
    logging_configuration:  any;
    /** (Required) Set of configuration blocks describing the logging details for a firewall. See [Log Destination Config](#log-destination-config) below for details. At most, only two blocks can be specified; one for `FLOW` logs and one for `ALERT` logs. */
    log_destination_config: any;
    /** (Required) A map describing the logging destination for the chosen `log_destination_type`. */
    log_destination:        any;
    /** (Required) The location to send logs to. Valid values: `S3`, `CloudWatchLogs`, `KinesisDataFirehose`. */
    log_destination_type:   any;
    /** (Required) The type of log to send. Valid values: `ALERT` or `FLOW`. Alert logs report traffic that matches a `StatefulRule` with an action setting that sends a log message. Flow logs are standard network traffic flow logs. */
    log_type:               any;
}