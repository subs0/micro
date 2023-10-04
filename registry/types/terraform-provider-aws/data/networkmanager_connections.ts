export interface NetworkmanagerConnections {
    data: Datum[];
}

export interface Datum {
    networkmanager_connections: NetworkmanagerConnectionsClass;
}

export interface NetworkmanagerConnectionsClass {
    /** (Optional) ID of the device of the connections to retrieve. */
    device_id?:        any;
    /** (Required) ID of the Global Network of the connections to retrieve. */
    global_network_id: any;
    /** (Optional) Restricts the list to the connections with these tags. */
    tags?:             any;
}