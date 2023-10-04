export interface SecurityhubStandardsSubscription {
    resource: Resource[];
}

export interface Resource {
    securityhub_standards_subscription: SecurityhubStandardsSubscriptionClass;
}

export interface SecurityhubStandardsSubscriptionClass {
    /** (Required) The ARN of a standard - see below. */
    standards_arn: any;
}