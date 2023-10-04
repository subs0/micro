export interface KinesisStreamConsumer {
    resource: Resource[];
}

export interface Resource {
    kinesis_stream_consumer: KinesisStreamConsumerClass;
}

export interface KinesisStreamConsumerClass {
    /** (Required, Forces new resource) Name of the stream consumer. */
    name?: any;
}