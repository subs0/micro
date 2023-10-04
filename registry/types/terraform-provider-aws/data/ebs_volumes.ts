export interface EbsVolumes {
    data: Datum[];
}

export interface Datum {
    ebs_volumes: EbsVolumesClass;
}

export interface EbsVolumesClass {
    /** (Optional) Custom filter block as described below. */
    filter?: any;
    /** (Optional) Map of tags, each pair of which must exactly match */
    tags?:   any;
    /** (Required) Name of the field to filter by, as defined by */
    name:    any;
    /** (Required) Set of values that are accepted for the given field. */
    values:  any;
}