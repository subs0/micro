export interface CloudwatchLogStream {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_log_stream: CloudwatchLogStreamClass;
}

export interface CloudwatchLogStreamClass {
    /** (Required) The name of the log stream. Must not be longer than 512 characters and must not contain `:` */
    name:           any;
    /** (Required) The name of the log group under which the log stream is to be created. */
    log_group_name: any;
}