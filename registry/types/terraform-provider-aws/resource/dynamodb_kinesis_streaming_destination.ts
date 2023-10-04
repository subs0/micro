export interface DynamodbKinesisStreamingDestination {
    resource: Resource[];
}

export interface Resource {
    dynamodb_kinesis_streaming_destination: DynamodbKinesisStreamingDestinationClass;
}

export interface DynamodbKinesisStreamingDestinationClass {
    /** (Required) The ARN for a Kinesis data stream. This must exist in the same account and region as the DynamoDB table. */
    stream_arn: any;
    /** (Required) The name of the DynamoDB table. There */
    table_name: any;
    /** The `table_name` and `stream_arn` separated by a comma (`,`). */
    id?:        any;
}