export interface VpclatticeService {
    data: Datum[];
}

export interface Datum {
    vpclattice_service: VpclatticeServiceClass;
}

export interface VpclatticeServiceClass {
    /** (Optional) Service name. */
    name?:               any;
    /** (Optional) ID or Amazon Resource Name (ARN) of the service. */
    service_identifier?: any;
}