export interface SesActiveReceiptRuleSet {
    resource: Resource[];
}

export interface Resource {
    ses_active_receipt_rule_set: SesActiveReceiptRuleSetClass;
}

export interface SesActiveReceiptRuleSetClass {
    /** (Required) The name of the rule set */
    rule_set_name: any;
}