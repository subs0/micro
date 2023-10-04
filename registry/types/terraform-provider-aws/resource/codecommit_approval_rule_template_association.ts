export interface CodecommitApprovalRuleTemplateAssociation {
    resource: Resource[];
}

export interface Resource {
    codecommit_approval_rule_template_association: CodecommitApprovalRuleTemplateAssociationClass;
}

export interface CodecommitApprovalRuleTemplateAssociationClass {
    /** (Required) The name for the approval rule template. */
    approval_rule_template_name: any;
    /** (Required) The name of the repository that you want to associate with the template. */
    repository_name:             any;
}