export interface ConfigRemediationConfiguration {
    resource: Resource[];
}

export interface Resource {
    config_remediation_configuration: ConfigRemediationConfigurationClass;
}

export interface ConfigRemediationConfigurationClass {
    /** (Required) Name of the AWS Config rule. */
    config_rule_name:                      any;
    /** (Required) Target ID is the name of the public document. */
    target_id:                             any;
    /** (Required) Type of the target. Target executes remediation. For example, SSM document. */
    target_type:                           any;
    /** (Optional) Remediation is triggered automatically if `true`. */
    automatic?:                            any;
    /** (Optional) Configuration block for execution controls. See below. */
    execution_controls?:                   any;
    /** (Optional) Maximum number of failed attempts for auto-remediation. If you do not select a number, the default is 5. */
    maximum_automatic_attempts?:           any;
    /** (Optional) Can be specified multiple times for each parameter. Each parameter block supports arguments below. */
    parameter?:                            any;
    /** (Optional) Type of resource. */
    resource_type?:                        any;
    /** (Optional) Maximum time in seconds that AWS Config runs auto-remediation. If you do not select a number, the default is 60 seconds. */
    retry_attempt_seconds?:                any;
    /** (Optional) Version of the target. For example, version of the SSM document */
    target_version?:                       any;
    /** (Required) Configuration block for SSM controls. See below. */
    ssm_controls:                          any;
    /** (Optional) Maximum percentage of remediation actions allowed to run in parallel on the non-compliant resources for that specific rule. The default value is 10%. */
    concurrent_execution_rate_percentage?: any;
    /** (Optional) Percentage of errors that are allowed before SSM stops running automations on non-compliant resources for that specific rule. The default is 50%. */
    error_percentage?:                     any;
    /** (Required) Name of the attribute. */
    name:                                  any;
    /** (Optional) Value is dynamic and changes at run-time. */
    resource_value?:                       any;
    /** (Optional) Value is static and does not change at run-time. */
    static_value?:                         any;
    /** (Optional) List of static values. */
    static_values?:                        any;
}