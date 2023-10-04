export interface VpclatticeListener {
    data: Datum[];
}

export interface Datum {
    vpclattice_listener: VpclatticeListenerClass;
}

export interface VpclatticeListenerClass {
    /** (Required) ID or Amazon Resource Name (ARN) of the service network */
    service_identifier:  any;
    /** (Required) ID or Amazon Resource Name (ARN) of the listener */
    listener_identifier: any;
}