export interface RedshiftScheduledAction {
    resource: Resource[];
}

export interface Resource {
    redshift_scheduled_action: RedshiftScheduledActionClass;
}

export interface RedshiftScheduledActionClass {
    /** (Required) The scheduled action name. */
    name:               any;
    /** (Optional) The description of the scheduled action. */
    description?:       any;
    /** (Optional) Whether to enable the scheduled action. Default is `true` . */
    enable?:            any;
    /** (Optional) The start time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ). */
    start_time?:        any;
    /** (Optional) The end time in UTC when the schedule is active, in UTC RFC3339 format(for example, YYYY-MM-DDTHH:MM:SSZ). */
    end_time?:          any;
    /** (Required) The schedule of action. The schedule is defined format of "at expression" or "cron expression", for example `at(2016-03-04T17:27:00)` or `cron(0 10 ? * MON *)`. See [Scheduled Action](https://docs.aws.amazon.com/redshift/latest/APIReference/API_ScheduledAction.html) for more information. */
    schedule:           any;
    /** (Required) The IAM role to assume to run the scheduled action. */
    iam_role:           any;
    /** (Required) Target action. Documented below. */
    target_action:      any;
    /** (Optional) An action that runs a `PauseCluster` API operation. Documented below. */
    pause_cluster?:     any;
    /** (Optional) An action that runs a `ResizeCluster` API operation. Documented below. */
    resize_cluster?:    any;
    /** (Optional) An action that runs a `ResumeCluster` API operation. Documented below. */
    resume_cluster?:    any;
    /** (Required) The identifier of the cluster to be resumed. */
    cluster_identifier: any;
    /** (Optional) A boolean value indicating whether the resize operation is using the classic resize process. Default: `false`. */
    classic?:           any;
    /** (Optional)　The new cluster type for the specified cluster. */
    cluster_type?:      any;
    /** (Optional) The new node type for the nodes you are adding. */
    node_type?:         any;
    /** (Optional) The new number of nodes for the cluster. */
    number_of_nodes?:   any;
}