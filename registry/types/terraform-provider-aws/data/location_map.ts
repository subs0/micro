export interface LocationMap {
    data: Datum[];
}

export interface Datum {
    location_map: LocationMapClass;
}

export interface LocationMapClass {
    /** (Required) Name of the map resource. */
    map_name: any;
}