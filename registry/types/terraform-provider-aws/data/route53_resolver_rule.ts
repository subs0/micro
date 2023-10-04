export interface Route53ResolverRule {
    data: Datum[];
}

export interface Datum {
    route53_resolver_rule: Route53ResolverRuleClass;
}

export interface Route53ResolverRuleClass {
    /** (Optional) Domain name the desired resolver rule forwards DNS queries for. Conflicts with `resolver_rule_id`. */
    domain_name?: any;
    /** (Optional) Friendly name of the desired resolver rule. Conflicts with `resolver_rule_id`. */
    name?:        any;
    /** (Optional) Rule type of the desired resolver rule. Valid values are `FORWARD`, `SYSTEM` and `RECURSIVE`. Conflicts with `resolver_rule_id`. */
    rule_type?:   any;
}