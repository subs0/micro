export interface CloudwatchLogGroups {
    data: Datum[];
}

export interface Datum {
    cloudwatch_log_groups: CloudwatchLogGroupsClass;
}

export interface CloudwatchLogGroupsClass {
    /** (Optional) Group prefix of the Cloudwatch log groups to list */
    log_group_name_prefix?: any;
}