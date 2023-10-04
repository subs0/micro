export interface SesEventDestination {
    resource: Resource[];
}

export interface Resource {
    ses_event_destination: SesEventDestinationClass;
}

export interface SesEventDestinationClass {
    /** (Required) The name of the event destination */
    name:                    any;
    /** (Required) The name of the configuration set */
    configuration_set_name:  any;
    /** (Optional) If true, the event destination will be enabled */
    enabled?:                any;
    /** (Required) A list of matching types. May be any of `"send"`, `"reject"`, `"bounce"`, `"complaint"`, `"delivery"`, `"open"`, `"click"`, or `"renderingFailure"`. */
    matching_types:          any;
    /** (Optional) CloudWatch destination for the events */
    cloudwatch_destination?: any;
    /** (Optional) Send the events to a kinesis firehose destination */
    kinesis_destination?:    any;
    /** (Optional) Send the events to an SNS Topic destination */
    sns_destination?:        any;
    /** (Required) The default value for the event */
    default_value:           any;
    /** (Required) The name for the dimension */
    dimension_name:          any;
    /** (Required) The source for the value. May be any of `"messageTag"`, `"emailHeader"` or `"linkTag"`. */
    value_source:            any;
    /** (Required) The ARN of the Kinesis Stream */
    stream_arn:              any;
    /** (Required) The ARN of the role that has permissions to access the Kinesis Stream */
    role_arn:                any;
    /** (Required) The ARN of the SNS topic */
    topic_arn:               any;
}