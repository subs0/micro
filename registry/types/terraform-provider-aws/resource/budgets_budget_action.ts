export interface BudgetsBudgetAction {
    resource: Resource[];
}

export interface Resource {
    budgets_budget_action: BudgetsBudgetActionClass;
}

export interface BudgetsBudgetActionClass {
    /** (Optional) The ID of the target account for budget. Will use current user's account_id by default if omitted. */
    account_id?:            any;
    /** (Required) The name of a budget. */
    budget_name:            any;
    /** (Required) The trigger threshold of the action. See [Action Threshold](#action-threshold). */
    action_threshold:       any;
    /** (Required) The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition. Valid values are `APPLY_IAM_POLICY`, `APPLY_SCP_POLICY`, and `RUN_SSM_DOCUMENTS`. */
    action_type:            any;
    /** (Required) This specifies if the action needs manual or automatic approval. Valid values are `AUTOMATIC` and `MANUAL`. */
    approval_model:         any;
    /** (Required) Specifies all of the type-specific parameters. See [Definition](#definition). */
    definition:             any;
    /** (Required) The role passed for action execution and reversion. Roles and actions must be in the same account. */
    execution_role_arn:     any;
    /** (Required) The type of a notification. Valid values are `ACTUAL` or `FORECASTED`. */
    notification_type:      any;
    /** (Required) A list of subscribers. See [Subscriber](#subscriber). */
    subscriber:             any;
    /** (Required) The type of threshold for a notification. Valid values are `PERCENTAGE` or `ABSOLUTE_VALUE`. */
    action_threshold_type:  any;
    /** (Required) The threshold of a notification. */
    action_threshold_value: any;
    /** (Required) The address that AWS sends budget notifications to, either an SNS topic or an email. */
    address:                any;
    /** (Required) The type of notification that AWS sends to a subscriber. Valid values are `SNS` or `EMAIL`. */
    subscription_type:      any;
    /** (Optional) The AWS Identity and Access Management (IAM) action definition details. See [IAM Action Definition](#iam-action-definition). */
    iam_action_definition?: any;
    /** (Optional) The AWS Systems Manager (SSM) action definition details. See [SSM Action Definition](#ssm-action-definition). */
    ssm_action_definition?: any;
    /** (Optional) The service control policies (SCPs) action definition details. See [SCP Action Definition](#scp-action-definition). */
    scp_action_definition?: any;
    /** (Required) The Amazon Resource Name (ARN) of the policy to be attached. */
    policy_arn:             any;
    /** (Optional) A list of groups to be attached. There must be at least one group. */
    groups?:                any;
    /** (Optional) A list of roles to be attached. There must be at least one role. */
    roles?:                 any;
    /** (Optional) A list of users to be attached. There must be at least one user. */
    users?:                 any;
    /** (Required) The policy ID attached. */
    policy_id:              any;
    /** (Optional) A list of target IDs. */
    target_ids?:            any;
    /** (Required) The action subType. Valid values are `STOP_EC2_INSTANCES` or `STOP_RDS_INSTANCES`. */
    action_sub_type:        any;
    /** (Required) The EC2 and RDS instance IDs. */
    instance_ids:           any;
    /** (Required) The Region to run the SSM document. */
    region:                 any;
}