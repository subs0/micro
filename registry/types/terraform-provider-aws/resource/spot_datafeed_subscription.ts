export interface SpotDatafeedSubscription {
    resource: Resource[];
}

export interface Resource {
    spot_datafeed_subscription: SpotDatafeedSubscriptionClass;
}

export interface SpotDatafeedSubscriptionClass {
    /** (Required) The Amazon S3 bucket in which to store the Spot instance data feed. */
    bucket:  any;
    /** (Optional) Path of folder inside bucket to place spot pricing data. */
    prefix?: any;
}