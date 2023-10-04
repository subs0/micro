export interface GlueTrigger {
    resource: Resource[];
}

export interface Resource {
    glue_trigger: GlueTriggerClass;
}

export interface GlueTriggerClass {
    /** (Optional) Key-value map of resource tags. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                     any;
    /** (Optional) A workflow to which the trigger should be associated to. Every workflow graph (DAG) needs a starting trigger (`ON_DEMAND` or `SCHEDULED` type) and can contain multiple additional `CONDITIONAL` triggers. */
    workflow_name?:            any;
    /** (Optional) Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires. See [Event Batching Condition](#event-batching-condition). */
    event_batching_condition?: any;
    /** (Optional) Arguments to be passed to the job. You can specify arguments here that your own job-execution script consumes, as well as arguments that AWS Glue itself consumes. */
    arguments?:                any;
    /** (Optional) The name of the crawler to watch. If this is specified, `crawl_state` must also be specified. Conflicts with `job_name`. */
    crawler_name?:             any;
    /** (Optional) The name of the job to watch. If this is specified, `state` must also be specified. Conflicts with `crawler_name`. */
    job_name?:                 any;
    /** (Optional) The job run timeout in minutes. It overrides the timeout value of the job. */
    timeout?:                  any;
    /** (Optional) The name of the Security Configuration structure to be used with this action. */
    security_configuration?:   any;
    /** (Optional) Specifies configuration properties of a job run notification. See [Notification Property](#notification-property) details below. */
    notification_property?:    any;
    /** (Optional) After a job run starts, the number of minutes to wait before sending a job run delay notification. */
    notify_delay_after?:       any;
    /** (Required) A list of the conditions that determine when the trigger will fire. See [Conditions](#conditions). */
    conditions:                any;
    /** (Optional) How to handle multiple conditions. Defaults to `AND`. Valid values are `AND` or `ANY`. */
    logical?:                  any;
    /** (Optional) The condition job state. Currently, the values supported are `SUCCEEDED`, `STOPPED`, `TIMEOUT` and `FAILED`. If this is specified, `job_name` must also be specified. Conflicts with `crawler_state`. */
    state?:                    any;
    /** (Optional) The condition crawl state. Currently, the values supported are `RUNNING`, `SUCCEEDED`, `CANCELLED`, and `FAILED`. If this is specified, `crawler_name` must also be specified. Conflicts with `state`. */
    crawl_state?:              any;
    /** (Optional) A logical operator. Defaults to `EQUALS`. */
    logical_operator?:         any;
    /** (Required)Number of events that must be received from Amazon EventBridge before EventBridge  event trigger fires. */
    batch_size?:               any;
    /** (Optional) Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received. Default value is `900`. */
    batch_window?:             any;
}