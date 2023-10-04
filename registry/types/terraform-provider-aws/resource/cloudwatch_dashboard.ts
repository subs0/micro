export interface CloudwatchDashboard {
    resource: Resource[];
}

export interface Resource {
    cloudwatch_dashboard: CloudwatchDashboardClass;
}

export interface CloudwatchDashboardClass {
    /** (Required) The name of the dashboard. */
    dashboard_name: any;
    /** (Required) The detailed information about the dashboard, including what widgets are included and their location on the dashboard. You can read more about the body structure in the [documentation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/CloudWatch-Dashboard-Body-Structure.html). */
    dashboard_body: any;
}