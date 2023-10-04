export interface SecretsmanagerSecretVersion {
    data: Datum[];
}

export interface Datum {
    secretsmanager_secret_version: SecretsmanagerSecretVersionClass;
}

export interface SecretsmanagerSecretVersionClass {
    /** (Required) Specifies the secret containing the version that you want to retrieve. You can specify either the ARN or the friendly name of the secret. */
    secret_id:      any;
    /** (Optional) Specifies the unique identifier of the version of the secret that you want to retrieve. Overrides `version_stage`. */
    version_id?:    any;
    /** (Optional) Specifies the secret version that you want to retrieve by the staging label attached to the version. Defaults to `AWSCURRENT`. */
    version_stage?: any;
}