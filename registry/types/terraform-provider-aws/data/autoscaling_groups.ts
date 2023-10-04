export interface AutoscalingGroups {
    data: Datum[];
}

export interface Datum {
    autoscaling_groups: AutoscalingGroupsClass;
}

export interface AutoscalingGroupsClass {
    /** (Optional) List of autoscaling group names */
    names?:  any;
    /** (Optional) Filter used to scope the list e.g., by tags. See [related docs](http://docs.aws.amazon.com/AutoScaling/latest/APIReference/API_Filter.html). */
    filter?: any;
    /** (Required) Name of the DescribeAutoScalingGroup filter. The recommended values are: `tag-key`, `tag-value`, and `tag:<tag name>` */
    name:    any;
    /** (Required) Value of the filter. */
    values:  any;
}