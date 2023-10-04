export interface BudgetsBudget {
    resource: Resource[];
}

export interface Resource {
    budgets_budget: BudgetsBudgetClass;
}

export interface BudgetsBudgetClass {
    /** (Optional) The ID of the target account for budget. Will use current user's account_id by default if omitted. */
    account_id?:        any;
    /** (Optional) Object containing [AutoAdjustData] which determines the budget amount for an auto-adjusting budget. */
    auto_adjust_data?:  any;
    /** (Optional) The name of a budget. Unique within accounts. */
    name?:              any;
    /** (Optional) The prefix of the name of a budget. Unique within accounts. */
    name_prefix?:       any;
    /** (Required) Whether this budget tracks monetary cost or usage. */
    budget_type:        any;
    /** (Optional) A list of [CostFilter](#cost-filter) name/values pair to apply to budget. */
    cost_filter?:       any;
    /** (Optional) Object containing [CostTypes](#cost-types) The types of cost included in a budget, such as tax and subscriptions. */
    cost_types?:        any;
    /** (Required) The amount of cost or usage being measured for a budget. */
    limit_amount:       any;
    /** (Required) The unit of measurement used for the budget forecast, actual spend, or budget threshold, such as dollars or GB. See [Spend](http://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/data-type-spend.html) documentation. */
    limit_unit:         any;
    /** (Optional) The end of the time period covered by the budget. There are no restrictions on the end date. Format: `2017-01-01_12:00`. */
    time_period_end?:   any;
    /** (Optional) The start of the time period covered by the budget. If you don't specify a start date, AWS defaults to the start of your chosen time period. The start date must come before the end date. Format: `2017-01-01_12:00`. */
    time_period_start?: any;
    /** (Required) The length of time until a budget resets the actual and forecasted spend. Valid values: `MONTHLY`, `QUARTERLY`, `ANNUALLY`, and `DAILY`. */
    time_unit:          any;
    /** (Optional) Object containing [Budget Notifications](#budget-notification). Can be used multiple times to define more than one budget notification. */
    notification?:      any;
    /** (Optional) Object containing [Planned Budget Limits](#planned-budget-limits). Can be used multiple times to plan more than one budget limit. See [PlannedBudgetLimits](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_budgets_Budget.html#awscostmanagement-Type-budgets_Budget-PlannedBudgetLimits) documentation. */
    planned_limit?:     any;
}