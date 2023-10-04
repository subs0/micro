export interface MskconnectConnector {
    data: Datum[];
}

export interface Datum {
    mskconnect_connector: MskconnectConnectorClass;
}

export interface MskconnectConnectorClass {
    /** (Required) Name of the connector. */
    name: any;
}