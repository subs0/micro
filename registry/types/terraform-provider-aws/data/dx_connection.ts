export interface DxConnection {
    data: Datum[];
}

export interface Datum {
    dx_connection: DxConnectionClass;
}

export interface DxConnectionClass {
    /** (Required) Name of the connection to retrieve. */
    name: any;
}