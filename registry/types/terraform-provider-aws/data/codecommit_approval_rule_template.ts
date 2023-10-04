export interface CodecommitApprovalRuleTemplate {
    data: Datum[];
}

export interface Datum {
    codecommit_approval_rule_template: CodecommitApprovalRuleTemplateClass;
}

export interface CodecommitApprovalRuleTemplateClass {
    /** (Required) Name for the approval rule template. This needs to be less than 100 characters. */
    name: any;
}