export interface NetworkfirewallResourcePolicy {
    resource: Resource[];
}

export interface Resource {
    networkfirewall_resource_policy: NetworkfirewallResourcePolicyClass;
}

export interface NetworkfirewallResourcePolicyClass {
    /** (Required) JSON formatted policy document that controls access to the Network Firewall resource. The policy must be provided **without whitespaces**.  We recommend using [jsonencode](https://www.terraform.io/docs/configuration/functions/jsonencode.html) for formatting as seen in the examples above. For more details, including available policy statement Actions, see the [Policy](https://docs.aws.amazon.com/network-firewall/latest/APIReference/API_PutResourcePolicy.html#API_PutResourcePolicy_RequestSyntax) parameter in the AWS API documentation. */
    policy:        any;
    /** (Required, Forces new resource) The Amazon Resource Name (ARN) of the rule group or firewall policy. */
    resource_arn?: any;
}