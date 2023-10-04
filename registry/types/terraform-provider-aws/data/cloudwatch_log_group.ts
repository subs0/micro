export interface CloudwatchLogGroup {
    data: Datum[];
}

export interface Datum {
    cloudwatch_log_group: CloudwatchLogGroupClass;
}

export interface CloudwatchLogGroupClass {
    /** (Required) Name of the Cloudwatch log group */
    name: any;
}