export interface GuarddutyPublishingDestination {
    resource: Resource[];
}

export interface Resource {
    guardduty_publishing_destination: GuarddutyPublishingDestinationClass;
}

export interface GuarddutyPublishingDestinationClass {
    /** (Required) The detector ID of the GuardDuty. */
    detector_id:     any;
    /** (Required) The bucket arn and prefix under which the findings get exported. Bucket-ARN is required, the prefix is optional and will be `AWSLogs/[Account-ID]/GuardDuty/[Region]/` if not provided */
    destination_arn: any;
    /** (Required) The ARN of the KMS key used to encrypt GuardDuty findings. GuardDuty enforces this to be encrypted. */
    kms_key_arn:     any;
}