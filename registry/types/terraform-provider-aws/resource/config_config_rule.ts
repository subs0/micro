export interface ConfigConfigRule {
    resource: Resource[];
}

export interface Resource {
    config_config_rule: ConfigConfigRuleClass;
}

export interface ConfigConfigRuleClass {
    /** (Required) The name of the rule */
    name:                                          any;
    /** (Optional) Description of the rule */
    description?:                                  any;
    /** (Optional) A string in JSON format that is passed to the AWS Config rule Lambda function. */
    input_parameters?:                             any;
    /** (Optional) The frequency that you want AWS Config to run evaluations for a rule that istriggered periodically. If specified, requires `message_type` to be `ScheduledNotification`. */
    maximum_execution_frequency?:                  any;
    /** (Optional) Scope defines which resources can trigger an evaluation for the rule. See [Source](#source) Below. */
    scope?:                                        any;
    /** (Required) Source specifies the rule owner, the rule identifier, and the notifications that cause the function to evaluate your AWS resources. See [Scope](#scope) Below. */
    source:                                        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                                         any;
    /** (Optional) The IDs of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for `compliance_resource_types`. */
    compliance_resource_id?:                       any;
    /** (Optional) A list of resource types of only those AWS resources that you want to trigger an evaluation for the ruleE.g., `AWS::EC2::Instance`. You can only specify one type if you also specify a resource ID for `compliance_resource_id`. See [relevant part of AWS Docs](http://docs.aws.amazon.com/config/latest/APIReference/API_ResourceIdentifier.html#config-Type-ResourceIdentifier-resourceType) for available types. */
    compliance_resource_types?:                    any;
    /** (Optional, Required if `tag_value` is specified) The tag key that is applied to only those AWS resources that you want you want to trigger an evaluation for the rule. */
    tag_key?:                                      any;
    /** (Optional) The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. */
    tag_value?:                                    any;
    /** (Required) Indicates whether AWS or the customer owns and manages the AWS Config rule. Valid values are `AWS`, `CUSTOM_LAMBDA` or `CUSTOM_POLICY`. For more information about managed rules, see the [AWS Config Managed Rules documentation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html). For more information about custom rules, see the [AWS Config Custom Rules documentation](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html). Custom Lambda Functions require permissions to allow the AWS Config service to invoke them, e.g., via the [`aws_lambda_permission` resource](/docs/providers/aws/r/lambda_permission.html). */
    owner:                                         any;
    /** (Optional) For AWS Config managed rules, a predefined identifier, e.g `IAM_PASSWORD_POLICY`. For custom Lambda rules, the identifier is the ARN of the Lambda Function, such as `arn:aws:lambda:us-east-1:123456789012:function:custom_rule_name` or the [`arn` attribute of the `aws_lambda_function` resource](/docs/providers/aws/r/lambda_function.html#arn). */
    source_identifier?:                            any;
    /** (Optional) Provides the source and type of the event that causes AWS Config to evaluate your AWS resources. Only valid if `owner` is `CUSTOM_LAMBDA` or `CUSTOM_POLICY`. See [Source Detail](#source-detail) Below. */
    source_detail?:                                any;
    /** (Optional) Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to `CUSTOM_POLICY`. See [Custom Policy Details](#custom-policy-details) Below. */
    custom_policy_details?:                        any;
    /** (Optional) The source of the event, such as an AWS service, that triggers AWS Config to evaluate your AWSresources. This defaults to `aws.config` and is the only valid value. */
    event_source?:                                 any;
    /** (Optional) The type of notification that triggers AWS Config to run an evaluation for a rule. You canspecify the following notification types: */
    message_type?:                                 any;
    /** Triggers an evaluation when AWS Config delivers a configuration item as a result of a resource change. */
    ConfigurationItemChangeNotification?:          any;
    /** Triggers an evaluation when AWS Config delivers an oversized configuration item. AWS Config may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS. */
    OversizedConfigurationItemChangeNotification?: any;
    /** Triggers a periodic evaluation at the frequency specified for `maximum_execution_frequency`. */
    ScheduledNotification?:                        any;
    /** Triggers a periodic evaluation when AWS Config delivers a configuration snapshot. */
    ConfigurationSnapshotDeliveryCompleted?:       any;
    /** (Optional) The boolean expression for enabling debug logging for your Config Custom Policy rule. The default value is `false`. */
    enable_debug_log_delivery?:                    any;
    /** (Required) The runtime system for your Config Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by Config Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://github.com/aws-cloudformation/cloudformation-guard). */
    policy_runtime:                                any;
    /** (Required) The policy definition containing the logic for your Config Custom Policy rule. */
    policy_text:                                   any;
}