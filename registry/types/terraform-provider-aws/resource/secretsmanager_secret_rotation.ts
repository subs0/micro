export interface SecretsmanagerSecretRotation {
    resource: Resource[];
}

export interface Resource {
    secretsmanager_secret_rotation: SecretsmanagerSecretRotationClass;
}

export interface SecretsmanagerSecretRotationClass {
    /** (Required) Specifies the secret to which you want to add a new version. You can specify either the Amazon Resource Name (ARN) or the friendly name of the secret. The secret must already exist. */
    secret_id:           any;
    /** (Required) Specifies the ARN of the Lambda function that can rotate the secret. */
    rotation_lambda_arn: any;
    rotation_rules?:     RotationRules;
}

export interface RotationRules {
    /** (Optional) Specifies the number of days between automatic scheduled rotations of the secret. Either `automatically_after_days` or `schedule_expression` must be specified. */
    automatically_after_days: any;
    /** (Optional) - The length of the rotation window in hours. For example, `3h` for a three hour window. */
    duration:                 any;
    /** (Optional) A `cron()` or `rate()` expression that defines the schedule for rotating your secret. Either `automatically_after_days` or `schedule_expression` must be specified. */
    schedule_expression:      any;
}