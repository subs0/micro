export interface NetworkfirewallFirewallPolicy {
    data: Datum[];
}

export interface Datum {
    networkfirewall_firewall_policy: NetworkfirewallFirewallPolicyClass;
}

export interface NetworkfirewallFirewallPolicyClass {
    /** ARN of the firewall policy. */
    arn?:  any;
    /** Descriptive name of the firewall policy. */
    name?: any;
}