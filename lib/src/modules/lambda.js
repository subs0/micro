import { flag } from '../types';
import { bucket_policy, bucket_cors, bucket } from './s3';
import { subscription } from './sns';
import { iam_policy_doc, iam_role, multi_stmt_policy_doc, iam_role_policy_attachment, iam_policy, } from './iam';
//import { ecr_repo, ecr_image, isFile } from './ecr'
export const lambda_invoke_cred = ({ function_name, source_arn, principal = 'sns.amazonaws.com', statement_id = 'AllowExecutionFromSNS', }) => ({
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
//          888                         888                            d8           888
//   e88~~\ 888  e88~-_  888  888  e88~\888 Y88b    e    /   /~~~8e  _d88__  e88~~\ 888-~88e
//  d888    888 d888   i 888  888 d888  888  Y88b  d8b  /        88b  888   d888    888  888
//  8888    888 8888   | 888  888 8888  888   Y888/Y88b/    e88~-888  888   8888    888  888
//  Y888    888 Y888   ' 888  888 Y888  888    Y8/  Y8/    C888  888  888   Y888    888  888
//   "88__/ 888  "88_-~  "88_-888  "88_/888     Y    Y      "88_-888  "88_/  "88__/ 888  888
const cloudwatch = ({ name, retention_in_days = 7, tags = {} }) => ({
    resource: {
        cloudwatch_log_group: {
            name: `/aws/lambda/${name}-log-group`,
            retention_in_days,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
            // @ts-ignore
            depends_on: ['docker_registry_image.$SCOPE'],
        },
    },
});
//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888
/**
 * TODO:
 * - build lambdas JIT
 *   - for zipped lambdas
 *     - python: use @-0/build-lambda-py
 *   - for container lambdas
 *     - use @-0/build-lambda-container
 */
const lambda_fn = ({ name, role_arn, file_path, env_vars = {}, handler = 'handler.handler', package_type = 'Zip', runtime = 'python3.8', tags = {}, }) => ({
    resource: {
        lambda_function: {
            runtime,
            handler,
            package_type,
            function_name: `-->lambda-${name}`,
            role: role_arn,
            environment: {
                variables: env_vars,
            },
            ...(package_type === 'Image' ? { image_uri: file_path } : { filename: file_path }),
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
            invoke_arn: '-->',
        },
    },
});
/**
 * micro service module
 *
 * @param name - name of the micro service
 * @param subdomain - subdomain of the micro service
 * @param file_path - path to the lambda function zip file
 * @param handler - name of the lambda handler function
 * @param env_vars - environment variables for the lambda function
 * @param filter - filter policy for sns subscription
 * @param my - self reference for referencing other resources
 *
 * @returns - micro service module
 *
 * @example
 * ```ts
 * const module = modulate({ ms1: microServiceModule })
 * const output = module({ name: 'throwaway-test-123', subdomain: 'bloop' })
 * const compiler = config(provider, terraform, 'main.tf.json')
 * const compiled = compiler(output)
 * ```
 */
export const lambda = ({ name = 'microservice', file_path = '${path.root}/lambdas/template/zipped/handler.py.zip', handler = 'handler.handler', env_vars = {}, tags = {}, sns, }, my) => {
    // TODO: consider triggering @-0/build-lambda-py here
    // - would have to make this async...
    const ext = file_path.split('.').pop();
    const isZip = ext === 'zip';
    return {
        iam_policy_doc,
        lambda_role: iam_role({
            name,
            policy_json: my?.lambda_creds?.data?.iam_policy_document?.json,
            tags,
        }),
        bucket: bucket({ name, tags }),
        bucket_access_creds: multi_stmt_policy_doc({
            bucket_name: my?.bucket.resource?.s3_bucket?.bucket,
            lambda_role_arn: my?.lambda_role?.resource?.iam_role?.arn,
        }),
        bucket_cors: bucket_cors({ bucket_name: my?.bucket.resource?.s3_bucket?.bucket }),
        bucket_policy: bucket_policy({
            bucket_name: my?.bucket.resource?.s3_bucket?.bucket,
            policy_json: my?.bucket_access_creds?.data?.iam_policy_document?.json,
        }),
        cloudwatch: cloudwatch({ name, tags }),
        lambda_access_creds: multi_stmt_policy_doc({
            bucket_name: my?.bucket.resource?.s3_bucket?.bucket,
            cloudwatch_arn: my?.cloudwatch.resource?.cloudwatch_log_group?.arn,
            topic_arn: sns?.downstream?.topic_arn,
        }),
        lambda_policy: iam_policy({
            name: `${name}-policy`,
            policy_json: my?.lambda_access_creds?.data?.iam_policy_document?.json,
            tags,
        }),
        lambda_policy_attachment: iam_role_policy_attachment({
            policy_arn: my?.lambda_policy?.resource?.iam_policy?.arn,
            role_name: my?.lambda_role?.resource?.iam_role?.name,
        }),
        lambda: lambda_fn({
            name,
            role_arn: my?.lambda_role?.resource?.iam_role?.arn,
            file_path,
            package_type: isZip ? 'Zip' : 'Image',
            handler,
            tags,
            env_vars: {
                S3_BUCKET_NAME: my?.bucket.resource?.s3_bucket?.bucket,
                ...(sns?.downstream
                    ? {
                        SNS_TOPIC_ARN: sns.downstream.topic_arn,
                        SNS_MESSAGE_ATTRS: JSON.stringify(sns.downstream.message_attrs),
                    }
                    : {}),
                ...env_vars,
            },
        }),
        ...(sns?.upstream
            ? {
                sns_invoke_cred: lambda_invoke_cred({
                    function_name: my?.lambda?.resource?.lambda_function?.function_name,
                    source_arn: sns.upstream?.topic_arn,
                    principal: 'sns.amazonaws.com',
                    statement_id: 'AllowExecutionFromSNS',
                }),
                subscription: subscription({
                    topic_arn: sns.upstream.topic_arn,
                    lambda_arn: my?.lambda?.resource?.lambda_function?.arn,
                    filter: sns.upstream.filter_policy,
                }),
            }
            : {}),
    };
};
//# sourceMappingURL=lambda.js.map