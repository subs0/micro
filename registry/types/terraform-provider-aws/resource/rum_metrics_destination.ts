export interface RumMetricsDestination {
    resource: Resource[];
}

export interface Resource {
    rum_metrics_destination: RumMetricsDestinationClass;
}

export interface RumMetricsDestinationClass {
    /** (Required) The name of the CloudWatch RUM app monitor that will send the metrics. */
    app_monitor_name: any;
    /** (Required)  Defines the destination to send the metrics to. Valid values are `CloudWatch` and `Evidently`. If you specify `Evidently`, you must also specify the ARN of the CloudWatchEvidently experiment that is to be the destination and an IAM role that has permission to write to the experiment. */
    destination:      any;
    /** (Optional) Use this parameter only if Destination is Evidently. This parameter specifies the ARN of the Evidently experiment that will receive the extended metrics. */
    destination_arn?: any;
    /** (Optional) This parameter is required if Destination is Evidently. If Destination is CloudWatch, do not use this parameter. */
    iam_role_arn?:    any;
}