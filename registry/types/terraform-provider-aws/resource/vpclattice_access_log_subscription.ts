export interface VpclatticeAccessLogSubscription {
    resource: Resource[];
}

export interface Resource {
    vpclattice_access_log_subscription: VpclatticeAccessLogSubscriptionClass;
}

export interface VpclatticeAccessLogSubscriptionClass {
    /** (Required) Amazon Resource Name (ARN) of the log destination. */
    destination_arn:     any;
    /** (Required) The ID or Amazon Resource Identifier (ARN) of the service network or service. You must use the ARN if the resources specified in the operation are in different accounts. */
    resource_identifier: any;
}