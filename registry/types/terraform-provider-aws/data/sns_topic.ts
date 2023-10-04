export interface SnsTopic {
    data: Datum[];
}

export interface Datum {
    sns_topic: SnsTopicClass;
}

export interface SnsTopicClass {
    /** (Required) Friendly name of the topic to match. */
    name: any;
}