export interface KinesisFirehoseDeliveryStream {
    data: Datum[];
}

export interface Datum {
    kinesis_firehose_delivery_stream: KinesisFirehoseDeliveryStreamClass;
}

export interface KinesisFirehoseDeliveryStreamClass {
    /** (Required) Name of the Kinesis Stream. */
    name: any;
}