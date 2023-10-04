export interface AccessanalyzerArchiveRule {
    resource: Resource[];
}

export interface Resource {
    accessanalyzer_archive_rule: AccessanalyzerArchiveRuleClass;
}

export interface AccessanalyzerArchiveRuleClass {
    /** (Required) Analyzer name. */
    analyzer_name: any;
    /** (Required) Filter criteria for the archive rule. See [Filter](#filter) for more details. */
    filter:        any;
    /** (Required) Rule name. */
    rule_name:     any;
    /** (Required) Filter criteria. */
    criteria:      any;
    /** (Optional) Contains comparator. */
    contains?:     any;
    /** (Optional) Equals comparator. */
    eq?:           any;
    /** (Optional) Boolean comparator. */
    exists?:       any;
    /** (Optional) Not Equals comparator. */
    neq?:          any;
}