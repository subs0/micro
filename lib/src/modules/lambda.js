import { modulate } from '../config';
import { flag } from '../constants';
import { subscription } from './sns';
import { isPlainObject } from '@thi.ng/checks';
//  888                         888             888
//  888   /~~~8e  888-~88e-~88e 888-~88e   e88~\888   /~~~8e
//  888       88b 888  888  888 888  888b d888  888       88b
//  888  e88~-888 888  888  888 888  8888 8888  888  e88~-888
//  888 C888  888 888  888  888 888  888P Y888  888 C888  888
//  888  "88_-888 888  888  888 888-_88"   "88_/888  "88_-888
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
            ...(tmp_storage ? { ephemeral_storage: { size: tmp_storage } } : {}),
            role: role_arn,
            environment: { variables: env_vars },
            tags: { ...flag, ...tags },
            // @ts-ignore
            depends_on,
            arn: '-->',
            invoke_arn: '-->',
        },
    },
});
export const Lambda = ({ name, runtime = 'python3.8', handler, file_path, architectures = ['x86_64'], // options are: x86_64, arm64
memory_size = 128, timeout = 60, env_vars = {}, tags = {}, depends_on = [], tmp_storage, role_arn, s3, sns, }, my) => {
    //const kabob_name = name.replace(/_/g, '-')
    //const my_bucket = my?.bucket?.resource?.s3_bucket?.bucket
    //const my_role_arn = my?.role?.resource?.iam_role?.arn
    //console.log(`lambda.ts#L164 SNS: ${name}:\n`, sns, '\n')
    //console.log(`lambda.ts#L182 my: ${my}`)
    const buckets = s3?.map(({ name, ref, actions }) => ({
        name,
        ref: `<--${ref}`,
        actions,
    }));
    //console.log(`\nlambdaModule BUCKET_ENV: ${name}:\n`, buckets, '\n')
    const someIncludes = (array, key) => array && array.some((x) => isPlainObject(x) && Object.keys(x).includes(key));
    const is_publishing = someIncludes(sns, 'message_attrs') ? true : false;
    const is_subscribed = someIncludes(sns, 'filter_policy') ? true : false;
    const sns_config = is_publishing
        ? sns?.reduce((acc, { lambda, message_attrs, name, ref }) => {
            my && console.log(`lambda ${lambda} is publishing to topic ${name}`);
            return [...acc, { name, ref: `<--${ref}`, attributes: message_attrs }];
        }, [])
        : null;
    const my_env_vars = {
        ...(s3?.length ? { S3_BUCKETS: JSON.stringify(buckets) } : {}),
        ...(is_publishing
            ? {
                SNS_CONFIG: JSON.stringify(sns_config),
            }
            : {}),
        ...env_vars,
    };
    return {
        function: lambdaFunction({
            name,
            role_arn,
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
            env_vars: my_env_vars,
        }),
        ...(sns && is_subscribed
            ? sns.reduce((acc, { filter_policy, ref, name, lambda }) => {
                my && console.log(`lambda ${lambda} is subscribed to topic ${name}`);
                return {
                    ...acc,
                    [`${name}_sns_invoke_cred`]: lambdaInvokeCred({
                        function_name: my?.function?.resource?.lambda_function?.function_name,
                        source_arn: `<--${ref}`,
                        principal: 'sns.amazonaws.com',
                        statement_id: `AllowExecutionFromSNS-${name}-${name}`,
                    }),
                    [`${name}_subscription`]: subscription({
                        topic_arn: `<--${ref}`,
                        lambda_arn: my?.function?.resource?.lambda_function?.arn,
                        filter: filter_policy,
                    }),
                };
            }, {})
            : {}),
    };
};
export const lambdaModule = modulate({ lambda: Lambda });
//# sourceMappingURL=lambda.js.map