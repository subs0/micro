export interface SfnStateMachine {
    resource: Resource[];
}

export interface Resource {
    sfn_state_machine: SfnStateMachineClass;
}

export interface SfnStateMachineClass {
    /** (Required) The [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) definition of the state machine. */
    definition:              any;
    /** (Optional) Defines what execution history events are logged and where they are logged. The `logging_configuration` parameter is only valid when `type` is set to `EXPRESS`. Defaults to `OFF`. For more information see [Logging Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/cw-logs.html) and [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide. */
    logging_configuration?:  any;
    /** (Optional) The name of the state machine. The name should only contain `0`-`9`, `A`-`Z`, `a`-`z`, `-` and `_`. If omitted, Terraform will assign a random, unique name. */
    name?:                   any;
    /** (Optional) Creates a unique name beginning with the specified prefix. Conflicts with `name`. */
    name_prefix?:            any;
    /** (Optional) Set to true to publish a version of the state machine during creation. Default: false. */
    publish?:                any;
    /** (Required) The Amazon Resource Name (ARN) of the IAM role to use for this state machine. */
    role_arn:                any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                   any;
    /** (Optional) Selects whether AWS X-Ray tracing is enabled. */
    tracing_configuration?:  any;
    /** (Optional) Determines whether a Standard or Express state machine is created. The default is `STANDARD`. You cannot update the type of a state machine once it has been created. Valid values: `STANDARD`, `EXPRESS`. */
    type?:                   any;
    /** (Optional) Determines whether execution data is included in your log. When set to `false`, data is excluded. */
    include_execution_data?: any;
    /** (Optional) Defines which category of execution history events are logged. Valid values: `ALL`, `ERROR`, `FATAL`, `OFF` */
    level?:                  any;
    /** (Optional) Amazon Resource Name (ARN) of a CloudWatch log group. Make sure the State Machine has the correct IAM policies for logging. The ARN must end with `:*` */
    log_destination?:        any;
    /** (Optional) When set to `true`, AWS X-Ray tracing is enabled. Make sure the State Machine has the correct IAM policies for logging. See the [AWS Step Functions Developer Guide](https://docs.aws.amazon.com/step-functions/latest/dg/xray-iam.html) for details. */
    enabled?:                any;
}