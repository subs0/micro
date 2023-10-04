export interface Eips {
    data: Datum[];
}

export interface Datum {
    eips: EipsClass;
}

export interface EipsClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Map of tags, each pair of which must exactly match a pair on the desired Elastic IPs. */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. An Elastic IP will be selected if any one of the given values matches. */
    values:  any;
}