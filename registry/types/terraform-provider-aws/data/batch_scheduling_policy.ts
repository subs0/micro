export interface BatchSchedulingPolicy {
    data: Datum[];
}

export interface Datum {
    batch_scheduling_policy: BatchSchedulingPolicyClass;
}

export interface BatchSchedulingPolicyClass {
    /** (Required) ARN of the scheduling policy. */
    arn: any;
}