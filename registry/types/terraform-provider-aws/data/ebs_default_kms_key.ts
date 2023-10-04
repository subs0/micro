export interface EbsDefaultKmsKey {
    data: Datum[];
}

export interface Datum {
    ebs_default_kms_key: EbsDefaultKmsKeyClass;
}

export interface EbsDefaultKmsKeyClass {
}