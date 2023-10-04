export interface S3Object {
    resource: Resource[];
}

export interface Resource {
    s3_object: S3ObjectClass;
}

export interface S3ObjectClass {
    /** (Required) Name of the bucket to put the file in. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified. */
    bucket:                         any;
    /** (Required) Name of the object once it is in the bucket. */
    key:                            any;
    /** (Optional) [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `aws-exec-read`, `authenticated-read`, `bucket-owner-read`, and `bucket-owner-full-control`. */
    acl?:                           any;
    /** (Optional) Whether or not to use [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) for SSE-KMS. */
    bucket_key_enabled?:            any;
    /** (Optional) Caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details. */
    cache_control?:                 any;
    /** (Optional) Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`. */
    checksum_algorithm?:            any;
    /** (Optional, conflicts with `source` and `content`) Base64-encoded data that will be decoded and uploaded as raw bytes for the object content. This allows safely uploading non-UTF8 binary data, but is recommended only for small content such as the result of the `gzipbase64` function with small text strings. For larger objects, use `source` to stream the content from a disk file. */
    content_base64?:                any;
    /** (Optional) Presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information. */
    content_disposition?:           any;
    /** (Optional) Content encodings that have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information. */
    content_encoding?:              any;
    /** (Optional) Language the content is in e.g., en-US or en-GB. */
    content_language?:              any;
    /** (Optional) Standard MIME type describing the format of the object data, e.g., application/octet-stream. All Valid MIME Types are valid for this input. */
    content_type?:                  any;
    /** (Optional, conflicts with `source` and `content_base64`) Literal string value to use as the object content, which will be uploaded as UTF-8-encoded text. */
    content?:                       any;
    /** (Optional) Triggers updates when the value changes. The only meaningful value is `filemd5("path/to/file")` (Terraform 0.11.12 or later) or `${md5(file("path/to/file"))}` (Terraform 0.11.11 or earlier). This attribute is not compatible with KMS encryption, `kms_key_id` or `server_side_encryption = "aws:kms"`, also if an object is larger than 16 MB, the AWS Management Console will upload or copy that object as a Multipart Upload, and therefore the ETag will not be an MD5 digest (see `source_hash` instead). */
    etag?:                          any;
    /** (Optional) Whether to allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled. */
    force_destroy?:                 any;
    /** (Optional) ARN of the KMS Key to use for object encryption. If the S3 Bucket has server-side encryption enabled, that value will automatically be used. If referencing the `aws_kms_key` resource, use the `arn` attribute. If referencing the `aws_kms_alias` data source or resource, use the `target_key_arn` attribute. Terraform will only perform drift detection if a configuration value is provided. */
    kms_key_id?:                    any;
    /** (Optional) Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API). */
    metadata?:                      any;
    /** (Optional) [Legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`. */
    object_lock_legal_hold_status?: any;
    /** (Optional) Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`. */
    object_lock_mode?:              any;
    /** (Optional) Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods). */
    object_lock_retain_until_date?: any;
    /** (Optional) Server-side encryption of the object in S3. Valid values are "`AES256`" and "`aws:kms`". */
    server_side_encryption?:        any;
    /** (Optional) Triggers updates like `etag` but useful to address `etag` encryption limitations. Set using `filemd5("path/to/source")` (Terraform 0.11.12 or later). (The value is only stored in state and not saved by AWS.) */
    source_hash?:                   any;
    /** (Optional, conflicts with `content` and `content_base64`) Path to a file that will be read and uploaded as raw bytes for the object content. */
    source?:                        any;
    /** (Optional) [Storage Class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_PutObject.html#AmazonS3-PutObject-request-header-StorageClass) for the object. Defaults to "`STANDARD`". */
    storage_class?:                 any;
    /** (Optional) Map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Optional) Target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html). */
    website_redirect?:              any;
}