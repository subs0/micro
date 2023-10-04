export interface KinesisStream {
    data: Datum[];
}

export interface Datum {
    kinesis_stream: KinesisStreamClass;
}

export interface KinesisStreamClass {
    /** (Required) Name of the Kinesis Stream. */
    name: any;
}