export interface ConfigOrganizationManagedRule {
    resource: Resource[];
}

export interface Resource {
    config_organization_managed_rule: ConfigOrganizationManagedRuleClass;
}

export interface ConfigOrganizationManagedRuleClass {
    /** (Required) The name of the rule */
    name:                         any;
    /** (Required) Identifier of an available AWS Config Managed Rule to call. For available values, see the [List of AWS Config Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html) documentation */
    rule_identifier:              any;
    /** (Optional) Description of the rule */
    description?:                 any;
    /** (Optional) List of AWS account identifiers to exclude from the rule */
    excluded_accounts?:           any;
    /** (Optional) A string in JSON format that is passed to the AWS Config Rule Lambda Function */
    input_parameters?:            any;
    /** (Optional) The maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`. */
    maximum_execution_frequency?: any;
    /** (Optional) Identifier of the AWS resource to evaluate */
    resource_id_scope?:           any;
    /** (Optional) List of types of AWS resources to evaluate */
    resource_types_scope?:        any;
    /** (Optional, Required if `tag_value_scope` is configured) Tag key of AWS resources to evaluate */
    tag_key_scope?:               any;
    /** (Optional) Tag value of AWS resources to evaluate */
    tag_value_scope?:             any;
}