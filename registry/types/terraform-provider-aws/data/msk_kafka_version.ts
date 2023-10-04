export interface MskKafkaVersion {
    data: Datum[];
}

export interface Datum {
    msk_kafka_version: MskKafkaVersionClass;
}

export interface MskKafkaVersionClass {
    /** (Optional) Ordered list of preferred Kafka versions. The first match in this list will be returned. Either `preferred_versions` or `version` must be set. */
    preferred_versions?: any;
    /** (Optional) Version of MSK Kafka. For example 2.4.1.1 or "2.2.1" etc. Either `preferred_versions` or `version` must be set. */
    version?:            any;
}