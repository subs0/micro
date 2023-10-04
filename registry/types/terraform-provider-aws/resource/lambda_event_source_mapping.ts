export interface LambdaEventSourceMapping {
    resource: Resource[];
}

export interface Resource {
    lambda_event_source_mapping: LambdaEventSourceMappingClass;
}

export interface LambdaEventSourceMappingClass {
    /** (Optional) Additional configuration block for Amazon Managed Kafka sources. Incompatible with "self_managed_event_source" and "self_managed_kafka_event_source_config". Detailed below. */
    amazon_managed_kafka_event_source_config?: any;
    /** (Optional) The largest number of records that Lambda will retrieve from your event source at the time of invocation. Defaults to `100` for DynamoDB, Kinesis, MQ and MSK, `10` for SQS. */
    batch_size?:                               any;
    /** (Optional) Determines if the mapping will be enabled on creation. Defaults to `true`. */
    enabled?:                                  any;
    /** (Optional) The event source ARN - this is required for Kinesis stream, DynamoDB stream, SQS queue, MQ broker, MSK cluster or DocumentDB change stream.  It is incompatible with a Self Managed Kafka source. */
    event_source_arn?:                         any;
    /** (Optional) The criteria to use for [event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html) Kinesis stream, DynamoDB stream, SQS queue event sources. Detailed below. */
    filter_criteria?:                          any;
    /** (Required) The name or the ARN of the Lambda function that will be subscribing to events. */
    function_name:                             any;
    /** (Optional) A list of current response type enums applied to the event source mapping for [AWS Lambda checkpointing](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-batchfailurereporting). Only available for SQS and stream sources (DynamoDB and Kinesis). Valid values: `ReportBatchItemFailures`. */
    function_response_types?:                  any;
    /** (Optional) The maximum amount of time to gather records before invoking the function, in seconds (between 0 and 300). Records will continue to buffer (or accumulate in the case of an SQS queue event source) until either `maximum_batching_window_in_seconds` expires or `batch_size` has been met. For streaming event sources, defaults to as soon as records are available in the stream. If the batch it reads from the stream/queue only has one record in it, Lambda only sends one record to the function. Only available for stream sources (DynamoDB and Kinesis) and SQS standard queues. */
    maximum_batching_window_in_seconds?:       any;
    /** (Optional) The name of the Amazon MQ broker destination queue to consume. Only available for MQ sources. The list must contain exactly one queue name. */
    queues?:                                   any;
    /** (Optional) Scaling configuration of the event source. Only available for SQS queues. Detailed below. */
    scaling_config?:                           any;
    /** (Optional) Additional configuration block for Self Managed Kafka sources. Incompatible with "event_source_arn" and "amazon_managed_kafka_event_source_config". Detailed below. */
    self_managed_kafka_event_source_config?:   any;
    /** (Optional) The position in the stream where AWS Lambda should start reading. Must be one of `AT_TIMESTAMP` (Kinesis only), `LATEST` or `TRIM_HORIZON` if getting events from Kinesis, DynamoDB, MSK or Self Managed Apache Kafka. Must not be provided if getting events from SQS. More information about these positions can be found in the [AWS DynamoDB Streams API Reference](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_streams_GetShardIterator.html) and [AWS Kinesis API Reference](https://docs.aws.amazon.com/kinesis/latest/APIReference/API_GetShardIterator.html#Kinesis-GetShardIterator-request-ShardIteratorType). */
    starting_position?:                        any;
    /** (Optional) A timestamp in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8) of the data record which to start reading when using `starting_position` set to `AT_TIMESTAMP`. If a record with this exact timestamp does not exist, the next later record is chosen. If the timestamp is older than the current trim horizon, the oldest available record is chosen. */
    starting_position_timestamp?:              any;
    /** (Optional) The name of the Kafka topics. Only available for MSK sources. A single topic name must be specified. */
    topics?:                                   any;
    /** (Optional) The duration in seconds of a processing window for [AWS Lambda streaming analytics](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-windows). The range is between 1 second up to 900 seconds. Only available for stream sources (DynamoDB and Kinesis). */
    tumbling_window_in_seconds?:               any;
    /** (Optional) A Kafka consumer group ID between 1 and 200 characters for use when creating this event source mapping. If one is not specified, this value will be automatically generated. See [SelfManagedKafkaEventSourceConfig Syntax](https://docs.aws.amazon.com/lambda/latest/dg/API_SelfManagedKafkaEventSourceConfig.html). */
    consumer_group_id?:                        any;
    /** (Optional) The destination configuration for failed invocations. Detailed below. */
    on_failure?:                               any;
    /** (Required) The Amazon Resource Name (ARN) of the destination resource. */
    destination_arn:                           any;
    /** (Optional) The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections. */
    collection_name?:                          any;
    /** (Required) The name of the database to consume within the DocumentDB cluster. */
    database_name:                             any;
    /** (Optional) Determines what DocumentDB sends to your event stream during document update operations. If set to `UpdateLookup`, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes. Valid values: `UpdateLookup`, `Default`. */
    full_document?:                            any;
    /** (Optional) A set of up to 5 filter. If an event satisfies at least one, Lambda sends the event to the function or adds it to the next batch. Detailed below. */
    filter?:                                   any;
    /** (Optional) A filter pattern up to 4096 characters. See [Filter Rule Syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax). */
    pattern?:                                  any;
    /** (Optional) Limits the number of concurrent instances that the Amazon SQS event source can invoke. Must be between `2` and `1000`. See [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency). */
    maximum_concurrency?:                      any;
    /** (Required) A map of endpoints for the self managed source.  For Kafka self-managed sources, the key should be `KAFKA_BOOTSTRAP_SERVERS` and the value should be a string with a comma separated list of broker endpoints. */
    endpoints:                                 any;
    /** (Required) The type of this configuration.  For Self Managed Kafka you will need to supply blocks for type `VPC_SUBNET` and `VPC_SECURITY_GROUP`. */
    type:                                      any;
    /** (Required) The URI for this configuration.  For type `VPC_SUBNET` the value should be `subnet:subnet_id` where `subnet_id` is the value you would find in an aws_subnet resource's id attribute.  For type `VPC_SECURITY_GROUP` the value should be `security_group:security_group_id` where `security_group_id` is the value you would find in an aws_security_group resource's id attribute. */
    uri:                                       any;
}