export interface NetworkfirewallResourcePolicy {
    data: Datum[];
}

export interface Datum {
    networkfirewall_resource_policy: NetworkfirewallResourcePolicyClass;
}

export interface NetworkfirewallResourcePolicyClass {
    /** (Required) The Amazon Resource Name (ARN) that identifies the resource policy. */
    resource_arn: any;
}