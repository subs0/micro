export interface BudgetsBudget {
    data: Datum[];
}

export interface Datum {
    budgets_budget: BudgetsBudgetClass;
}

export interface BudgetsBudgetClass {
    /** The name of a budget. Unique within accounts. */
    name?:        any;
    /** The ID of the target account for budget. Will use current user's account_id by default if omitted. */
    account_id?:  any;
    /** The prefix of the name of a budget. Unique within accounts. */
    name_prefix?: any;
}