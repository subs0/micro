export interface SignerSigningJob {
    resource: Resource[];
}

export interface Resource {
    signer_signing_job: SignerSigningJobClass;
}

export interface SignerSigningJobClass {
    /** (Required) The name of the profile to initiate the signing operation. */
    profile_name:                any;
    /** (Required) The S3 bucket that contains the object to sign. See [Source](#source) below for details. */
    source:                      any;
    /** (Required) The S3 bucket in which to save your signed object. See [Destination](#destination) below for details. */
    destination:                 any;
    /** (Optional) Set this argument to `true` to ignore signing job failures and retrieve failed status and reason. Default `false`. */
    ignore_signing_job_failure?: any;
    /** (Required) A configuration block describing the S3 Destination object: See [S3 Destination](#s3-destination) below for details. */
    s3:                          any;
    /** (Required) Name of the S3 bucket. */
    bucket:                      any;
    /** (Required) Key name of the object that contains your unsigned code. */
    key:                         any;
    /** (Required) Version of your source image in your version enabled S3 bucket. */
    version:                     any;
    /** (Optional) An Amazon S3 object key prefix that you can use to limit signed objects keys to begin with the specified prefix. */
    prefix?:                     any;
}