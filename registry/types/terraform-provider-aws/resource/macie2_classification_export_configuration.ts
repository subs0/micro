export interface Macie2ClassificationExportConfiguration {
    resource: Resource[];
}

export interface Resource {
    macie2_classification_export_configuration: Macie2ClassificationExportConfigurationClass;
}

export interface Macie2ClassificationExportConfigurationClass {
    /** (Required) Configuration block for a S3 Destination. Defined below */
    s3_destination: any;
    /** (Required) The Amazon S3 bucket name in which Amazon Macie exports the data classification results. */
    bucket_name:    any;
    /** (Optional) The object key for the bucket in which Amazon Macie exports the data classification results. */
    key_prefix?:    any;
    /** (Required) Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data. */
    kms_key_arn:    any;
}