export interface CloudformationStackSet {
    resource: Resource[];
}

export interface Resource {
    cloudformation_stack_set: CloudformationStackSetClass;
}

export interface CloudformationStackSetClass {
    /** (Optional) Amazon Resource Number (ARN) of the IAM Role in the administrator account. This must be defined when using the `SELF_MANAGED` permission model. */
    administration_role_arn?:          any;
    /** (Optional) Configuration block containing the auto-deployment model for your StackSet. This can only be defined when using the `SERVICE_MANAGED` permission model. */
    auto_deployment?:                  any;
    /** (Optional) Whether or not auto-deployment is enabled. */
    enabled?:                          any;
    /** (Optional) Whether or not to retain stacks when the account is removed. */
    retain_stacks_on_account_removal?: any;
    /** (Required) Name of the StackSet. The name must be unique in the region where you create your StackSet. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and cannot be longer than 128 characters. */
    name:                              any;
    /** (Optional) A list of capabilities. Valid values: `CAPABILITY_IAM`, `CAPABILITY_NAMED_IAM`, `CAPABILITY_AUTO_EXPAND`. */
    capabilities?:                     any;
    /** (Optional) Preferences for how AWS CloudFormation performs a stack set update. */
    operation_preferences?:            any;
    /** (Optional) Description of the StackSet. */
    description?:                      any;
    /** (Optional) Name of the IAM Role in all target accounts for StackSet operations. Defaults to `AWSCloudFormationStackSetExecutionRole` when using the `SELF_MANAGED` permission model. This should not be defined when using the `SERVICE_MANAGED` permission model. */
    execution_role_name?:              any;
    /** (Optional) Configuration block to allow StackSets to perform non-conflicting operations concurrently and queues conflicting operations. */
    managed_execution?:                any;
    /** (Optional) When set to true, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order. Default is false. */
    active?:                           any;
    /** (Optional) Key-value map of input parameters for the StackSet template. All template parameters, including those with a `Default`, must be configured or ignored with `lifecycle` configuration block `ignore_changes` argument. All `NoEcho` template parameters must be ignored with the `lifecycle` configuration block `ignore_changes` argument. */
    parameters?:                       any;
    /** (Optional) Describes how the IAM roles required for your StackSet are created. Valid values: `SELF_MANAGED` (default), `SERVICE_MANAGED`. */
    permission_model?:                 any;
    /** (Optional) Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`. */
    call_as?:                          any;
    /** (Optional) Key-value map of tags to associate with this StackSet and the Stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the Stacks. A maximum number of 50 tags can be specified. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                             any;
    /** (Optional) String containing the CloudFormation template body. Maximum size: 51,200 bytes. Conflicts with `template_url`. */
    template_body?:                    any;
    /** (Optional) String containing the location of a file containing the CloudFormation template body. The URL must point to a template that is located in an Amazon S3 bucket. Maximum location file size: 460,800 bytes. Conflicts with `template_body`. */
    template_url?:                     any;
    /** (Optional) The number of accounts, per Region, for which this operation can fail before AWS CloudFormation stops the operation in that Region. */
    failure_tolerance_count?:          any;
    /** (Optional) The percentage of accounts, per Region, for which this stack operation can fail before AWS CloudFormation stops the operation in that Region. */
    failure_tolerance_percentage?:     any;
    /** (Optional) The maximum number of accounts in which to perform this operation at one time. */
    max_concurrent_count?:             any;
    /** (Optional) The maximum percentage of accounts in which to perform this operation at one time. */
    max_concurrent_percentage?:        any;
    /** (Optional) The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time. */
    region_concurrency_type?:          any;
    /** (Optional) The order of the Regions in where you want to perform the stack operation. */
    region_order?:                     any;
}