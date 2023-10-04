export interface IotEndpoint {
    data: Datum[];
}

export interface Datum {
    iot_endpoint: IotEndpointClass;
}

export interface IotEndpointClass {
    /** (Optional) Endpoint type. Valid values: `iot:CredentialProvider`, `iot:Data`, `iot:Data-ATS`, `iot:Jobs`. */
    endpoint_type?: any;
}