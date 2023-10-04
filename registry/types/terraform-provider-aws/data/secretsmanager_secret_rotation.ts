export interface SecretsmanagerSecretRotation {
    data: Datum[];
}

export interface Datum {
    secretsmanager_secret_rotation: SecretsmanagerSecretRotationClass;
}

export interface SecretsmanagerSecretRotationClass {
    /** (Required) Specifies the secret containing the version that you want to retrieve. You can specify either the ARN or the friendly name of the secret. */
    secret_id: any;
}