export interface AwsLambdaFunction {
    resource: Resource[]
}

export interface Resource {
    aws_lambda_function: AwsLambdaFunctionClass
}

export interface AwsLambdaFunctionClass {
    /** (Required) Unique name for your Lambda Function. */
    function_name: any
    /** (Required) Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources. */
    role: any
    /** (Optional) Instruction set architecture for your Lambda function. Valid values are `[\"x86_64\"]` and `[\"arm64\"]`. Default is `[\"x86_64\"]`. Removing this attribute, function's architecture stay the same. */
    architectures?: any
    /** (Optional) To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function. */
    code_signing_config_arn?: any
    dead_letter_config?: DeadLetterConfig
    /** (Optional) Description of what your Lambda Function does. */
    description?: any
    environment?: Environment
    ephemeral_storage?: EphemeralStorage
    file_system_config?: FileSystemConfig
    /** (Optional) Path to the function's deployment package within the local filesystem. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. */
    filename?: any
    /** (Optional) Function [entrypoint][3] in your code. */
    handler?: any
    image_config?: ImageConfig
    /** (Optional) ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified. */
    image_uri?: any
    /** (Optional) Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and Terraform will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration. */
    kms_key_arn?: any
    /** (Optional) List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10] */
    layers?: any
    /** (Optional) Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5] */
    memory_size?: any
    /** (Optional) Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`. */
    package_type?: any
    /** (Optional) Whether to publish creation/change as new Lambda Function Version. Defaults to `false`. */
    publish?: any
    /** (Optional) Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9] */
    reserved_concurrent_executions?: any
    /** (Optional, **Deprecated**) **AWS no longer supports this operation. This attribute now has no effect and will be removed in a future major version.** Whether to replace the security groups on associated lambda network interfaces upon destruction. Removing these security groups from orphaned network interfaces can speed up security group deletion times by avoiding a dependency on AWS's internal cleanup operations. By default, the ENI security groups will be replaced with the `default` security group in the function's VPC. Set the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement. */
    replace_security_groups_on_destroy?: any
    /** (Optional, **Deprecated**) List of security group IDs to assign to orphaned Lambda function network interfaces upon destruction. `replace_security_groups_on_destroy` must be set to `true` to use this attribute. */
    replacement_security_group_ids?: any
    /** (Optional) Identifier of the function's runtime. See [Runtimes][6] for valid values. */
    runtime?: any
    /** (Optional) S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required. */
    s3_bucket?: any
    /** (Optional) S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required. */
    s3_key?: any
    /** (Optional) Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`. */
    s3_object_version?: any
    /** (Optional) Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Terraform state. */
    skip_destroy?: any
    /** (Optional) Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `filebase64sha256(\"file.zip\")` (Terraform 0.11.12 and later) or `base64sha256(file(\"file.zip\"))` (Terraform 0.11.11 and earlier), where \"file.zip\" is the local filename of the lambda function source archive. */
    source_code_hash?: any
    snap_start?: SnapStart
    /** (Optional) Map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level. */
    tags?: any
    /** (Optional) Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5]. */
    timeout?: any
    tracing_config?: TracingConfig
    vpc_config?: VpcConfig
}

export interface DeadLetterConfig {
    /** (Required) ARN of an SNS topic or SQS queue to notify when an invocation fails. If this option is used, the function's IAM role must be granted suitable access to write to the target object, which means allowing either the `sns:Publish` or `sqs:SendMessage` action on this ARN, depending on which service is targeted. */
    target_arn: any
}

export interface Environment {
    /** (Optional) Map of environment variables that are accessible from the function code during execution. If provided at least one key must be present. */
    variables: any
}

export interface EphemeralStorage {
    /** (Required) The size of the Lambda function Ephemeral storage(`/tmp`) represented in MB. The minimum supported `ephemeral_storage` value defaults to `512`MB and the maximum supported value is `10240`MB. */
    size: any
}

export interface FileSystemConfig {
    /** (Required) Amazon Resource Name (ARN) of the Amazon EFS Access Point that provides access to the file system. */
    arn: any
    /** (Required) Path where the function can access the file system, starting with /mnt/. */
    local_mount_path: any
}

export interface ImageConfig {
    /** (Optional) Parameters that you want to pass in with `entry_point`. */
    command: any
    /** (Optional) Entry point to your application, which is typically the location of the runtime executable. */
    entry_point: any
    /** (Optional) Working directory. */
    working_directory: any
}

export interface SnapStart {
    /** (Required) Conditions where snap start is enabled. Valid values are `PublishedVersions`. */
    apply_on: any
}

export interface TracingConfig {
    /** (Required) Whether to sample and trace a subset of incoming requests with AWS X-Ray. Valid values are `PassThrough` and `Active`. If `PassThrough`, Lambda will only trace the request from an upstream service if it contains a tracing header with \"sampled=1\". If `Active`, Lambda will respect any tracing header it receives from an upstream service. If no tracing header is received, Lambda will call X-Ray for a tracing decision. */
    mode: any
}

export interface VpcConfig {
    /** (Required) List of security group IDs associated with the Lambda function. */
    security_group_ids: any
    /** (Required) List of subnet IDs associated with the Lambda function. */
    subnet_ids: any
}

const resource: Resource = {
    aws_lambda_function: {
        function_name: 'my-lambda',
        role: 'arn:aws:iam::123456789012:role/lambda-role',
        environment: {
            variables: {
                foo: 'bar',
            },
        },
    },
}
