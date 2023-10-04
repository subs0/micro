export interface OutpostsSite {
    data: Datum[];
}

export interface Datum {
    outposts_site: OutpostsSiteClass;
}

export interface OutpostsSiteClass {
    /** (Optional) Identifier of the Site. */
    id?:   any;
    /** (Optional) Name of the Site. */
    name?: any;
}