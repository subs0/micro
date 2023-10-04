export interface SecretsmanagerSecret {
    data: Datum[];
}

export interface Datum {
    secretsmanager_secret: SecretsmanagerSecretClass;
}

export interface SecretsmanagerSecretClass {
    /** (Optional) ARN of the secret to retrieve. */
    arn?:  any;
    /** (Optional) Name of the secret to retrieve. */
    name?: any;
}