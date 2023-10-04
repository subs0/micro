export interface NetworkmanagerGlobalNetwork {
    data: Datum[];
}

export interface Datum {
    networkmanager_global_network: NetworkmanagerGlobalNetworkClass;
}

export interface NetworkmanagerGlobalNetworkClass {
    /** (Required) ID of the specific global network to retrieve. */
    global_network_id: any;
}