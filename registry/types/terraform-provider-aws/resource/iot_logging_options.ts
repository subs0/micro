export interface IotLoggingOptions {
    resource: Resource[];
}

export interface Resource {
    iot_logging_options: IotLoggingOptionsClass;
}

export interface IotLoggingOptionsClass {
    /** (Optional) The default logging level. Valid Values: `"DEBUG"`, `"INFO"`, `"ERROR"`, `"WARN"`, `"DISABLED"`. */
    default_log_level?: any;
    /** (Optional) If `true` all logs are disabled. The default is `false`. */
    disable_all_logs?:  any;
    /** (Required) The ARN of the role that allows IoT to write to Cloudwatch logs. */
    role_arn:           any;
}