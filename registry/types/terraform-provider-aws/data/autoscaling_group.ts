export interface AutoscalingGroup {
    data: Datum[];
}

export interface Datum {
    autoscaling_group: AutoscalingGroupClass;
}

export interface AutoscalingGroupClass {
    /** Specify the exact name of the desired autoscaling group. */
    name?: any;
}