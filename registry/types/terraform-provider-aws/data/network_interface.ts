export interface NetworkInterface {
    data: Datum[];
}

export interface Datum {
    network_interface: NetworkInterfaceClass;
}

export interface NetworkInterfaceClass {
    "This data source supports the following arguments:"?: any;
}