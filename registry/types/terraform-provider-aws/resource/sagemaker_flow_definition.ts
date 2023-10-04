export interface SagemakerFlowDefinition {
    resource: Resource[];
}

export interface Resource {
    sagemaker_flow_definition: SagemakerFlowDefinitionClass;
}

export interface SagemakerFlowDefinitionClass {
    /** (Required) The name of your flow definition. */
    flow_definition_name:                    any;
    /** (Required)  An object containing information about the tasks the human reviewers will perform. See [Human Loop Config](#human-loop-config) details below. */
    human_loop_config:                       any;
    /** (Required) The Amazon Resource Name (ARN) of the role needed to call other services on your behalf. */
    role_arn:                                any;
    /** (Required) An object containing information about where the human review results will be uploaded. See [Output Config](#output-config) details below. */
    output_config:                           any;
    /** (Optional) An object containing information about the events that trigger a human workflow. See [Human Loop Activation Config](#human-loop-activation-config) details below. */
    human_loop_activation_config?:           any;
    /** (Optional) Container for configuring the source of human task requests. Use to specify if Amazon Rekognition or Amazon Textract is used as an integration source. See [Human Loop Request Source](#human-loop-request-source) details below. */
    human_loop_request_source?:              any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                   any;
    /** (Required) The Amazon Resource Name (ARN) of the human task user interface. */
    human_task_ui_arn:                       any;
    /** (Optional) Defines the amount of money paid to an Amazon Mechanical Turk worker for each task performed. See [Public Workforce Task Price](#public-workforce-task-price) details below. */
    public_workforce_task_price?:            any;
    /** (Required) The length of time that a task remains available for review by human workers. Valid value range between `1` and `864000`. */
    task_availability_lifetime_in_seconds:   any;
    /** (Required) The number of distinct workers who will perform the same task on each object. Valid value range between `1` and `3`. */
    task_count:                              any;
    /** (Required) A description for the human worker task. */
    task_description:                        any;
    /** (Optional) An array of keywords used to describe the task so that workers can discover the task. */
    task_keywords?:                          any;
    /** (Optional) The amount of time that a worker has to complete a task. The default value is `3600` seconds. */
    task_time_limit_in_seconds?:             any;
    /** (Required) A title for the human worker task. */
    task_title:                              any;
    /** (Required) The Amazon Resource Name (ARN) of the human task user interface. Amazon Resource Name (ARN) of a team of workers. For Public workforces see [AWS Docs](https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-management-public.html). */
    workteam_arn:                            any;
    /** (Optional) Defines the amount of money paid to an Amazon Mechanical Turk worker in United States dollars. See [Amount In Usd](#amount-in-usd) details below. */
    amount_in_usd?:                          any;
    /** (Optional) The fractional portion, in cents, of the amount. Valid value range between `0` and `99`. */
    cents?:                                  any;
    /** (Optional) The whole number of dollars in the amount. Valid value range between `0` and `2`. */
    dollars?:                                any;
    /** (Optional) Fractions of a cent, in tenths. Valid value range between `0` and `9`. */
    tenth_fractions_of_a_cent?:              any;
    /** (Required) defines under what conditions SageMaker creates a human loop. See [Human Loop Activation Conditions Config](#human-loop-activation-conditions-config) details below. */
    human_loop_activation_conditions_config: any;
    /** (Required) A JSON expressing use-case specific conditions declaratively. If any condition is matched, atomic tasks are created against the configured work team. For more information about how to structure the JSON, see [JSON Schema for Human Loop Activation Conditions in Amazon Augmented AI](https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-human-fallback-conditions-json-schema.html). */
    human_loop_activation_conditions:        any;
    /** (Required) Specifies whether Amazon Rekognition or Amazon Textract are used as the integration source. Valid values are: `AWS/Rekognition/DetectModerationLabels/Image/V3` and `AWS/Textract/AnalyzeDocument/Forms/V1`. */
    aws_managed_human_loop_request_source:   any;
    /** (Required) The Amazon S3 path where the object containing human output will be made available. */
    s3_output_path:                          any;
    /** (Optional) The Amazon Key Management Service (KMS) key ARN for server-side encryption. */
    kms_key_id?:                             any;
}