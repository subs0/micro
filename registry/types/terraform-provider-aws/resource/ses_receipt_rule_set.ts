export interface SesReceiptRuleSet {
    resource: Resource[];
}

export interface Resource {
    ses_receipt_rule_set: SesReceiptRuleSetClass;
}

export interface SesReceiptRuleSetClass {
    /** (Required) Name of the rule set. */
    rule_set_name: any;
}