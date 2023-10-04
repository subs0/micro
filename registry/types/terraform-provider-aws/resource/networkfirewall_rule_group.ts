export interface NetworkfirewallRuleGroup {
    resource: Resource[];
}

export interface Resource {
    networkfirewall_rule_group: { [key: any]: string };
}