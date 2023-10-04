export interface AutoscalingLifecycleHook {
    resource: Resource[];
}

export interface Resource {
    autoscaling_lifecycle_hook: AutoscalingLifecycleHookClass;
}

export interface AutoscalingLifecycleHookClass {
    /** (Required) Name of the lifecycle hook. */
    name:                     any;
    /** (Required) Name of the Auto Scaling group to which you want to assign the lifecycle hook */
    autoscaling_group_name:   any;
    /** (Optional) Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses or if an unexpected failure occurs. The value for this parameter can be either CONTINUE or ABANDON. The default value for this parameter is ABANDON. */
    default_result?:          any;
    /** (Optional) Defines the amount of time, in seconds, that can elapse before the lifecycle hook times out. When the lifecycle hook times out, Auto Scaling performs the action defined in the DefaultResult parameter */
    heartbeat_timeout?:       any;
    /** (Required) Instance state to which you want to attach the lifecycle hook. For a list of lifecycle hook types, see [describe-lifecycle-hook-types](https://docs.aws.amazon.com/cli/latest/reference/autoscaling/describe-lifecycle-hook-types.html#examples) */
    lifecycle_transition:     any;
    /** (Optional) Contains additional information that you want to include any time Auto Scaling sends a message to the notification target. */
    notification_metadata?:   any;
    /** (Optional) ARN of the notification target that Auto Scaling will use to notify you when an instance is in the transition state for the lifecycle hook. This ARN target can be either an SQS queue or an SNS topic. */
    notification_target_arn?: any;
    /** (Optional) ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. */
    role_arn?:                any;
}