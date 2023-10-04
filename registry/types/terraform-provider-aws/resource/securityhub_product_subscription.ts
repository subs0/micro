export interface SecurityhubProductSubscription {
    resource: Resource[];
}

export interface Resource {
    securityhub_product_subscription: SecurityhubProductSubscriptionClass;
}

export interface SecurityhubProductSubscriptionClass {
    /** (Required) The ARN of the product that generates findings that you want to import into Security Hub - see below. */
    product_arn: any;
}