export interface CodecommitApprovalRuleTemplate {
    resource: Resource[];
}

export interface Resource {
    codecommit_approval_rule_template: CodecommitApprovalRuleTemplateClass;
}

export interface CodecommitApprovalRuleTemplateClass {
    /** (Required) The content of the approval rule template. Maximum of 3000 characters. */
    content:      any;
    /** (Required) The name for the approval rule template. Maximum of 100 characters. */
    name:         any;
    /** (Optional) The description of the approval rule template. Maximum of 1000 characters. */
    description?: any;
}