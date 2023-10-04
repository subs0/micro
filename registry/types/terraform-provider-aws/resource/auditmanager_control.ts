export interface AuditmanagerControl {
    resource: Resource[];
}

export interface Resource {
    auditmanager_control: AuditmanagerControlClass;
}

export interface AuditmanagerControlClass {
    /** (Required) Name of the control. */
    name:                      any;
    control_mapping_sources:   ControlMappingSources;
    /** (Optional) Recommended actions to carry out if the control isn't fulfilled. */
    action_plan_instructions?: any;
    /** (Optional) Title of the action plan for remediating the control. */
    action_plan_title?:        any;
    /** (Optional) Description of the control. */
    description?:              any;
    /** (Optional) A map of tags to assign to the control. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Optional) Steps to follow to determine if the control is satisfied. */
    testing_information?:      any;
    /** (Optional) The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. See [`source_keyword`](#source_keyword) below. */
    source_keyword?:           SourceKeyword;
}

export interface ControlMappingSources {
    /** (Required) Name of the source. */
    source_name:           any;
    /** (Required) The setup option for the data source. This option reflects if the evidence collection is automated or manual. Valid values are `System_Controls_Mapping` (automated) and `Procedural_Controls_Mapping` (manual). */
    source_set_up_option:  any;
    /** (Required) Type of data source for evidence collection. If `source_set_up_option` is manual, the only valid value is `MANUAL`. If `source_set_up_option` is automated, valid values are `AWS_Cloudtrail`, `AWS_Config`, `AWS_Security_Hub`, or `AWS_API_Call`. */
    source_type:           any;
    /** (Optional) Description of the source. */
    source_description?:   any;
    /** (Optional) Frequency of evidence collection. Valid values are `DAILY`, `WEEKLY`, or `MONTHLY`. */
    source_frequency?:     any;
    /** (Optional) The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. See [`source_keyword`](#source_keyword) below. */
    source_keyword?:       any;
    /** (Optional) Instructions for troubleshooting the control. */
    troubleshooting_text?: any;
}

export interface SourceKeyword {
    /** (Required) Input method for the keyword. Valid values are `SELECT_FROM_LIST`. */
    keyword_input_type: any;
    /** (Required) The value of the keyword that's used when mapping a control data source. For example, this can be a CloudTrail event name, a rule name for Config, a Security Hub control, or the name of an Amazon Web Services API call. See the [Audit Manager supported control data sources documentation](https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources.html) for more information. */
    keyword_value:      any;
}