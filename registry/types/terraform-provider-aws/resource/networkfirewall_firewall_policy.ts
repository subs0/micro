export interface NetworkfirewallFirewallPolicy {
    resource: Resource[];
}

export interface Resource {
    networkfirewall_firewall_policy: NetworkfirewallFirewallPolicyClass;
}

export interface NetworkfirewallFirewallPolicyClass {
    /** (Optional) A friendly description of the firewall policy. */
    description?:                       any;
    /** (Optional) KMS encryption configuration settings. See [Encryption Configuration](#encryption-configuration) below for details. */
    encryption_configuration?:          any;
    /** (Required) A configuration block describing the rule groups and policy actions to use in the firewall policy. See [Firewall Policy](#firewall-policy) below for details. */
    firewall_policy:                    any;
    /** (Required, Forces new resource) A friendly name of the firewall policy. */
    name?:                              any;
    /** (Optional) Map of resource tags to associate with the resource. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                              any;
    /** (Optional) The ID of the customer managed key. You can use any of the [key identifiers](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id) that KMS supports, unless you're using a key that's managed by another account. If you're using a key managed by another account, then specify the key ARN. */
    key_id?:                            any;
    /** (Required) The type of AWS KMS key to use for encryption of your Network Firewall resources. Valid values are `CUSTOMER_KMS` and `AWS_OWNED_KMS_KEY`. */
    type:                               any;
    /** (Optional). Contains variables that you can use to override default Suricata settings in your firewall policy. See [Rule Variables](#rule-variables) for details. */
    policy_variables?:                  any;
    /** (Optional) Set of actions to take on a packet if it does not match any stateful rules in the policy. This can only be specified if the policy has a `stateful_engine_options` block with a `rule_order` value of `STRICT_ORDER`. You can specify one of either or neither values of `aws:drop_strict` or `aws:drop_established`, as well as any combination of `aws:alert_strict` and `aws:alert_established`. */
    stateful_default_actions?:          any;
    /** (Optional) A configuration block that defines options on how the policy handles stateful rules. See [Stateful Engine Options](#stateful-engine-options) below for details. */
    stateful_engine_options?:           any;
    /** (Optional) Set of configuration blocks containing references to the stateful rule groups that are used in the policy. See [Stateful Rule Group Reference](#stateful-rule-group-reference) below for details. */
    stateful_rule_group_reference?:     any;
    /** (Optional) Set of configuration blocks describing the custom action definitions that are available for use in the firewall policy's `stateless_default_actions`. See [Stateless Custom Action](#stateless-custom-action) below for details. */
    stateless_custom_action?:           any;
    /** (Required) Set of actions to take on a packet if it does not match any of the stateless rules in the policy. You must specify one of the standard actions including: `aws:drop`, `aws:pass`, or `aws:forward_to_sfe`. */
    stateless_default_actions:          any;
    /** (Required) Set of actions to take on a fragmented packet if it does not match any of the stateless rules in the policy. You must specify one of the standard actions including: `aws:drop`, `aws:pass`, or `aws:forward_to_sfe`. */
    stateless_fragment_default_actions: any;
    /** (Optional) Set of configuration blocks containing references to the stateless rule groups that are used in the policy. See [Stateless Rule Group Reference](#stateless-rule-group-reference) below for details. */
    stateless_rule_group_reference?:    any;
    /** (Required) An alphanumeric string to identify the `ip_set`. Valid values: `HOME_NET` */
    key:                                any;
    /** (Required) A configuration block that defines a set of IP addresses. See [IP Set](#ip-set) below for details. */
    ip_set:                             any;
    /** (Required) Set of IPv4 or IPv6 addresses in CIDR notation to use for the Suricata `HOME_NET` variable. */
    definition:                         any;
    /** Indicates how to manage the order of stateful rule evaluation for the policy. Default value: `DEFAULT_ACTION_ORDER`. Valid values: `DEFAULT_ACTION_ORDER`, `STRICT_ORDER`. */
    rule_order?:                        any;
    /** Describes how to treat traffic which has broken midstream. Default value: `DROP`. Valid values: `DROP`, `CONTINUE`, `REJECT`. */
    stream_exception_policy?:           any;
    /** (Required) An integer setting that indicates the order in which to run the stateless rule groups in a single policy. AWS Network Firewall applies each stateless rule group to a packet starting with the group that has the lowest priority setting. */
    priority:                           any;
    /** (Required) The Amazon Resource Name (ARN) of the stateless rule group. */
    resource_arn:                       any;
    /** (Optional) Configuration block for override values */
    override?:                          any;
    /** (Optional) The action that changes the rule group from DROP to ALERT . This only applies to managed rule groups. */
    action?:                            any;
    /** (Required) A configuration block describing the custom action associated with the `action_name`. See [Action Definition](#action-definition) below for details. */
    action_definition:                  any;
    /** (Required, Forces new resource) A friendly name of the custom action. */
    action_name?:                       any;
    /** (Required) A configuration block describing the stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. You can pair this custom action with any of the standard stateless rule actions. See [Publish Metric Action](#publish-metric-action) below for details. */
    publish_metric_action:              any;
    /** (Required) Set of configuration blocks describing dimension settings to use for Amazon CloudWatch custom metrics. See [Dimension](#dimension) below for more details. */
    dimension:                          any;
    /** (Required) The string value to use in the custom metric dimension. */
    value:                              any;
}