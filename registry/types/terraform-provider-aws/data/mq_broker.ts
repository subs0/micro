export interface MqBroker {
    data: Datum[];
}

export interface Datum {
    mq_broker: MqBrokerClass;
}

export interface MqBrokerClass {
    /** (Optional) Unique id of the mq broker. */
    broker_id?:   any;
    /** (Optional) Unique name of the mq broker. */
    broker_name?: any;
}