export interface SsmMaintenanceWindowTask {
    resource: Resource[];
}

export interface Resource {
    ssm_maintenance_window_task: SsmMaintenanceWindowTaskClass;
}

export interface SsmMaintenanceWindowTaskClass {
    /** (Required) The Id of the maintenance window to register the task with. */
    window_id:                   any;
    /** (Optional) The maximum number of targets this task can be run for in parallel. */
    max_concurrency?:            any;
    /** (Optional) The maximum number of errors allowed before this task stops being scheduled. */
    max_errors?:                 any;
    /** (Optional) Indicates whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached. Valid values are `CONTINUE_TASK` and `CANCEL_TASK`. */
    cutoff_behavior?:            any;
    /** (Required) The type of task being registered. Valid values: `AUTOMATION`, `LAMBDA`, `RUN_COMMAND` or `STEP_FUNCTIONS`. */
    task_type:                   any;
    /** (Required) The ARN of the task to execute. */
    task_arn:                    any;
    /** (Optional) The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role to use to publish Amazon Simple Notification Service (Amazon SNS) notifications for maintenance window Run Command tasks. */
    service_role_arn?:           any;
    /** (Required) The parameter name. */
    name:                        any;
    /** (Optional) The description of the maintenance window task. */
    description?:                any;
    /** (Optional) The targets (either instances or window target ids). Instances are specified using Key=InstanceIds,Values=instanceid1,instanceid2. Window target ids are specified using Key=WindowTargetIds,Values=window target id1, window target id2. */
    targets?:                    any;
    /** (Optional) The priority of the task in the Maintenance Window, the lower the number the higher the priority. Tasks in a Maintenance Window are scheduled in priority order with tasks that have the same priority scheduled in parallel. */
    priority?:                   any;
    /** (Optional) Configuration block with parameters for task execution. */
    task_invocation_parameters?: any;
    /** (Optional) The parameters for an AUTOMATION task type. Documented below. */
    automation_parameters?:      any;
    /** (Optional) The parameters for a LAMBDA task type. Documented below. */
    lambda_parameters?:          any;
    /** (Optional) The parameters for a RUN_COMMAND task type. Documented below. */
    run_command_parameters?:     any;
    /** (Optional) The parameters for a STEP_FUNCTIONS task type. Documented below. */
    step_functions_parameters?:  any;
    /** (Optional) The version of an Automation document to use during task execution. */
    document_version?:           any;
    /** (Optional) The parameters for the RUN_COMMAND task execution. Documented below. */
    parameter?:                  any;
    /** (Optional) Pass client-specific information to the Lambda function that you are invoking. */
    client_context?:             any;
    /** (Optional) JSON to provide to your Lambda function as input. */
    payload?:                    any;
    /** (Optional) Specify a Lambda function version or alias name. */
    qualifier?:                  any;
    /** (Optional) Information about the command(s) to execute. */
    comment?:                    any;
    /** (Optional) The SHA-256 or SHA-1 hash created by the system when the document was created. SHA-1 hashes have been deprecated. */
    document_hash?:              any;
    /** (Optional) SHA-256 or SHA-1. SHA-1 hashes have been deprecated. Valid values: `Sha256` and `Sha1` */
    document_hash_type?:         any;
    /** (Optional) Configurations for sending notifications about command status changes on a per-instance basis. Documented below. */
    notification_config?:        any;
    /** (Optional) The name of the Amazon S3 bucket. */
    output_s3_bucket?:           any;
    /** (Optional) The Amazon S3 bucket subfolder. */
    output_s3_key_prefix?:       any;
    /** (Optional) If this time is reached and the command has not already started executing, it doesn't run. */
    timeout_seconds?:            any;
    /** (Optional) Configuration options for sending command output to CloudWatch Logs. Documented below. */
    cloudwatch_config?:          any;
    /** (Optional) The inputs for the STEP_FUNCTION task. */
    input?:                      any;
    /** (Optional) An Amazon Resource Name (ARN) for a Simple Notification Service (SNS) topic. Run Command pushes notifications about command status changes to this topic. */
    notification_arn?:           any;
    /** (Optional) The different events for which you can receive notifications. Valid values: `All`, `InProgress`, `Success`, `TimedOut`, `Cancelled`, and `Failed` */
    notification_events?:        any;
    /** (Optional) When specified with `Command`, receive notification when the status of a command changes. When specified with `Invocation`, for commands sent to multiple instances, receive notification on a per-instance basis when the status of a command changes. Valid values: `Command` and `Invocation` */
    notification_type?:          any;
    /** (Optional) The name of the CloudWatch log group where you want to send command output. If you don't specify a group name, Systems Manager automatically creates a log group for you. The log group uses the following naming format: aws/ssm/SystemsManagerDocumentName. */
    cloudwatch_log_group_name?:  any;
    /** (Optional) Enables Systems Manager to send command output to CloudWatch Logs. */
    cloudwatch_output_enabled?:  any;
    /** (Required) The array of strings. */
    values:                      any;
}