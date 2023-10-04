export interface Ami {
    data: Datum[];
}

export interface Datum {
    ami: AmiClass;
}

export interface AmiClass {
    /** (Optional) List of AMI owners to limit search. Valid values: an AWS account ID, `self` (the current account), or an AWS owner alias (e.g., `amazon`, `aws-marketplace`, `microsoft`). */
    owners?:             any;
    /** (Optional) If more than one result is returned, use the most */
    most_recent?:        any;
    /** (Optional) Limit search to users with *explicit* launch permission on */
    executable_users?:   any;
    /** (Optional) If true, all deprecated AMIs are included in the response. If false, no deprecated AMIs are included in the response. If no value is specified, the default value is false. */
    include_deprecated?: any;
    /** (Optional) One or more name/value pairs to filter off of. There are */
    filter?:             any;
    /** (Optional) Regex string to apply to the AMI list returned */
    name_regex?:         any;
}