export interface QuicksightUser {
    data: Datum[];
}

export interface Datum {
    quicksight_user: QuicksightUserClass;
}

export interface QuicksightUserClass {
    /** (Required) The name of the user that you want to match. */
    user_name:       any;
    /** (Optional) AWS account ID. */
    aws_account_id?: any;
    /** (Optional) QuickSight namespace. Defaults to `default`. */
    namespace?:      any;
}