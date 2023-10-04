export interface WafRule {
    data: Datum[];
}

export interface Datum {
    waf_rule: WafRuleClass;
}

export interface WafRuleClass {
    /** (Required) Name of the WAF rule. */
    name: any;
}