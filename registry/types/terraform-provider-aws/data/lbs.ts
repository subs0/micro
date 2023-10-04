export interface Lbs {
    data: Datum[];
}

export interface Datum {
    lbs: LbsClass;
}

export interface LbsClass {
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?: any;
}