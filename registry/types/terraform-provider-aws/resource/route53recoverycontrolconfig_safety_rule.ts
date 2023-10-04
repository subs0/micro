export interface Route53RecoverycontrolconfigSafetyRule {
    resource: Resource[];
}

export interface Resource {
    route53recoverycontrolconfig_safety_rule: Route53RecoverycontrolconfigSafetyRuleClass;
}

export interface Route53RecoverycontrolconfigSafetyRuleClass {
    /** (Required) ARN of the control panel in which this safety rule will reside. */
    control_panel_arn:  any;
    /** (Required) Name describing the safety rule. */
    name:               any;
    rule_config:        RuleConfig;
    /** (Required) Evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. */
    wait_period_ms:     any;
    /** (Optional) Routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. */
    asserted_controls?: any;
    /** (Optional) Gating controls for the new gating rule. That is, routing controls that are evaluated by the rule configuration that you specify. */
    gating_controls?:   any;
    /** (Optional) Routing controls that can only be set or unset if the specified `rule_config` evaluates to true for the specified `gating_controls`. */
    target_controls?:   any;
}

export interface RuleConfig {
    /** (Required) Logical negation of the rule. */
    inverted:  any;
    /** (Required) Number of controls that must be set when you specify an `ATLEAST` type rule. */
    threshold: any;
    /** (Required) Rule type. Valid values are `ATLEAST`, `AND`, and `OR`. */
    type:      any;
}