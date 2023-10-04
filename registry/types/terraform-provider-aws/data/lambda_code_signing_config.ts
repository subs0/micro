export interface LambdaCodeSigningConfig {
    data: Datum[];
}

export interface Datum {
    lambda_code_signing_config: LambdaCodeSigningConfigClass;
}

export interface LambdaCodeSigningConfigClass {
    /** (Required) ARN of the code signing configuration. */
    arn: any;
}