export interface S3ObjectCopy {
    resource: Resource[];
}

export interface Resource {
    s3_object_copy: S3ObjectCopyClass;
}

export interface S3ObjectCopyClass {
    /** (Required) Name of the bucket to put the file in. */
    bucket:                         any;
    /** (Required) Name of the object once it is in the bucket. */
    key:                            any;
    /** (Required) Specifies the source object for the copy operation. You specify the value in one of two formats. For objects not accessed through an access point, specify the name of the source bucket and the key of the source object, separated by a slash (`/`). For example, `testbucket/test1.json`. For objects accessed through access points, specify the ARN of the object as accessed through the access point, in the format `arn:aws:s3:<Region>:<account-id>:accesspoint/<access-point-name>/object/<key>`. For example, `arn:aws:s3:us-west-2:9999912999:accesspoint/my-access-point/object/testbucket/test1.json`. */
    source:                         any;
    /** (Optional) [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) to apply. Valid values are `private`, `public-read`, `public-read-write`, `authenticated-read`, `aws-exec-read`, `bucket-owner-read`, and `bucket-owner-full-control`. Conflicts with `grant`. */
    acl?:                           any;
    /** (Optional) Specifies caching behavior along the request/reply chain Read [w3c cache_control](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.9) for further details. */
    cache_control?:                 any;
    /** (Optional) Indicates the algorithm used to create the checksum for the object. If a value is specified and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `CRC32`, `CRC32C`, `SHA1`, `SHA256`. */
    checksum_algorithm?:            any;
    /** (Optional) Specifies presentational information for the object. Read [w3c content_disposition](http://www.w3.org/Protocols/rfc2616/rfc2616-sec19.html#sec19.5.1) for further information. */
    content_disposition?:           any;
    /** (Optional) Specifies what content encodings have been applied to the object and thus what decoding mechanisms must be applied to obtain the media-type referenced by the Content-Type header field. Read [w3c content encoding](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11) for further information. */
    content_encoding?:              any;
    /** (Optional) Language the content is in e.g., en-US or en-GB. */
    content_language?:              any;
    /** (Optional) Standard MIME type describing the format of the object data, e.g., `application/octet-stream`. All Valid MIME Types are valid for this input. */
    content_type?:                  any;
    /** (Optional) Copies the object if its entity tag (ETag) matches the specified tag. */
    copy_if_match?:                 any;
    /** (Optional) Copies the object if it has been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    copy_if_modified_since?:        any;
    /** (Optional) Copies the object if its entity tag (ETag) is different than the specified ETag. */
    copy_if_none_match?:            any;
    /** (Optional) Copies the object if it hasn't been modified since the specified time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    copy_if_unmodified_since?:      any;
    /** (Optional) Specifies the algorithm to use to when encrypting the object (for example, AES256). */
    customer_algorithm?:            any;
    /** (Optional) Specifies the customer-provided encryption key for Amazon S3 to use in encrypting data. This value is used to store the object and then it is discarded; Amazon S3 does not store the encryption key. The key must be appropriate for use with the algorithm specified in the x-amz-server-side-encryption-customer-algorithm header. */
    customer_key?:                  any;
    /** (Optional) Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. */
    customer_key_md5?:              any;
    /** (Optional) Account id of the expected destination bucket owner. If the destination bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error. */
    expected_bucket_owner?:         any;
    /** (Optional) Account id of the expected source bucket owner. If the source bucket is owned by a different account, the request will fail with an HTTP 403 (Access Denied) error. */
    expected_source_bucket_owner?:  any;
    /** (Optional) Date and time at which the object is no longer cacheable, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8). */
    expires?:                       any;
    /** (Optional) Allow the object to be deleted by removing any legal hold on any object version. Default is `false`. This value should be set to `true` only if the bucket has S3 object lock enabled. */
    force_destroy?:                 any;
    grant?:                         Grant;
    /** (Optional) Specifies the AWS KMS Encryption Context to use for object encryption. The value is a base64-encoded UTF-8 string holding JSON with the encryption context key-value pairs. */
    kms_encryption_context?:        any;
    /** (Optional) Specifies the AWS KMS Key ARN to use for object encryption. This value is a fully qualified **ARN** of the KMS Key. If using `aws_kms_key`, use the exported `arn` attribute: `kms_key_id = aws_kms_key.foo.arn` */
    kms_key_id?:                    any;
    /** (Optional) Map of keys/values to provision metadata (will be automatically prefixed by `x-amz-meta-`, note that only lowercase label are currently supported by the AWS Go API). */
    metadata?:                      any;
    /** (Optional) Specifies whether the metadata is copied from the source object or replaced with metadata provided in the request. Valid values are `COPY` and `REPLACE`. */
    metadata_directive?:            any;
    /** (Optional) The [legal hold](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-legal-holds) status that you want to apply to the specified object. Valid values are `ON` and `OFF`. */
    object_lock_legal_hold_status?: any;
    /** (Optional) Object lock [retention mode](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-modes) that you want to apply to this object. Valid values are `GOVERNANCE` and `COMPLIANCE`. */
    object_lock_mode?:              any;
    /** (Optional) Date and time, in [RFC3339 format](https://tools.ietf.org/html/rfc3339#section-5.8), when this object's object lock will [expire](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html#object-lock-retention-periods). */
    object_lock_retain_until_date?: any;
    /** (Optional) Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. For information about downloading objects from requester pays buckets, see Downloading Objects in Requestor Pays Buckets (https://docs.aws.amazon.com/AmazonS3/latest/dev/ObjectsinRequesterPaysBuckets.html) in the Amazon S3 Developer Guide. If included, the only valid value is `requester`. */
    request_payer?:                 any;
    /** (Optional) Specifies server-side encryption of the object in S3. Valid values are `AES256` and `aws:kms`. */
    server_side_encryption?:        any;
    /** (Optional) Specifies the algorithm to use when decrypting the source object (for example, AES256). */
    source_customer_algorithm?:     any;
    /** (Optional) Specifies the customer-provided encryption key for Amazon S3 to use to decrypt the source object. The encryption key provided in this header must be one that was used when the source object was created. */
    source_customer_key?:           any;
    /** (Optional) Specifies the 128-bit MD5 digest of the encryption key according to RFC 1321. Amazon S3 uses this header for a message integrity check to ensure that the encryption key was transmitted without error. */
    source_customer_key_md5?:       any;
    /** (Optional) Specifies the desired [storage class](https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html#AmazonS3-CopyObject-request-header-StorageClass) for the object. Defaults to `STANDARD`. */
    storage_class?:                 any;
    /** (Optional) Specifies whether the object tag-set are copied from the source object or replaced with tag-set provided in the request. Valid values are `COPY` and `REPLACE`. */
    tagging_directive?:             any;
    /** (Optional) Map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?:                          any;
    /** (Optional) Specifies a target URL for [website redirect](http://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html). */
    website_redirect?:              any;
}

export interface Grant {
    /** (Required) List of permissions to grant to grantee. Valid values are `READ`, `READ_ACP`, `WRITE_ACP`, `FULL_CONTROL`. */
    permissions: any;
    /** (Required) - Type of grantee. Valid values are `CanonicalUser`, `Group`, and `AmazonCustomerByEmail`. */
    type:        any;
    /** (Optional) Email address of the grantee. Used only when `type` is `AmazonCustomerByEmail`.   */
    email:       any;
    /** (Optional) Canonical user ID of the grantee. Used only when `type` is `CanonicalUser`.   */
    id:          any;
    /** (Optional) URI of the grantee group. Used only when `type` is `Group`. */
    uri:         any;
}