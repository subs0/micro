export interface IvsStreamKey {
    data: Datum[];
}

export interface Datum {
    ivs_stream_key: IvsStreamKeyClass;
}

export interface IvsStreamKeyClass {
    /** (Required) ARN of the Channel. */
    channel_arn: any;
}