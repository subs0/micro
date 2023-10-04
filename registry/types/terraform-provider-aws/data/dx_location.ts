export interface DxLocation {
    data: Datum[];
}

export interface Datum {
    dx_location: DxLocationClass;
}

export interface DxLocationClass {
    /** (Required) Code for the location to retrieve. */
    location_code: any;
}