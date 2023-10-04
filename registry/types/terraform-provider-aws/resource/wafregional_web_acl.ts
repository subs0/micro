export interface WafregionalWebACL {
    resource: Resource[];
}

export interface Resource {
    wafregional_web_acl: WafregionalWebACLClass;
}

export interface WafregionalWebACLClass {
    /** (Required) The action that you want AWS WAF Regional to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL. */
    default_action:         any;
    /** (Required) The name or description for the Amazon CloudWatch metric of this web ACL. */
    metric_name:            any;
    /** (Required) The name or description of the web ACL. */
    name:                   any;
    /** (Optional) Configuration block to enable WAF logging. Detailed below. */
    logging_configuration?: any;
    /** (Optional) Set of configuration blocks containing rules for the web ACL. Detailed below. */
    rule?:                  any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) Specifies how you want AWS WAF Regional to respond to requests that match the settings in a rule. Valid values for `action` are `ALLOW`, `BLOCK` or `COUNT`. Valid values for `override_action` are `COUNT` and `NONE`. */
    type:                   any;
    /** (Required) Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream */
    log_destination:        any;
    /** (Optional) Configuration block containing parts of the request that you want redacted from the logs. Detailed below. */
    redacted_fields?:       any;
    /** (Required) Set of configuration blocks for fields to redact. Detailed below. */
    field_to_match:         any;
    /** (Optional) When the value of `type` is `HEADER`, enter the name of the header that you want the WAF to search, for example, `User-Agent` or `Referer`. If the value of `type` is any other value, omit `data`. */
    data?:                  any;
    /** (Required) Specifies the order in which the rules in a WebACL are evaluated. */
    priority:               any;
    /** (Required) ID of the associated WAF (Regional) rule (e.g., [`aws_wafregional_rule`](/docs/providers/aws/r/wafregional_rule.html)). WAF (Global) rules cannot be used. */
    rule_id:                any;
    /** (Optional) Configuration block of the action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  Not used if `type` is `GROUP`. Detailed below. */
    action?:                any;
    /** (Optional) Configuration block of the override the action that a group requests CloudFront or AWS WAF takes when a web request matches the conditions in the rule.  Only used if `type` is `GROUP`. Detailed below. */
    override_action?:       any;
}