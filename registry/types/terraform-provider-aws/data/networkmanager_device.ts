export interface NetworkmanagerDevice {
    data: Datum[];
}

export interface Datum {
    networkmanager_device: NetworkmanagerDeviceClass;
}

export interface NetworkmanagerDeviceClass {
    /** (Required) ID of the device. */
    device_id:         any;
    /** (Required) ID of the global network. */
    global_network_id: any;
}