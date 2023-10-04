export interface SfnActivity {
    data: Datum[];
}

export interface Datum {
    sfn_activity: SfnActivityClass;
}

export interface SfnActivityClass {
    /** (Optional) Name that identifies the activity. */
    name?: any;
    /** (Optional) ARN that identifies the activity. */
    arn?:  any;
}