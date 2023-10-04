export interface EbsEncryptionByDefault {
    data: Datum[];
}

export interface Datum {
    ebs_encryption_by_default: EbsEncryptionByDefaultClass;
}

export interface EbsEncryptionByDefaultClass {
}