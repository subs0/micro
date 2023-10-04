export interface QuicksightDataSet {
    data: Datum[];
}

export interface Datum {
    quicksight_data_set: QuicksightDataSetClass;
}

export interface QuicksightDataSetClass {
    /** (Required) Identifier for the data set. */
    data_set_id:     any;
    /** (Optional) AWS account ID. */
    aws_account_id?: any;
}