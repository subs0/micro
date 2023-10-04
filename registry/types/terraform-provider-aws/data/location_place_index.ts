export interface LocationPlaceIndex {
    data: Datum[];
}

export interface Datum {
    location_place_index: LocationPlaceIndexClass;
}

export interface LocationPlaceIndexClass {
    /** (Required) Name of the place index resource. */
    index_name: any;
}