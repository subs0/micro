const qtOut = [
    '// To parse this data:',
    '//',
    '//   import { Convert, AwsLambdaFunction } from "./file";',
    '//',
    '//   const awsLambdaFunction = Convert.toAwsLambdaFunction(json);',
    '//',
    "// These functions will throw an error if the JSON doesn't",
    '// match the expected interface, even if the JSON is valid.',
    '',
    'export interface AwsLambdaFunction {',
    '    resource: Resource[];',
    '}',
    '',
    'export interface Resource {',
    '    aws_lambda_function: AwsLambdaFunctionClass;',
    '}',
    '',
    'export interface AwsLambdaFunctionClass {',
    '    function_name:                       string;',
    '    role:                                string;',
    '    architectures?:                      string;',
    '    code_signing_config_arn?:            string;',
    '    dead_letter_config?:                 DeadLetterConfig;',
    '    description?:                        string;',
    '    environment?:                        Environment;',
    '    ephemeral_storage?:                  EphemeralStorage;',
    '    file_system_config?:                 FileSystemConfig;',
    '    filename?:                           string;',
    '    handler?:                            string;',
    '    image_config?:                       ImageConfig;',
    '    image_uri?:                          string;',
    '    kms_key_arn?:                        string;',
    '    layers?:                             string;',
    '    memory_size?:                        string;',
    '    package_type?:                       string;',
    '    publish?:                            string;',
    '    reserved_concurrent_executions?:     string;',
    '    replace_security_groups_on_destroy?: string;',
    '    replacement_security_group_ids?:     string;',
    '    runtime?:                            string;',
    '    s3_bucket?:                          string;',
    '    s3_key?:                             string;',
    '    s3_object_version?:                  string;',
    '    skip_destroy?:                       string;',
    '    source_code_hash?:                   string;',
    '    snap_start?:                         SnapStart;',
    '    tags?:                               string;',
    '    timeout?:                            string;',
    '    tracing_config?:                     TracingConfig;',
    '    vpc_config?:                         VpcConfig;',
    '}',
    '',
    'export interface DeadLetterConfig {',
    '    target_arn: string;',
    '}',
    '',
    'export interface Environment {',
    '    variables: string;',
    '}',
    '',
    'export interface EphemeralStorage {',
    '    size: string;',
    '}',
    '',
    'export interface FileSystemConfig {',
    '    arn:              string;',
    '    local_mount_path: string;',
    '}',
    '',
    'export interface ImageConfig {',
    '    command:           string;',
    '    entry_point:       string;',
    '    working_directory: string;',
    '}',
    '',
    'export interface SnapStart {',
    '    apply_on: string;',
    '}',
    '',
    'export interface TracingConfig {',
    '    mode: string;',
    '}',
    '',
    'export interface VpcConfig {',
    '    security_group_ids: string;',
    '    subnet_ids:         string;',
    '}',
    '',
    '// Converts JSON strings to/from your types',
    '// and asserts the results of JSON.parse at runtime',
]

