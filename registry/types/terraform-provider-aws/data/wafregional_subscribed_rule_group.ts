export interface WafregionalSubscribedRuleGroup {
    data: Datum[];
}

export interface Datum {
    wafregional_subscribed_rule_group: WafregionalSubscribedRuleGroupClass;
}

export interface WafregionalSubscribedRuleGroupClass {
    /** (Optional) Name of the WAF rule group. */
    name?:        any;
    /** (Optional) Name of the WAF rule group. */
    metric_name?: any;
}