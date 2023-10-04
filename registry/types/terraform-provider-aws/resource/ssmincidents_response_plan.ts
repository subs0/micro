export interface SsmincidentsResponsePlan {
    resource: Resource[];
}

export interface Resource {
    ssmincidents_response_plan: SsmincidentsResponsePlanClass;
}

export interface SsmincidentsResponsePlanClass {
    "1"?:                 any;
    "2"?:                 any;
    "3"?:                 any;
    "4"?:                 any;
    "5"?:                 any;
    /** (Required) The name of the PagerDuty configuration. */
    name:                 any;
    /** (Required) The title of a generated incident. */
    title:                any;
    /** (Required) The impact value of a generated incident. The following values are supported: */
    impact:               any;
    dedupe_any?:       string;
    /** (Optional) The tags assigned to an incident template. When an incident starts, Incident Manager assigns the tags specified in the template to the incident. */
    incident_tags?:       any;
    /** (Optional) The summary of an incident. */
    summary?:             any;
    /** (Optional) The Amazon Simple Notification Service (Amazon SNS) targets that this incident notifies when it is updated. The `notification_target` configuration block supports the following argument: */
    notification_target?: any;
    /** (Required) The ARN of the Amazon SNS topic. */
    sns_topic_arn:        any;
    /** (Optional) The tags applied to the response plan. */
    tags?:                any;
    /** (Optional) The long format of the response plan name. This field can contain spaces. */
    display_name?:        any;
    /** (Optional) The Chatbot chat channel used for collaboration during an incident. */
    chat_channel?:        any;
    /** (Optional) The Amazon Resource Name (ARN) for the contacts and escalation plans that the response plan engages during an incident. */
    engagements?:         any;
    /** (Optional) The actions that the response plan starts at the beginning of an incident. */
    action?:              any;
    /** (Optional) The Systems Manager automation document to start as the runbook at the beginning of the incident. The following values are supported: */
    ssm_automation?:      any;
    /** (Required) The automation document's name. */
    document_name:        any;
    /** (Required) The Amazon Resource Name (ARN) of the role that the automation document assumes when it runs commands. */
    role_arn:             any;
    /** (Optional) The version of the automation document to use at runtime. */
    document_version?:    any;
    /**  (Optional) The account that the automation document runs in. This can be in either the management account or an application account. */
    target_account?:      any;
    /** (Optional) The key-value pair parameters to use when the automation document runs. The following values are supported: */
    parameter?:           any;
    /** The values for the associated parameter name. */
    values?:              any;
    /** (Optional) The key-value pair to resolve dynamic parameter values when processing a Systems Manager Automation runbook. */
    dynamic_parameters?:  any;
    /** (Optional) Information about third-party services integrated into the response plan. The following values are supported: */
    integration?:         any;
    /** (Optional) Details about the PagerDuty configuration for a response plan. The following values are supported: */
    pagerduty?:           any;
    /** (Required) The ID of the PagerDuty service that the response plan associated with the incident at launch. */
    service_id:           any;
    /** (Required) The ID of the AWS Secrets Manager secret that stores your PagerDuty key &mdash; either a General Access REST API Key or User Token REST API Key &mdash; and other user credentials. */
    secret_id:            any;
    /** The ARN of the response plan. */
    arn?:                 any;
    /** A map of tags assigned to the resource, including those inherited from the provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block). */
    tags_all?:            any;
}