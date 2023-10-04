export interface EbsEncryptionByDefault {
    resource: Resource[];
}

export interface Resource {
    ebs_encryption_by_default: EbsEncryptionByDefaultClass;
}

export interface EbsEncryptionByDefaultClass {
    /** (Optional) Whether or not default EBS encryption is enabled. Valid values are `true` or `false`. Defaults to `true`. */
    enabled?: any;
}