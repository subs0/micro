export interface Sesv2ConfigurationSetEventDestination {
    resource: Resource[];
}

export interface Resource {
    sesv2_configuration_set_event_destination: Sesv2ConfigurationSetEventDestinationClass;
}

export interface Sesv2ConfigurationSetEventDestinationClass {
    /** (Required) The name of the configuration set. */
    configuration_set_name:        any;
    event_destination:             EventDestination;
    /** (Required) An object that defines the event destination. See [event_destination](#event_destination) below. */
    event_destination_name:        any;
    /** (Optional) An object that defines an Amazon CloudWatch destination for email events. See [cloud_watch_destination](#cloud_watch_destination) below */
    cloud_watch_destination?:      CloudWatchDestination;
    /** (Optional) An object that defines an Amazon Kinesis Data Firehose destination for email events. See [kinesis_firehose_destination](#kinesis_firehose_destination) below. */
    kinesis_firehose_destination?: KinesisFirehoseDestination;
    /** (Optional) An object that defines an Amazon Pinpoint project destination for email events. See [pinpoint_destination](#pinpoint_destination) below. */
    pinpoint_destination?:         PinpointDestination;
    /** (Optional) An object that defines an Amazon SNS destination for email events. See [sns_destination](#sns_destination) below. */
    sns_destination?:              SnsDestination;
    /** (Required) An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch. See [dimension_configuration](#dimension_configuration) below. */
    dimension_configuration:       DimensionConfiguration;
}

export interface CloudWatchDestination {
    /** (Required) An array of objects that define the dimensions to use when you send email events to Amazon CloudWatch. See [dimension_configuration](#dimension_configuration) below. */
    dimension_configuration: any;
}

export interface DimensionConfiguration {
    /** (Required) The default value of the dimension that is published to Amazon CloudWatch if you don't provide the value of the dimension when you send an email. */
    default_dimension_value: any;
    /** (Required) The name of an Amazon CloudWatch dimension associated with an email sending metric. */
    dimension_name:          any;
    /** (Required) The location where the Amazon SES API v2 finds the value of a dimension to publish to Amazon CloudWatch. Valid values: `MESSAGE_TAG`, `EMAIL_HEADER`, `LINK_TAG`. */
    dimension_value_source:  any;
}

export interface EventDestination {
    /** (Required) - An array that specifies which events the Amazon SES API v2 should send to the destinations. Valid values: `SEND`, `REJECT`, `BOUNCE`, `COMPLAINT`, `DELIVERY`, `OPEN`, `CLICK`, `RENDERING_FAILURE`, `DELIVERY_DELAY`, `SUBSCRIPTION`. */
    matching_event_types:          any;
    /** (Optional) An object that defines an Amazon CloudWatch destination for email events. See [cloud_watch_destination](#cloud_watch_destination) below */
    cloud_watch_destination?:      any;
    /** (Optional) When the event destination is enabled, the specified event types are sent to the destinations. Default: `false`. */
    enabled?:                      any;
    /** (Optional) An object that defines an Amazon Kinesis Data Firehose destination for email events. See [kinesis_firehose_destination](#kinesis_firehose_destination) below. */
    kinesis_firehose_destination?: any;
    /** (Optional) An object that defines an Amazon Pinpoint project destination for email events. See [pinpoint_destination](#pinpoint_destination) below. */
    pinpoint_destination?:         any;
    /** (Optional) An object that defines an Amazon SNS destination for email events. See [sns_destination](#sns_destination) below. */
    sns_destination?:              any;
}

export interface KinesisFirehoseDestination {
    /** (Required) The Amazon Resource Name (ARN) of the Amazon Kinesis Data Firehose stream that the Amazon SES API v2 sends email events to. */
    delivery_stream_arn: any;
    /** (Required) The Amazon Resource Name (ARN) of the IAM role that the Amazon SES API v2 uses to send email events to the Amazon Kinesis Data Firehose stream. */
    iam_role_arn:        any;
}

export interface PinpointDestination {
    /** (Required) The Amazon Resource Name (ARN) of the Amazon Pinpoint project to send email events to. */
    pinpoint_application_arn: any;
}

export interface SnsDestination {
    /** (Required) The Amazon Resource Name (ARN) of the Amazon SNS topic to publish email events to. */
    topic_arn: any;
}