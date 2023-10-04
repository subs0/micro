export interface ConnectQuickConnect {
    data: Datum[];
}

export interface Datum {
    connect_quick_connect: ConnectQuickConnectClass;
}

export interface ConnectQuickConnectClass {
    /** (Optional) Returns information on a specific Quick Connect by Quick Connect id */
    quick_connect_id?: any;
    /** (Required) Reference to the hosting Amazon Connect Instance */
    instance_id:       any;
    /** (Optional) Returns information on a specific Quick Connect by name */
    name?:             any;
}