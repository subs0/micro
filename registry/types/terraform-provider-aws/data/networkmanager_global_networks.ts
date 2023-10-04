export interface NetworkmanagerGlobalNetworks {
    data: Datum[];
}

export interface Datum {
    networkmanager_global_networks: NetworkmanagerGlobalNetworksClass;
}

export interface NetworkmanagerGlobalNetworksClass {
    /** (Optional) Restricts the list to the global networks with these tags. */
    tags?: any;
}