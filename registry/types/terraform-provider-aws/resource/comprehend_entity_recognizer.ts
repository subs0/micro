export interface ComprehendEntityRecognizer {
    resource: Resource[];
}

export interface Resource {
    comprehend_entity_recognizer: ComprehendEntityRecognizerClass;
}

export interface ComprehendEntityRecognizerClass {
    /** (Required) The ARN for an IAM Role which allows Comprehend to read the training and testing data. */
    data_access_role_arn:     any;
    /** (Required) Configuration for the training and testing data. */
    input_data_config:        any;
    /** (Required) Two-letter language code for the language. */
    language_code:            any;
    /** (Required) Name for the Entity Recognizer. */
    name:                     any;
    /** (Optional) The ID or ARN of a KMS Key used to encrypt trained Entity Recognizers. */
    model_kms_key_id?:        any;
    /** (Optional) A map of tags to assign to the resource. If configured with a provider [`default_tags` Configuration Block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                    any;
    /** (Optional) Name for the version of the Entity Recognizer. */
    version_name?:            any;
    /** (Optional) Creates a unique version name beginning with the specified prefix. */
    version_name_prefix?:     any;
    /** (Optional) ID or ARN of a KMS Key used to encrypt storage volumes during job processing. */
    volume_kms_key_id?:       any;
    /** (Optional) Configuration parameters for VPC to contain Entity Recognizer resources. */
    vpc_config?:              any;
    /** (Optional) Specifies location of the document annotation data. */
    annotations?:             any;
    /** (Optional) List of training datasets produced by Amazon SageMaker Ground Truth. */
    augmented_manifests?:     any;
    /** (Optional, Default: `COMPREHEND_CSV`) The format for the training data. */
    data_format?:             any;
    /** (Optional) Specifies a collection of training documents. */
    documents?:               any;
    /** (Optional) Specifies location of the entity list data. */
    entity_list?:             any;
    /** (Required) Set of entity types to be recognized. */
    entity_types:             any;
    /** (Required) Location of entity list. */
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
    /** (Optional, Default: `ONE_DOC_PER_LINE`) Specifies how the input files should be processed. */
    input_format?:            any;
    /** (Required) An entity type to be matched by the Entity Recognizer. */
    type:                     any;
    /** (Required) List of security group IDs. */
    security_group_ids:       any;
    /** (Required) List of VPC subnets. */
    subnets:                  any;
}