const payload = {
    resource: [
        {
            aws_lambda_function: {
                function_name: '(Required) Unique name for your Lambda Function.',
                role: "(Required) Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources.",
                architectures:
                    '(Optional) Instruction set architecture for your Lambda function. Valid values are `[\\"x86_64\\"]` and `[\\"arm64\\"]`. Default is `[\\"x86_64\\"]`. Removing this attribute, function\'s architecture stay the same.',
                code_signing_config_arn:
                    '(Optional) To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.',
                dead_letter_config: {
                    target_arn:
                        "(Required) ARN of an SNS topic or SQS queue to notify when an invocation fails. If this option is used, the function's IAM role must be granted suitable access to write to the target object, which means allowing either the `sns:Publish` or `sqs:SendMessage` action on this ARN, depending on which service is targeted.",
                },
                description: '(Optional) Description of what your Lambda Function does.',
                environment: {
                    variables:
                        '(Optional) Map of environment variables that are accessible from the function code during execution. If provided at least one key must be present.',
                },
                ephemeral_storage: {
                    size: '(Required) The size of the Lambda function Ephemeral storage(`/tmp`) represented in MB. The minimum supported `ephemeral_storage` value defaults to `512`MB and the maximum supported value is `10240`MB.',
                },
                file_system_config: {
                    arn: '(Required) Amazon Resource Name (ARN) of the Amazon EFS Access Point that provides access to the file system.',
                    local_mount_path:
                        '(Required) Path where the function can access the file system, starting with /mnt/.',
                },
                filename:
                    "(Optional) Path to the function's deployment package within the local filesystem. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified.",
                handler: '(Optional) Function [entrypoint][3] in your code.',
                image_config: {
                    command: '(Optional) Parameters that you want to pass in with `entry_point`.',
                    entry_point:
                        '(Optional) Entry point to your application, which is typically the location of the runtime executable.',
                    working_directory: '(Optional) Working directory.',
                },
                image_uri:
                    "(Optional) ECR image URI containing the function's deployment package. Exactly one of `filename`, `image_uri`,  or `s3_bucket` must be specified.",
                kms_key_arn:
                    '(Optional) Amazon Resource Name (ARN) of the AWS Key Management Service (KMS) key that is used to encrypt environment variables. If this configuration is not provided when environment variables are in use, AWS Lambda uses a default service key. If this configuration is provided when environment variables are not in use, the AWS Lambda API does not save this configuration and Terraform will show a perpetual difference of adding the key. To fix the perpetual difference, remove this configuration.',
                layers: '(Optional) List of Lambda Layer Version ARNs (maximum of 5) to attach to your Lambda Function. See [Lambda Layers][10]',
                memory_size:
                    '(Optional) Amount of memory in MB your Lambda Function can use at runtime. Defaults to `128`. See [Limits][5]',
                package_type:
                    '(Optional) Lambda deployment package type. Valid values are `Zip` and `Image`. Defaults to `Zip`.',
                publish:
                    '(Optional) Whether to publish creation/change as new Lambda Function Version. Defaults to `false`.',
                reserved_concurrent_executions:
                    '(Optional) Amount of reserved concurrent executions for this lambda function. A value of `0` disables lambda from being triggered and `-1` removes any concurrency limitations. Defaults to Unreserved Concurrency Limits `-1`. See [Managing Concurrency][9]',
                replace_security_groups_on_destroy:
                    "(Optional, **Deprecated**) **AWS no longer supports this operation. This attribute now has no effect and will be removed in a future major version.** Whether to replace the security groups on associated lambda network interfaces upon destruction. Removing these security groups from orphaned network interfaces can speed up security group deletion times by avoiding a dependency on AWS's internal cleanup operations. By default, the ENI security groups will be replaced with the `default` security group in the function's VPC. Set the `replacement_security_group_ids` attribute to use a custom list of security groups for replacement.",
                replacement_security_group_ids:
                    '(Optional, **Deprecated**) List of security group IDs to assign to orphaned Lambda function network interfaces upon destruction. `replace_security_groups_on_destroy` must be set to `true` to use this attribute.',
                runtime:
                    "(Optional) Identifier of the function's runtime. See [Runtimes][6] for valid values.",
                s3_bucket:
                    "(Optional) S3 bucket location containing the function's deployment package. This bucket must reside in the same AWS region where you are creating the Lambda function. Exactly one of `filename`, `image_uri`, or `s3_bucket` must be specified. When `s3_bucket` is set, `s3_key` is required.",
                s3_key: "(Optional) S3 key of an object containing the function's deployment package. When `s3_bucket` is set, `s3_key` is required.",
                s3_object_version:
                    "(Optional) Object version containing the function's deployment package. Conflicts with `filename` and `image_uri`.",
                skip_destroy:
                    '(Optional) Set to true if you do not wish the function to be deleted at destroy time, and instead just remove the function from the Terraform state.',
                source_code_hash:
                    '(Optional) Used to trigger updates. Must be set to a base64-encoded SHA256 hash of the package file specified with either `filename` or `s3_key`. The usual way to set this is `filebase64sha256(\\"file.zip\\")` (Terraform 0.11.12 and later) or `base64sha256(file(\\"file.zip\\"))` (Terraform 0.11.11 and earlier), where \\"file.zip\\" is the local filename of the lambda function source archive.',
                snap_start: {
                    apply_on:
                        '(Required) Conditions where snap start is enabled. Valid values are `PublishedVersions`.',
                },
                tags: '(Optional) Map of tags to assign to the object. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level.',
                timeout:
                    '(Optional) Amount of time your Lambda Function has to run in seconds. Defaults to `3`. See [Limits][5].',
                tracing_config: {
                    mode: '(Required) Whether to sample and trace a subset of incoming requests with AWS X-Ray. Valid values are `PassThrough` and `Active`. If `PassThrough`, Lambda will only trace the request from an upstream service if it contains a tracing header with \\"sampled=1\\". If `Active`, Lambda will respect any tracing header it receives from an upstream service. If no tracing header is received, Lambda will call X-Ray for a tracing decision.',
                },
                vpc_config: {
                    security_group_ids:
                        '(Required) List of security group IDs associated with the Lambda function.',
                    subnet_ids:
                        '(Required) List of subnet IDs associated with the Lambda function.',
                },
            },
        },
        {
            aws_lambda_function: {
                function_name: '(Required) Unique name for your Lambda Function.',
                role: "(Required) Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources.",
            },
        },
    ],
}

const injectDefsForMatchingProps = (lines: string[], payload: {}) => {
    /**
     * Grabs the lines starting after the last line that starts with '//' keeps all
     * the following lines that don't start with '//' and stops at the first line
     * that follows the kept lines that starts with '//'
     */
    const grabLines = (lines: string[]) => {
        let procede = true
        const firstNonComment = lines.findIndex((l) => !l.startsWith('//'))
        const todo = lines.slice(firstNonComment + 1)
        return todo.reduce(
            (a, c) => {
                if (procede) {
                    if (c.startsWith('//')) {
                        procede = false
                        return a
                    } else return [...a, c]
                } else return a
            },
            ['']
        )
    }
    const flattenObject = (obj) => {
        const keys = Object.keys(obj)
        return keys.reduce((a, c) => {
            const value = obj[c]
            if (typeof value === 'object') {
                return { ...a, ...flattenObject(value) }
            } else return { ...a, [c]: value }
        }, {})
    }
    const dict = flattenObject(payload)
    const kvRx = /(\w+?)\??:\s+(\w+?);/
    const typeLines = grabLines(lines)
    return typeLines
        .reduce(
            (a, c) => {
                // replace 'string' with 'any' for now
                c = c.replace('string', 'any')
                const groups = c.match(kvRx)
                const [key, value] = groups ? [...groups].slice(1) : []
                if (key && value) {
                    if (dict[key]) {
                        return [...a, `/** ${dict[key]} */`, c]
                    } else return [...a, c]
                } else return [...a, c]
            },
            ['']
        )
        .join('\n')
}

const test4 = injectDefsForMatchingProps(qtOut, payload) //?

// regex like kvRx, but with the first group optionally ending in a '?'
const kvRx = /(\w+?)\??:\s+(\w+?);/
