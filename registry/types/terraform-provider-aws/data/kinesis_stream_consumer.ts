export interface KinesisStreamConsumer {
    data: Datum[];
}

export interface Datum {
    kinesis_stream_consumer: KinesisStreamConsumerClass;
}

export interface KinesisStreamConsumerClass {
    /** (Optional) ARN of the stream consumer. */
    arn?:       any;
    /** (Optional) Name of the stream consumer. */
    name?:      any;
    /** (Required) ARN of the data stream the consumer is registered with. */
    stream_arn: any;
}