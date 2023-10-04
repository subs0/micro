export interface TranscribeLanguageModel {
    resource: Resource[];
}

export interface Resource {
    transcribe_language_model: TranscribeLanguageModelClass;
}

export interface TranscribeLanguageModelClass {
    /** (Required) Name of reference base model. */
    base_model_name:      any;
    /** (Required) The input data config for the LanguageModel. See [Input Data Config](#input-data-config) for more details. */
    input_data_config:    any;
    /** (Required) The language code you selected for your language model. Refer to the [supported languages](https://docs.aws.amazon.com/transcribe/latest/dg/supported-languages.html) page for accepted codes. */
    language_code:        any;
    /** (Required) The model name. */
    model_name:           any;
    /** (Required) IAM role with access to S3 bucket. */
    data_access_role_arn: any;
    /** (Required) S3 URI where training data is located. */
    s3_uri:               any;
    /** (Optional) S3 URI where tuning data is located. */
    tuning_data_s3_uri?:  any;
    /** (Optional) A map of tags to assign to the LanguageModel. If configured with a provider [`default_tags` configuration block](/docs/providers/aws/index.html#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                any;
}