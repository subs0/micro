export interface CloudwatchEventBus {
    data: Datum[];
}

export interface Datum {
    cloudwatch_event_bus: CloudwatchEventBusClass;
}

export interface CloudwatchEventBusClass {
    /** (Required) Friendly EventBridge event bus name. */
    name: any;
}