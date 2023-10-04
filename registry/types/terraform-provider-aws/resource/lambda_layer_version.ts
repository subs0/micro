export interface LambdaLayerVersion {
    resource: Resource[];
}

export interface Resource {
    lambda_layer_version: LambdaLayerVersionClass;
}

export interface LambdaLayerVersionClass {
    /** (Required) Unique name for your Lambda Layer */
    layer_name:                any;
    /** (Optional) List of [Architectures][4] this layer is compatible with. Currently `x86_64` and `arm64` can be specified. */
    compatible_architectures?: any;
    /** (Optional) List of [Runtimes][2] this layer is compatible with. Up to 5 runtimes can be specified. */
    compatible_runtimes?:      any;
    /** (Optional) Description of what your Lambda Layer does. */
    description?:              any;
    /** (Optional) License info for your Lambda Layer. See [License Info][3]. */
    license_info?:             any;
    /** (Optional) S3 bucket location containing the function's deployment package. Conflicts with `filename`. This bucket must reside in the same AWS region where you are creating the Lambda function. */
    s3_bucket?:                any;
    /** (Optional) S3 key of an object containing the function's deployment package. Conflicts with `filename`. */
    s3_key?:                   any;
    /** (Optional) Object version containing the function's deployment package. Conflicts with `filename`. */
    s3_object_version?:        any;
    /** (Optional) Whether to retain the old version of a previously deployed Lambda Layer. Default is `false`. When this is not set to `true`, changing any of `compatible_architectures`, `compatible_runtimes`, `description`, `filename`, `layer_name`, `license_info`, `s3_bucket`, `s3_key`, `s3_object_version`, or `source_code_hash` forces deletion of the existing layer version and creation of a new layer version. */
    skip_destroy?:             any;
    /** (Optional) Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `${filebase64sha256("file.zip")}` (Terraform 0.11.12 or later) or `${base64sha256(file("file.zip"))}` (Terraform 0.11.11 and earlier), where "file.zip" is the local filename of the lambda layer source archive. */
    source_code_hash?:         any;
}