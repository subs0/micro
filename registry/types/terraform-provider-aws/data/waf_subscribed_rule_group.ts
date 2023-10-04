export interface WafSubscribedRuleGroup {
    data: Datum[];
}

export interface Datum {
    waf_subscribed_rule_group: WafSubscribedRuleGroupClass;
}

export interface WafSubscribedRuleGroupClass {
    /** (Optional) Name of the WAF rule group. */
    name?:        any;
    /** (Optional) Name of the WAF rule group. */
    metric_name?: any;
}