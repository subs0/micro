export interface Region {
    data: Datum[];
}

export interface Datum {
    region: RegionClass;
}

export interface RegionClass {
    /** (Optional) Full name of the region to select. */
    name?:     any;
    /** (Optional) EC2 endpoint of the region to select. */
    endpoint?: any;
}