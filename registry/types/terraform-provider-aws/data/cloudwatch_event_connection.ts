export interface CloudwatchEventConnection {
    data: Datum[];
}

export interface Datum {
    cloudwatch_event_connection: CloudwatchEventConnectionClass;
}

export interface CloudwatchEventConnectionClass {
    /** Name of the connection. */
    name?: any;
}