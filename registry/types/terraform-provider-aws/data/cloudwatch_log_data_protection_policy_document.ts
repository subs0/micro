export interface CloudwatchLogDataProtectionPolicyDocument {
    data: Datum[];
}

export interface Datum {
    cloudwatch_log_data_protection_policy_document: CloudwatchLogDataProtectionPolicyDocumentClass;
}

export interface CloudwatchLogDataProtectionPolicyDocumentClass {
    /** (Required) The name of the data protection policy document. */
    name:                 any;
    /** (Required) Configures the data protection policy. */
    statement:            any;
    /** (Optional) */
    description?:         any;
    /** (Optional) */
    version?:             any;
    /** (Required) Set of at least 1 sensitive data identifiers that you want to mask. Read more in [Types of data that you can protect](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/protect-sensitive-log-data-types.html). */
    data_identifiers:     any;
    /** (Required) Configures the data protection operation applied by this statement. */
    operation:            any;
    /** (Optional) Name of this statement. */
    sid?:                 any;
    /** (Optional) Configures the detection of sensitive data. */
    audit?:               any;
    /** (Optional) Configures the masking of sensitive data. */
    deidentify?:          any;
    /** (Required) Configures destinations to send audit findings to. */
    findings_destination: any;
    /** (Optional) Configures CloudWatch Logs as a findings destination. */
    cloudwatch_logs?:     any;
    /** (Optional) Configures Kinesis Firehose as a findings destination. */
    firehose?:            any;
    /** (Optional) Configures S3 as a findings destination. */
    s3?:                  any;
    /** (Required) Name of the CloudWatch Log Group to send findings to. */
    log_group:            any;
    /** (Required) Name of the Kinesis Firehose Delivery Stream to send findings to. */
    delivery_stream:      any;
    /** (Required) Name of the S3 Bucket to send findings to. */
    bucket:               any;
    /** (Required) An empty object that configures masking. */
    mask_config:          any;
}