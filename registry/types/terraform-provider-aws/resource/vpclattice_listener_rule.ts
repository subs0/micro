export interface VpclatticeListenerRule {
    resource: Resource[];
}

export interface Resource {
    vpclattice_listener_rule: VpclatticeListenerRuleClass;
}

export interface VpclatticeListenerRuleClass {
    /** (Required) The ID or Amazon Resource Identifier (ARN) of the service. */
    service_identifier:  any;
    /** (Required) The ID or Amazon Resource Name (ARN) of the listener. */
    listener_identifier: any;
    /** (Required) The action for the listener rule. */
    action:              any;
    /** (Required) The rule match. */
    match:               any;
    /** (Required) The name of the rule. The name must be unique within the listener. The valid characters are a-z, 0-9, and hyphens (-). You can't use a hyphen as the first or last character, or immediately after another hyphen. */
    name:                any;
    /** (Required) The priority assigned to the rule. Each rule for a specific listener must have a unique priority. The lower the priority number the higher the priority. */
    priority:            any;
    /** (Optional) Key-value mapping of resource tags. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:               any;
    /** (Optional) Describes the rule action that returns a custom HTTP response. */
    fixed_response?:     any;
    /** (Optional) The forward action. Traffic that matches the rule is forwarded to the specified target groups. */
    forward?:            any;
    /** (Optional) The HTTP response code. */
    status_code?:        any;
    /** (Optional) The target groups. Traffic matching the rule is forwarded to the specified target groups. With forward actions, you can assign a weight that controls the prioritization and selection of each target group. This means that requests are distributed to individual target groups based on their weights. For example, if two target groups have the same weight, each target group receives half of the traffic. */
    target_groups?:      any;
    /** (Optional) The HTTP criteria that a rule must match. */
    http_match?:         any;
    /** (Optional) The header matches. Matches incoming requests with rule based on request header value before applying rule action. */
    header_matches?:     any;
    /** (Optional) The HTTP method type. */
    method?:             any;
    /** (Optional) The path match. */
    path_match?:         any;
    /** (Optional) Indicates whether the match is case sensitive. Defaults to false. */
    case_sensitive?:     any;
    /** (Optional) Specifies a contains type match. */
    contains?:           any;
    /** (Optional) Specifies an exact type match. */
    exact?:              any;
    /** (Optional) Specifies a prefix type match. Matches the value with the prefix. */
    prefix?:             any;
}