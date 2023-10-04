export interface ConnectQueue {
    data: Datum[];
}

export interface Datum {
    connect_queue: ConnectQueueClass;
}

export interface ConnectQueueClass {
    /** (Optional) Returns information on a specific Queue by Queue id */
    queue_id?:   any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id: any;
    /** (Optional) Returns information on a specific Queue by name */
    name?:       any;
}