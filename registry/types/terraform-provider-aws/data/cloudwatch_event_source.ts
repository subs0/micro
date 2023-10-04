export interface CloudwatchEventSource {
    data: Datum[];
}

export interface Datum {
    cloudwatch_event_source: CloudwatchEventSourceClass;
}

export interface CloudwatchEventSourceClass {
    /** (Optional) Specifying this limits the results to only those partner event sources with names that start with the specified prefix */
    name_prefix?: any;
}