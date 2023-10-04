export interface AmiIDS {
    data: Datum[];
}

export interface Datum {
    ami_ids: AmiIDSClass;
}

export interface AmiIDSClass {
    /** (Required) List of AMI owners to limit search. At least 1 value must be specified. Valid values: an AWS account ID, `self` (the current account), or an AWS owner alias (e.g., `amazon`, `aws-marketplace`, `microsoft`). */
    owners:              any;
    /** (Optional) Limit search to users with *explicit* launch */
    executable_users?:   any;
    /** (Optional) One or more name/value pairs to filter off of. There */
    filter?:             any;
    /** (Optional) Regex string to apply to the AMI list returned */
    name_regex?:         any;
    /** (Optional) Used to sort AMIs by creation time. */
    sort_ascending?:     any;
    /** (Optional) If true, all deprecated AMIs are included in the response. */
    include_deprecated?: any;
}