export interface AutoscalingNotification {
    resource: Resource[];
}

export interface Resource {
    autoscaling_notification: AutoscalingNotificationClass;
}

export interface AutoscalingNotificationClass {
    /** (Required) List of AutoScaling Group Names */
    group_names:   any;
    /** (Required) List of Notification Types that trigger */
    notifications: any;
    /** (Required) Topic ARN for notifications to be sent through */
    topic_arn:     any;
}