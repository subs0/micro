import { modulate } from '../config';
import { flag } from '../constants';
import { s3BucketPolicy, s3BucketCors, s3bucket } from './s3';
import { subscription } from './sns';
import { iamRole, iamRolePolicyAttachment, iamPolicy } from './iam';
const policy_doc = {
    data: {
        iam_policy_document: {
            statement: {
                effect: 'Allow',
                actions: ['sts:AssumeRole'],
                principals: {
                    identifiers: ['lambda.amazonaws.com', 'apigateway.amazonaws.com'],
                    type: 'Service',
                },
            },
            json: '-->',
        },
    },
};
const bucketPolicyStatement = ({ bucket_name, role_arn = '' }) => ({
    ...(role_arn ? { principals: { identifiers: [role_arn], type: 'AWS' } } : {}),
    effect: 'Allow',
    actions: [
        's3:AbortMultipartUpload',
        's3:ListMultipartUploadParts',
        's3:ListBucketMultipartUploads',
        's3:PutObject',
        's3:GetObject',
        's3:DeleteObject',
    ],
    resources: [`arn:aws:s3:::${bucket_name}`, `arn:aws:s3:::${bucket_name}/*`],
});
const multiStatementIamPolicyDoc = ({ bucket_name = '', topic_arn = '', cloudwatch_arn = '', role_arn = '', }) => ({
    data: {
        iam_policy_document: {
            statement: [
                ...(bucket_name
                    ? [bucketPolicyStatement({ bucket_name, role_arn })]
                    : []),
                ...(topic_arn
                    ? [
                        {
                            effect: 'Allow',
                            actions: ['sns:Publish', 'sns:Subscribe'],
                            resources: [topic_arn],
                        },
                    ]
                    : []),
                ...(cloudwatch_arn
                    ? [
                        {
                            effect: 'Allow',
                            actions: [
                                'logs:CreateLogGroup',
                                'logs:CreateLogStream',
                                'logs:PutLogEvents',
                            ],
                            resources: [`${cloudwatch_arn}:*`, `${cloudwatch_arn}:*:*`],
                        },
                    ]
                    : []),
            ],
            json: '-->',
        },
    },
});
export const lambdaInvokeCred = ({ function_name, source_arn, principal = 'sns.amazonaws.com', statement_id = 'AllowExecutionFromSNS', }) => ({
    resource: {
        lambda_permission: {
            statement_id,
            action: 'lambda:InvokeFunction',
            function_name,
            principal,
            source_arn,
        },
    },
});
const cloudwatch = ({ name, retention_in_days = 7, tags = {} }) => ({
    resource: {
        cloudwatch_log_group: {
            name: `/aws/lambda/function-${name}`,
            retention_in_days,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
});
/**
 * TODO:
 * - build functions JIT
 *   - for zipped functions
 *     - python: use @-0/build-function-py
 *   - for container functions
 *     - use @-0/build-function-container
 */
const lambdaFunction = ({ name, role_arn, file_path, env_vars = {}, handler, runtime, package_type = 'Zip', tmp_storage, architectures = ['x86_64'], timeout = 60, memory_size = 128, depends_on = [], tags = {}, }) => ({
    resource: {
        lambda_function: {
            package_type,
            ...(package_type === 'Image'
                ? { image_uri: file_path, architectures }
                : { filename: file_path, handler, runtime }),
            function_name: `-->function-${name}`,
            memory_size,
            timeout,
            ...((tmp_storage && {
                ephemeral_storage: {
                    size: tmp_storage,
                },
            }) ||
                {}),
            role: role_arn,
            environment: {
                variables: env_vars,
            },
            tags: {
                ...flag,
                ...tags,
            },
            // @ts-ignore
            depends_on,
            arn: '-->',
            invoke_arn: '-->',
        },
    },
});
/**
 * Lambda module
 */
export const Lambda = ({ name, runtime = 'python3.8', handler, file_path, architectures = ['x86_64'], // options are: x86_64, arm64
memory_size = 128, timeout = 60, env_vars = {}, tags = {}, depends_on = [], tmp_storage, bucket = true, sns, }, my) => {
    // TODO: consider triggering @-0/build-function-py here
    // - would have to make this async...
    //const ext = file_path.split('.').pop()
    //const isZip = ext === 'zip'
    return {
        function: lambdaFunction({
            name,
            role_arn: my?.role?.resource?.iam_role?.arn,
            file_path,
            package_type: runtime && handler ? 'Zip' : 'Image',
            handler,
            runtime,
            architectures,
            memory_size,
            timeout,
            tmp_storage,
            tags,
            depends_on,
            env_vars: {
                ...(bucket ? { S3_BUCKET_NAME: my?.bucket?.resource?.s3_bucket?.bucket } : {}),
                ...(sns?.downstream
                    ? {
                        SNS_TOPIC_ARN: `<--${sns.downstream?.topic_arn}`,
                        SNS_MESSAGE_ATTRS: JSON.stringify(sns.downstream.message_attrs),
                    }
                    : {}),
                ...env_vars,
            },
        }),
        policy_doc,
        role: iamRole({
            name,
            policy_json: my?.policy_doc?.data?.iam_policy_document?.json,
            tags,
        }),
        cloudwatch: cloudwatch({ name, tags }),
        access_creds: multiStatementIamPolicyDoc({
            bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
            cloudwatch_arn: my?.cloudwatch?.resource?.cloudwatch_log_group?.arn,
            topic_arn: sns?.downstream?.topic_arn ? `<--${sns?.downstream?.topic_arn}` : '',
        }),
        policy: iamPolicy({
            name: `${name}-policy`,
            policy_json: my?.access_creds?.data?.iam_policy_document?.json,
            tags,
        }),
        policy_attachment: iamRolePolicyAttachment({
            policy_arn: my?.policy?.resource?.iam_policy?.arn,
            role_name: my?.role?.resource?.iam_role?.name,
        }),
        ...(bucket
            ? {
                pet: {
                    resource: {
                        random_pet: {
                            id: '-->',
                        },
                    },
                },
                bucket: s3bucket({
                    name: `${name.replace('_', '-')}-${my?.pet?.resource?.random_pet?.id}`,
                    tags,
                }),
                bucket_access_creds: multiStatementIamPolicyDoc({
                    bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
                    role_arn: my?.role?.resource?.iam_role?.arn,
                }),
                bucket_cors: s3BucketCors({
                    bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
                }),
                bucket_policy: s3BucketPolicy({
                    bucket_name: my?.bucket?.resource?.s3_bucket?.bucket,
                    policy_json: my?.bucket_access_creds?.data?.iam_policy_document?.json,
                }),
            }
            : {}),
        ...(sns?.upstream?.topic_arn
            ? {
                sns_invoke_cred: lambdaInvokeCred({
                    function_name: my?.function?.resource?.lambda_function?.function_name,
                    source_arn: `<--${sns.upstream.topic_arn}`,
                    principal: 'sns.amazonaws.com',
                    statement_id: 'AllowExecutionFromSNS' + '-' + name,
                }),
                subscription: subscription({
                    topic_arn: `<--${sns.upstream.topic_arn}`,
                    lambda_arn: my?.function?.resource?.lambda_function?.arn,
                    filter: sns.upstream.filter_policy,
                }),
            }
            : {}),
    };
};
export const lambdaModule = modulate({ lambda: Lambda });
//# sourceMappingURL=lambda.js.map