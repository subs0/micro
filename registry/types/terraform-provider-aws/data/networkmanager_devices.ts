export interface NetworkmanagerDevices {
    data: Datum[];
}

export interface Datum {
    networkmanager_devices: NetworkmanagerDevicesClass;
}

export interface NetworkmanagerDevicesClass {
    /** (Required) ID of the Global Network of the devices to retrieve. */
    global_network_id: any;
    /** (Optional) ID of the site of the devices to retrieve. */
    site_id?:          any;
    /** (Optional) Restricts the list to the devices with these tags. */
    tags?:             any;
}