export interface ChimesdkmediapipelinesMediaInsightsPipelineConfiguration {
    resource: Resource[];
}

export interface Resource {
    chimesdkmediapipelines_media_insights_pipeline_configuration: ChimesdkmediapipelinesMediaInsightsPipelineConfigurationClass;
}

export interface ChimesdkmediapipelinesMediaInsightsPipelineConfigurationClass {
    /** (Required) Configuration name. */
    name:                                                      any;
    /** (Required) ARN of IAM Role used by service to invoke processors and sinks specified by configuration elements. */
    resource_access_role_arn:                                  any;
    /** (Required) Collection of processors and sinks to transform media and deliver data. */
    elements:                                                  any;
    /** (Optional) Configuration for real-time alert rules to send EventBridge notifications when certain conditions are met. */
    real_time_alert_configuration?:                            any;
    /** (Optional) Key-value map of tags for the resource. */
    tags?:                                                     any;
    /** (Required) Rule type. */
    type:                                                      any;
    /** (Optional) Configuration for Amazon Transcribe Call Analytics processor. */
    amazon_transcribe_call_analytics_processor_configuration?: any;
    /** (Optional) Filter for category events to be delivered to insights target. */
    call_analytics_stream_categories?:                         any;
    /** (Optional) Labels all personally identifiable information (PII) identified in Transcript events. */
    content_identification_type?:                              any;
    /** (Optional) Redacts all personally identifiable information (PII) identified in Transcript events. */
    content_redaction_type?:                                   any;
    /** (Optional) Enables partial result stabilization in Transcript events. */
    enable_partial_results_stabilization?:                     any;
    /** (Optional) Filters partial Utterance events from delivery to the insights target. */
    filter_partial_results?:                                   any;
    /** (Required) Language code for the transcription model. */
    language_code:                                             any;
    /** (Optional) Name of custom language model for transcription. */
    language_model_name?:                                      any;
    /** (Optional) Level of stability to use when partial results stabilization is enabled. */
    partial_results_stability?:                                any;
    /** (Optional) Types of personally identifiable information (PII) to redact from a Transcript event. */
    pii_entity_types?:                                         any;
    /** (Optional) Settings for post call analytics. */
    post_call_analytics_settings?:                             any;
    /** (Optional) Should output be redacted. */
    content_redaction_output?:                                 any;
    /** (Required) ARN of the role used by AWS Transcribe to upload your post call analysis. */
    data_access_role_arn:                                      any;
    /** (Optional) ID of the KMS key used to encrypt the output. */
    output_encryption_kms_key_id?:                             any;
    /** (Required) The Amazon S3 location where you want your Call Analytics post-call transcription output stored. */
    output_location:                                           any;
    /** (Optional) Method for applying a vocabulary filter to Transcript events. */
    vocabulary_filter_method?:                                 any;
    /** (Optional) Name of the custom vocabulary filter to use when processing Transcript events. */
    vocabulary_filter_name?:                                   any;
    /** (Optional) Name of the custom vocabulary to use when processing Transcript events. */
    vocabulary_name?:                                          any;
    /** (Optional) Configuration for Amazon Transcribe processor. */
    amazon_transcribe_processor_configuration?:                any;
    /** (Optional) Enables speaker partitioning (diarization) in your Transcript events. */
    show_speaker_label?:                                       any;
    /** (Optional) Configuration for Kinesis Data Stream sink. */
    kinesis_data_stream_sink_configuration?:                   any;
    /** (Required) SQS queue to deliver results. */
    insights_target:                                           any;
    /** (Optional) Configuration for Lambda Function sink. */
    lambda_function_sink_configuration?:                       any;
    /** (Optional) Configuration for SNS Topic sink. */
    sns_topic_sink_configuration?:                             any;
    /** (Optional) Configuration for SQS Queue sink. */
    sqs_queue_sink_configuration?:                             any;
    /** (Optional) Configuration for S3 recording sink. */
    s3_recording_sink_configuration?:                          any;
    /** (Required) S3 URI to deliver recordings. */
    destination:                                               any;
    /** (Optional) Configuration for Voice analytics processor. */
    voice_analytics_processor_configuration?:                  any;
    /** (Required) Enable speaker search. */
    speaker_search_status:                                     any;
    /** (Required) Enable voice tone analysis. */
    voice_tone_analysis_status:                                any;
    /** (Required) Collection of real time alert rules */
    rules:                                                     any;
    /** (Optional) Configuration for an issue detection rule. */
    issue_detection_configuration?:                            any;
    /** (Required) Rule name. */
    rule_name:                                                 any;
    /** (Optional) Configuration for a keyword match rule. */
    keyword_match_configuration?:                              any;
    /** (Required) Collection of keywords to match. */
    keywords:                                                  any;
    /** (Optional) Negate the rule. */
    negate?:                                                   any;
    /** (Optional) Configuration for a sentiment rule. */
    sentiment_configuration?:                                  any;
    /** (Required) Sentiment type to match. */
    sentiment_type:                                            any;
    /** (Optional) Analysis interval. */
    time_period?:                                              any;
    /** (Optional) Disables real time alert rules. */
    disabled?:                                                 any;
}