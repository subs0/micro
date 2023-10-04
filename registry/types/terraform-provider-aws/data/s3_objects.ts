export interface S3Objects {
    data: Datum[];
}

export interface Datum {
    s3_objects: S3ObjectsClass;
}

export interface S3ObjectsClass {
    /** (Required) Lists object keys in this S3 bucket. Alternatively, an [S3 access point](https://docs.aws.amazon.com/AmazonS3/latest/dev/using-access-points.html) ARN can be specified */
    bucket:         any;
    /** (Optional) Limits results to object keys with this prefix (Default: none) */
    prefix?:        any;
    /** (Optional) Character used to group keys (Default: none) */
    delimiter?:     any;
    /** (Optional) Encodes keys using this method (Default: none; besides none, only "url" can be used) */
    encoding_type?: any;
    /** (Optional) Maximum object keys to return (Default: 1000) */
    max_keys?:      any;
    /** (Optional) Returns key names lexicographically after a specific object key in your bucket (Default: none; S3 lists object keys in UTF-8 character encoding in lexicographical order) */
    start_after?:   any;
    /** (Optional) Boolean specifying whether to populate the owner list (Default: false) */
    fetch_owner?:   any;
    /** (Optional) Confirms that the requester knows that they will be charged for the request. Bucket owners need not specify this parameter in their requests. If included, the only valid value is `requester`. */
    request_payer?: any;
}