export interface DirectoryServiceLogSubscription {
    resource: Resource[];
}

export interface Resource {
    directory_service_log_subscription: DirectoryServiceLogSubscriptionClass;
}

export interface DirectoryServiceLogSubscriptionClass {
    /** (Required) ID of directory. */
    directory_id:   any;
    /** (Required) Name of the cloudwatch log group to which the logs should be published. The log group should be already created and the directory service principal should be provided with required permission to create stream and publish logs. Changing this value would delete the current subscription and create a new one. A directory can only have one log subscription at a time. */
    log_group_name: any;
}