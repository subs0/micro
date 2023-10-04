export interface VpclatticeServiceNetwork {
    data: Datum[];
}

export interface Datum {
    vpclattice_service_network: VpclatticeServiceNetworkClass;
}

export interface VpclatticeServiceNetworkClass {
    /** (Required) Identifier of the service network. */
    service_network_identifier: any;
}