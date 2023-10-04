export interface KmsSecret {
    data: Datum[];
}

export interface Datum {
    kms_secret: KmsSecretClass;
}

export interface KmsSecretClass {
}