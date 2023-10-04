export interface Route53ResolverRules {
    data: Datum[];
}

export interface Datum {
    route53_resolver_rules: Route53ResolverRulesClass;
}

export interface Route53ResolverRulesClass {
    /** (Optional) Regex string to filter resolver rule names. */
    name_regex?: any;
}