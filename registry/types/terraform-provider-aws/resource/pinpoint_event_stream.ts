export interface PinpointEventStream {
    resource: Resource[];
}

export interface Resource {
    pinpoint_event_stream: PinpointEventStreamClass;
}

export interface PinpointEventStreamClass {
    /** (Required) The application ID. */
    application_id:         any;
    /** (Required) The Amazon Resource Name (ARN) of the Amazon Kinesis stream or Firehose delivery stream to which you want to publish events. */
    destination_stream_arn: any;
    /** (Required) The IAM role that authorizes Amazon Pinpoint to publish events to the stream in your account. */
    role_arn:               any;
}