export interface Wafv2RuleGroup {
    resource: Resource[];
}

export interface Resource {
    wafv2_rule_group: { [key: any]: string };
}