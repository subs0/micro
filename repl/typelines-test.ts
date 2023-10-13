import { getInUnsafe } from '@thi.ng/paths'
import { EquivMap } from '@thi.ng/associative'

const typesString = `
export interface TerraformProviderAws {
    data?:     Data;
    resource?: Resource;
}

export interface Data {
    cloudwatch_log_group?: DataCloudwatchLogGroup;
    iam_policy_document?:  IamPolicyDocument;
}

export interface DataCloudwatchLogGroup {
    name:               string;
    creation_time?:     string;
    retention_in_days?: string;
    kms_key_id?:        string;
    tags?:              string;
}

export interface IamPolicyDocument {
    override_policy_documents?: string;
    policy_id?:                 string;
    source_policy_documents?:   string;
    statement?:                 IamPolicyDocumentStatement;
    version?:                   string;
    json?:                      string;
}

export interface IamPolicyDocumentStatement {
    actions?:        string;
    condition?:      StatementCondition;
    effect?:         string;
    not_actions?:    string;
    not_principals?: string;
    not_resources?:  string;
    principals?:     Principals;
    resources?:      string;
    sid?:            string;
}

export interface StatementCondition {
    test?:     string;
    values?:   string;
    variable?: string;
}

export interface Principals {
    identifiers?: string;
    type?:        string;
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
        iam_policy_document: {
            args: {
                override_policy_documents:
                    '(Optional) List of IAM policy documents that are merged together into the exported document. In merging, statements with non-blank `sid`s will override statements with the same `sid` from earlier documents in the list. Statements with non-blank `sid`s will also override statements with the same `sid` from `source_policy_documents`.  Non-overriding statements will be added to the exported document.\n',
                policy_id: '(Optional) ID for the policy document.\n',
                source_policy_documents:
                    '(Optional) List of IAM policy documents that are merged together into the exported document. Statements defined in `source_policy_documents` must have unique `sid`s. Statements with the same `sid` from `override_policy_documents` will override source statements.\n',
                statement: {
                    actions:
                        '(Optional) List of actions that this statement either allows or denies. For example, `["ec2:RunInstances", "s3:',
                    condition: {
                        'test!':
                            '(Required) Name of the [IAM condition operator](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition_operators.html) to evaluate.\n',
                        'values!':
                            '(Required) Values to evaluate the condition against. If multiple values are provided, the condition matches if at least one of them applies. That is, AWS evaluates multiple values as though using an "OR" boolean operation.\n',
                        'variable!':
                            '(Required) Name of a [Context Variable](http://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html#AvailableKeys) to apply the condition to. Context variables may either be standard AWS variables starting with `aws:` or service-specific variables prefixed with the service name.\n',
                    },
                    effect: '(Optional) Whether this statement allows or denies the given actions. Valid values are `Allow` and `Deny`. Defaults to `Allow`.\n',
                    not_actions:
                        '(Optional) List of actions that this statement does not apply to. Use to apply a policy statement to all actions except those listed.\n',
                    not_principals:
                        '(Optional) Like `principals` except these are principals that the statement does not apply to.\n',
                    not_resources:
                        '(Optional) List of resource ARNs that this statement does not apply to. Use to apply a policy statement to all resources except those listed. Conflicts with `resources`.\n',
                    principals: {
                        'identifiers!':
                            '(Required) List of identifiers for principals. When `type` is `AWS`, these are IAM principal ARNs, e.g., `arn:aws:iam::12345678901:role/yak-role`.  When `type` is `Service`, these are AWS Service roles, e.g., `lambda.amazonaws.com`. When `type` is `Federated`, these are web identity users or SAML provider ARNs, e.g., `accounts.google.com` or `arn:aws:iam::12345678901:saml-provider/yak-saml-provider`. When `type` is `CanonicalUser`, these are [canonical user IDs](https://docs.aws.amazon.com/general/latest/gr/acct-identifiers.html#FindingCanonicalId), e.g., `79a59df900b949e55d96a1e698fbacedfd6e09d98eacf8f8d5218e7cd47ef2be`.\n',
                        'type!':
                            '(Required) Type of principal. Valid values include `AWS`, `Service`, `Federated`, `CanonicalUser` and `',
                    },
                    resources:
                        '(Optional) List of resource ARNs that this statement applies to. This is required by AWS if used for an IAM policy. Conflicts with `not_resources`.\n',
                    sid: '(Optional) Sid (statement ID) is an identifier for a policy statement.\n',
                },
                version:
                    '(Optional) IAM policy document version. Valid values are `2008-10-17` and `2012-10-17`. Defaults to `2012-10-17`. For more information, see the [AWS IAM User Guide](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_version.html).\n\n',
            },
            attrs: {
                json: 'Standard JSON policy document rendered based on the arguments above.\n\n',
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
