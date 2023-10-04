export interface NetworkfirewallFirewall {
    data: Datum[];
}

export interface Datum {
    networkfirewall_firewall: NetworkfirewallFirewallClass;
}

export interface NetworkfirewallFirewallClass {
    /** ARN of the firewall. */
    arn?:  any;
    /** Descriptive name of the firewall. */
    name?: any;
}