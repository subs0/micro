export interface S3Object {
    data: Datum[];
}

export interface Datum {
    s3_object: S3ObjectClass;
}

export interface S3ObjectClass {
    /** (Required) Name of the bucket to read the object from. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified */
    bucket:         any;
    /** (Optional) To retrieve the object's checksum, this argument must be `ENABLED`. If you enable `checksum_mode` and the object is encrypted with KMS, you must have permission to use the `kms:Decrypt` action. Valid values: `ENABLED` */
    checksum_mode?: any;
    /** (Required) Full path to the object inside the bucket */
    key:            any;
    /** (Optional) Specific version ID of the object returned (defaults to latest version) */
    version_id?:    any;
}