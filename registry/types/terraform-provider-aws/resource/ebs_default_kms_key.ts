export interface EbsDefaultKmsKey {
    resource: Resource[];
}

export interface Resource {
    ebs_default_kms_key: EbsDefaultKmsKeyClass;
}

export interface EbsDefaultKmsKeyClass {
    /** (Required, ForceNew) The ARN of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use to encrypt the EBS volume. */
    key_arn?: any;
}