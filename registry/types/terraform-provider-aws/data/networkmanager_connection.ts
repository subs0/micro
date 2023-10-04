export interface NetworkmanagerConnection {
    data: Datum[];
}

export interface Datum {
    networkmanager_connection: NetworkmanagerConnectionClass;
}

export interface NetworkmanagerConnectionClass {
    /** (Required) ID of the Global Network of the connection to retrieve. */
    global_network_id: any;
    /** (Required) ID of the specific connection to retrieve. */
    connection_id:     any;
}