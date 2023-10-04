export interface SecretsmanagerSecrets {
    data: Datum[];
}

export interface Datum {
    secretsmanager_secrets: SecretsmanagerSecretsClass;
}

export interface SecretsmanagerSecretsClass {
    /** (Optional) Configuration block(s) for filtering. Detailed below. */
    filter?: any;
}