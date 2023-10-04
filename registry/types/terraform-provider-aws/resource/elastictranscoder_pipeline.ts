export interface ElastictranscoderPipeline {
    resource: Resource[];
}

export interface Resource {
    elastictranscoder_pipeline: ElastictranscoderPipelineClass;
}

export interface ElastictranscoderPipelineClass {
    /** (Optional) The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline. */
    aws_kms_key_arn?:              any;
    /** (Optional) The ContentConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. (documented below) */
    content_config?:               any;
    /** (Optional) The permissions for the `content_config` object. (documented below) */
    content_config_permissions?:   any;
    /** (Required) The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks. */
    input_bucket:                  any;
    /** (Optional, Forces new resource) The name of the pipeline. Maximum 40 characters */
    name?:                         any;
    /** (Optional) The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status. (documented below) */
    notifications?:                any;
    /** (Optional) The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. */
    output_bucket?:                any;
    /** (Required) The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline. */
    role:                          any;
    /** (Optional) The ThumbnailConfig object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. (documented below) */
    thumbnail_config?:             any;
    /** (Optional) The permissions for the `thumbnail_config` object. (documented below) */
    thumbnail_config_permissions?: any;
    /** The Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. */
    bucket?:                       any;
    /** The Amazon S3 storage class, Standard or ReducedRedundancy, that you want Elastic Transcoder to assign to the thumbnails that it stores in your Amazon S3 bucket. */
    storage_class?:                any;
    /** The permission that you want to give to the AWS user that you specified in `thumbnail_config_permissions.grantee`. Valid values are `Read`, `ReadAcp`, `WriteAcp` or `FullControl`. */
    access?:                       any;
    /** The AWS user or group that you want to have access to thumbnail files. */
    grantee?:                      any;
    /** Specify the type of value that appears in the `thumbnail_config_permissions.grantee` object. Valid values are `Canonical`, `Email` or `Group`. */
    grantee_type?:                 any;
    /** The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing a job in this pipeline. */
    completed?:                    any;
    /** The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition while processing a job in this pipeline. */
    error?:                        any;
    /** The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process a job in this pipeline. */
    progressing?:                  any;
    /** The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition while processing a job in this pipeline. */
    warning?:                      any;
}