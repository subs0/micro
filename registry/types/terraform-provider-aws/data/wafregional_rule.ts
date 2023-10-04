export interface WafregionalRule {
    data: Datum[];
}

export interface Datum {
    wafregional_rule: WafregionalRuleClass;
}

export interface WafregionalRuleClass {
    /** (Required) Name of the WAF Regional rule. */
    name: any;
}