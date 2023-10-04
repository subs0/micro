export interface S3AccountPublicAccessBlock {
    data: Datum[];
}

export interface Datum {
    s3_account_public_access_block: S3AccountPublicAccessBlockClass;
}

export interface S3AccountPublicAccessBlockClass {
    /** (Optional) AWS account ID to configure. Defaults to automatically determined account ID of the Terraform AWS provider. */
    account_id?: any;
}