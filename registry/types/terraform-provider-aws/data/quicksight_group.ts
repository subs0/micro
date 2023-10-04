export interface QuicksightGroup {
    data: Datum[];
}

export interface Datum {
    quicksight_group: QuicksightGroupClass;
}

export interface QuicksightGroupClass {
    /** (Required) The name of the group that you want to match. */
    group_name:      any;
    /** (Optional) AWS account ID. */
    aws_account_id?: any;
    /** (Optional) QuickSight namespace. Defaults to `default`. */
    namespace?:      any;
}