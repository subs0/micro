export interface DmsEndpoint {
    data: Datum[];
}

export interface Datum {
    dms_endpoint: DmsEndpointClass;
}

export interface DmsEndpointClass {
    /** (Required) Database endpoint identifier. Identifiers must contain from 1 to 255 alphanumeric characters or hyphens, begin with a letter, contain only ASCII letters, digits, and hyphens, not end with a hyphen, and not contain two consecutive hyphens. */
    endpoint_id: any;
}