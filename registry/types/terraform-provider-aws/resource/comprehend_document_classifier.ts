export interface ComprehendDocumentClassifier {
    resource: Resource[];
}

export interface Resource {
    comprehend_document_classifier: ComprehendDocumentClassifierClass;
}

export interface ComprehendDocumentClassifierClass {
    /** (Required) The ARN for an IAM Role which allows Comprehend to read the training and testing data. */
    data_access_role_arn:     any;
    /** (Required) Configuration for the training and testing data. */
    input_data_config:        any;
    /** (Required) Two-letter language code for the language. */
    language_code:            any;
    /** (Required) Name for the Document Classifier. */
    name:                     any;
    /** (Optional, Default: `MULTI_CLASS`) The document classification mode. */
    mode?:                    any;
    /** (Optional) KMS Key used to encrypt trained Document Classifiers. */
    model_kms_key_id?:        any;
    /** (Optional) Configuration for the output results of training. */
    output_data_config?:      any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` Configuration Block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Optional) Name for the version of the Document Classifier. */
    version_name?:            any;
    /** (Optional) Creates a unique version name beginning with the specified prefix. */
    version_name_prefix?:     any;
    /** (Optional) KMS Key used to encrypt storage volumes during job processing. */
    volume_kms_key_id?:       any;
    /** (Optional) Configuration parameters for VPC to contain Document Classifier resources. */
    vpc_config?:              any;
    /** (Optional) List of training datasets produced by Amazon SageMaker Ground Truth. */
    augmented_manifests?:     any;
    /** (Optional, Default: `COMPREHEND_CSV`) The format for the training data. */
    data_format?:             any;
    /** (Optional) Delimiter between labels when training a multi-label classifier. */
    label_delimiter?:         any;
    /** (Required) Destination path for the output documents. */
    s3_uri:                   any;
    /** (Optional) Location of test documents. */
    test_s3uri?:              any;
    /** (Optional) Location of annotation files. */
    annotation_data_s3_uri?:  any;
    /** (Required) The JSON attribute that contains the annotations for the training documents. */
    attribute_names:          any;
    /** (Optional, Default: `PLAIN_TEXT_DOCUMENT`) Type of augmented manifest. */
    document_type?:           any;
    /** (Optional) Location of source PDF files. */
    source_documents_s3_uri?: any;
    /** (Optional, Default: `TRAIN`) Purpose of data in augmented manifest. */
    split?:                   any;
    /** (Optional) KMS Key used to encrypt the output documents. */
    kms_key_id?:              any;
    /** (Computed) Full path for the output documents. */
    output_s3_uri?:           any;
    /** (Required) List of security group IDs. */
    security_group_ids:       any;
    /** (Required) List of VPC subnets. */
    subnets:                  any;
}