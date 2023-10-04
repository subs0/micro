export interface LambdaCodeSigningConfig {
    resource: Resource[];
}

export interface Resource {
    lambda_code_signing_config: LambdaCodeSigningConfigClass;
}

export interface LambdaCodeSigningConfigClass {
    /** (Optional) Descriptive name for this code signing configuration. */
    description?:                     any;
    /** (Required) The Amazon Resource Name (ARN) for each of the signing profiles. A signing profile defines a trusted user who can sign a code package. */
    signing_profile_version_arns:     any;
    /** (Required) Code signing configuration policy for deployment validation failure. If you set the policy to Enforce, Lambda blocks the deployment request if code-signing validation checks fail. If you set the policy to Warn, Lambda allows the deployment and creates a CloudWatch log. Valid values: `Warn`, `Enforce`. Default value: `Warn`. */
    untrusted_artifact_on_deployment: any;
}