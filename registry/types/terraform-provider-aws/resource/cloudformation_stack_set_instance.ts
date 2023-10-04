export interface CloudformationStackSetInstance {
    resource: Resource[];
}

export interface Resource {
    cloudformation_stack_set_instance: CloudformationStackSetInstanceClass;
}

export interface CloudformationStackSetInstanceClass {
    /** (Required) Name of the StackSet. */
    stack_set_name:                any;
    /** (Optional) Target AWS Account ID to create a Stack based on the StackSet. Defaults to current account. */
    account_id?:                   any;
    /** (Optional) The AWS Organizations accounts to which StackSets deploys. StackSets doesn't deploy stack instances to the organization management account, even if the organization management account is in your organization or in an OU in your organization. Drift detection is not possible for this argument. See [deployment_targets](#deployment_targets-argument-reference) below. */
    deployment_targets?:           any;
    /** (Optional) Key-value map of input parameters to override from the StackSet for this Instance. */
    parameter_overrides?:          any;
    /** (Optional) Target AWS Region to create a Stack based on the StackSet. Defaults to current region. */
    region?:                       any;
    /** (Optional) During Terraform resource destroy, remove Instance from StackSet while keeping the Stack and its associated resources. Must be enabled in Terraform state _before_ destroy operation to take effect. You cannot reassociate a retained Stack or add an existing, saved Stack to a new StackSet. Defaults to `false`. */
    retain_stack?:                 any;
    /** (Optional) Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account. Valid values: `SELF` (default), `DELEGATED_ADMIN`. */
    call_as?:                      any;
    /** (Optional) Preferences for how AWS CloudFormation performs a stack set operation. */
    operation_preferences?:        any;
    /** (Optional) The organization root ID or organizational unit (OU) IDs to which StackSets deploys. */
    organizational_unit_ids?:      any;
    /** (Optional) The number of accounts, per Region, for which this operation can fail before AWS CloudFormation stops the operation in that Region. */
    failure_tolerance_count?:      any;
    /** (Optional) The percentage of accounts, per Region, for which this stack operation can fail before AWS CloudFormation stops the operation in that Region. */
    failure_tolerance_percentage?: any;
    /** (Optional) The maximum number of accounts in which to perform this operation at one time. */
    max_concurrent_count?:         any;
    /** (Optional) The maximum percentage of accounts in which to perform this operation at one time. */
    max_concurrent_percentage?:    any;
    /** (Optional) The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time. Valid values are `SEQUENTIAL` and `PARALLEL`. */
    region_concurrency_type?:      any;
    /** (Optional) The order of the Regions in where you want to perform the stack operation. */
    region_order?:                 any;
}