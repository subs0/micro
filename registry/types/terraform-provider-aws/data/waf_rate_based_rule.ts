export interface WafRateBasedRule {
    data: Datum[];
}

export interface Datum {
    waf_rate_based_rule: WafRateBasedRuleClass;
}

export interface WafRateBasedRuleClass {
    /** (Required) Name of the WAF rate based rule. */
    name: any;
}