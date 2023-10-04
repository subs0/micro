export interface WafregionalRateBasedRule {
    data: Datum[];
}

export interface Datum {
    wafregional_rate_based_rule: WafregionalRateBasedRuleClass;
}

export interface WafregionalRateBasedRuleClass {
    /** (Required) Name of the WAF Regional rate based rule. */
    name: any;
}