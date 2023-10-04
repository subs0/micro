export interface DxGateway {
    data: Datum[];
}

export interface Datum {
    dx_gateway: DxGatewayClass;
}

export interface DxGatewayClass {
    /** (Required) Name of the gateway to retrieve. */
    name: any;
}