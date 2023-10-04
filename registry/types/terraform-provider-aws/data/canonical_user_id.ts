export interface CanonicalUserID {
    data: Datum[];
}

export interface Datum {
    canonical_user_id: CanonicalUserIDClass;
}

export interface CanonicalUserIDClass {
    "There are no arguments available for this data source."?: any;
}