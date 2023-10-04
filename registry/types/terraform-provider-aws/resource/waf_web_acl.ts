export interface WafWebACL {
    resource: Resource[];
}

export interface Resource {
    waf_web_acl: WafWebACLClass;
}

export interface WafWebACLClass {
    /** (Required) Configuration block with action that you want AWS WAF to take when a request doesn't match the criteria in any of the rules that are associated with the web ACL. Detailed below. */
    default_action:         any;
    /** (Required) The name or description for the Amazon CloudWatch metric of this web ACL. */
    metric_name:            any;
    /** (Required) The name or description of the web ACL. */
    name:                   any;
    /** (Optional) Configuration blocks containing rules to associate with the web ACL and the settings for each rule. Detailed below. */
    rules?:                 any;
    /** (Optional) Configuration block to enable WAF logging. Detailed below. */
    logging_configuration?: any;
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                  any;
    /** (Required) valid values are: `NONE` or `COUNT` */
    type:                   any;
    /** (Required) Amazon Resource Name (ARN) of Kinesis Firehose Delivery Stream */
    log_destination:        any;
    /** (Optional) Configuration block containing parts of the request that you want redacted from the logs. Detailed below. */
    redacted_fields?:       any;
    /** (Required) Set of configuration blocks for fields to redact. Detailed below. */
    field_to_match:         any;
    /** (Optional) When the value of `type` is `HEADER`, enter the name of the header that you want the WAF to search, for example, `User-Agent` or `Referer`. If the value of `type` is any other value, omit `data`. */
    data?:                  any;
    /** (Optional) The action that CloudFront or AWS WAF takes when a web request matches the conditions in the rule. Not used if `type` is `GROUP`. */
    action?:                any;
    /** (Optional) Override the action that a group requests CloudFront or AWS WAF takes when a web request matches the conditions in the rule. Only used if `type` is `GROUP`. */
    override_action?:       any;
    /** (Required) Specifies the order in which the rules in a WebACL are evaluated. */
    priority:               any;
    /** (Required) ID of the associated WAF (Global) rule (e.g., [`aws_waf_rule`](/docs/providers/aws/r/waf_rule.html)). WAF (Regional) rules cannot be used. */
    rule_id:                any;
}