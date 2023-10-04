export interface MqBrokerInstanceTypeOfferings {
    data: Datum[];
}

export interface Datum {
    mq_broker_instance_type_offerings: MqBrokerInstanceTypeOfferingsClass;
}

export interface MqBrokerInstanceTypeOfferingsClass {
    /** (Optional) Filter response by engine type. */
    engine_type?:        any;
    /** (Optional) Filter response by host instance type. */
    host_instance_type?: any;
    /** (Optional) Filter response by storage type. */
    storage_type?:       any;
}