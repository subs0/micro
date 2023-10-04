export interface WafSQLInjectionMatchSet {
    resource: Resource[];
}

export interface Resource {
    waf_sql_injection_match_set: WafSQLInjectionMatchSetClass;
}

export interface WafSQLInjectionMatchSetClass {
    /** (Required) The name or description of the SQL Injection Match Set. */
    name:                        any;
    /** (Optional) The parts of web requests that you want AWS WAF to inspect for malicious SQL code and, if you want AWS WAF to inspect a header, the name of the header. */
    sql_injection_match_tuples?: any;
}