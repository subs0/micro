export interface KmsSecrets {
    data: Datum[];
}

export interface Datum {
    kms_secrets: KmsSecretsClass;
}

export interface KmsSecretsClass {
    /** (Required) One or more encrypted payload definitions from the KMS service. See the Secret Definitions below. */
    secret:                any;
    /** (Required) Name to export this secret under in the attributes. */
    name:                  any;
    /** (Required) Base64 encoded payload, as returned from a KMS encrypt operation. */
    payload:               any;
    /** (Optional) An optional mapping that makes up the Encryption Context for the secret. */
    context?:              any;
    /** (Optional) The encryption algorithm that will be used to decrypt the ciphertext. This parameter is required only when the ciphertext was encrypted under an asymmetric KMS key. Valid Values: SYMMETRIC_DEFAULT | RSAES_OAEP_SHA_1 | RSAES_OAEP_SHA_256 | SM2PKE */
    encryption_algorithm?: any;
}