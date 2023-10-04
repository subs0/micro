export interface ConfigDeliveryChannel {
    resource: Resource[];
}

export interface Resource {
    config_delivery_channel: ConfigDeliveryChannelClass;
}

export interface ConfigDeliveryChannelClass {
    /** (Optional) The name of the delivery channel. Defaults to `default`. Changing it recreates the resource. */
    name?:                         any;
    /** (Required) The name of the S3 bucket used to store the configuration history. */
    s3_bucket_name:                any;
    /** (Optional) The prefix for the specified S3 bucket. */
    s3_key_prefix?:                any;
    /** (Optional) The ARN of the AWS KMS key used to encrypt objects delivered by AWS Config. Must belong to the same Region as the destination S3 bucket. */
    s3_kms_key_arn?:               any;
    /** (Optional) The ARN of the SNS topic that AWS Config delivers notifications to. */
    sns_topic_arn?:                any;
    /** (Optional) Options for how AWS Config delivers configuration snapshots. See below */
    snapshot_delivery_properties?: any;
    /** (Optional) - The frequency with which AWS Config recurringly delivers configuration snapshotsE.g., `One_Hour` or `Three_Hours`. Valid values are listed [here](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html#API_ConfigSnapshotDeliveryProperties_Contents). */
    delivery_frequency?:           any;
}