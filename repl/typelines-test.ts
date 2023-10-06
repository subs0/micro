import { getInUnsafe } from '@thi.ng/paths'
import { EquivMap } from '@thi.ng/associative'

const typesString = `
export interface TerraformProviderAws {
    data?:     Data;
    resource?: Resource;
}

export interface Data {
    cloudwatch_log_group?:          DataCloudwatchLogGroup;
    service_discovery_service?:     DataServiceDiscoveryService;
}

export interface DataCloudwatchLogGroup {
    name:               string;
    creation_time?:     string;
    retention_in_days?: string;
    kms_key_id?:        string;
    tags?:              string;
}


export interface DataServiceDiscoveryService {
    name:                        string;
    namespace_id:                string;
    id?:                         string;
    arn?:                        string;
    description?:                string;
    dns_config?:                 DNSConfig;
    health_check_config?:        HealthCheckConfig;
    health_check_custom_config?: HealthCheckCustomConfig;
    tags?:                       string;
}

export interface DNSConfig {
    namespace_id:   string;
    dns_records:    string;
    routing_policy: string;
    ttl:            string;
    type:           string;
}

export interface HealthCheckConfig {
    failure_threshold: string;
    resource_path:     string;
    type:              string;
}

export interface HealthCheckCustomConfig {
    failure_threshold: string;
}

export interface Resource {
    lambda_function?:          ResourceLambdaFunction;
}


export interface ResourceLambdaFunction {
    function_name:                     string;
    role:                              string;
    architectures?:                    string;
    code_signing_config_arn?:          string;
    dead_letter_config?:               LambdaFunctionDeadLetterConfig;
    description?:                      string;
    environment?:                      LambdaFunctionEnvironment;
}

export interface LambdaFunctionDeadLetterConfig {
    target_arn: string;
}

export interface LambdaFunctionEnvironment {
    variables: string;
}

`

// TODO: spread args
export const test_json = {
    data: {
        cloudwatch_log_group: {
            args: {
                'name!': '(Required) Name of the Cloudwatch log group',
            },
            attrs: {
                creation_time:
                    'Creation time of the log group, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.',
                retention_in_days: 'Number of days log events retained in the specified log group.',
                kms_key_id: 'ARN of the KMS Key to use when encrypting log data.',
                tags: 'Map of tags to assign to the resource.\n',
            },
        },
        service_discovery_service: {
            args: {
                'name!': '(Required) Name of the service.',
                'namespace_id!': '(Required) ID of the namespace that the service belongs to.',
            },
            attrs: {
                id: 'ID of the service.',
                arn: 'ARN of the service.',
                description: 'Description of the service.',
                dns_config: {
                    namespace_id: 'ID of the namespace to use for DNS configuration.',
                    dns_records:
                        'An array that contains one DnsRecord object for each resource record set.',
                    routing_policy:
                        'Routing policy that you want to apply to all records that Route 53 creates when you register an instance and specify the service. Valid Values: MULTIVALUE, WEIGHTED\n\n#### dns_records\n\nThis argument supports the following arguments:\n',
                    ttl: 'Amount of time, in seconds, that you want DNS resolvers to cache the settings for this resource record set.',
                    type: 'Type of the resource, which indicates the value that Amazon Route 53 returns in response to DNS queries. Valid Values: A, AAAA, SRV, CNAME',
                },
                health_check_config: {
                    failure_threshold: 'Number of consecutive health checks. Maximum value of 10.',
                    resource_path:
                        "Path that you want Route 53 to request when performing health checks. Route 53 automatically adds the DNS name for the service. If you don't specify a value, the default value is /.",
                    type: ' The type of health check that you want to create, which indicates how Route 53 determines whether an endpoint is healthy. Valid Values: HTTP, HTTPS, TCP',
                },
                health_check_custom_config: {
                    failure_threshold:
                        ' The number of 30-second intervals that you want service discovery to wait before it changes the health status of a service instance.  Maximum value of 10.\n',
                },
                tags: 'Map of tags to assign to the service. If configured with a provider [`default_tags` configuration block](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#default_tags-configuration-block) present, tags with matching keys will overwrite those defined at the provider-level.',
            },
        },
    },
    resource: {
        lambda_function: {
            args: {
                'function_name!': '(Required) Unique name for your Lambda Function.',
                'role!':
                    "(Required) Amazon Resource Name (ARN) of the function's execution role. The role provides the function's identity and access to AWS services and resources.\n\nThe following arguments are optional:\n",
                architectures:
                    '(Optional) Instruction set architecture for your Lambda function. Valid values are `["x86_64"]` and `["arm64"]`. Default is `["x86_64"]`. Removing this attribute, function\'s architecture stay the same.',
                code_signing_config_arn:
                    '(Optional) To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.',
                dead_letter_config: {
                    'target_arn!':
                        "(Required) ARN of an SNS topic or SQS queue to notify when an invocation fails. If this option is used, the function's IAM role must be granted suitable access to write to the target object, which means allowing either the `sns:Publish` or `sqs:SendMessage` action on this ARN, depending on which service is targeted.",
                },
                description: '(Optional) Description of what your Lambda Function does.',
                environment: {
                    variables:
                        '(Optional) Map of environment variables that are accessible from the function code during execution. If provided at least one key must be present.',
                },
            },
            attrs: {
                arn: 'Amazon Resource Name (ARN) identifying your Lambda Function.',
                invoke_arn:
                    "ARN to be used for invoking Lambda Function from API Gateway - to be used in [`aws_api_gateway_integration`](/docs/providers/aws/r/api_gateway_integration.html)'s `uri`.",
            },
        },
    },
}

export const typeLines = typesString.split('\n')
