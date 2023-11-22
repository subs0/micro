import { flag } from '../constants';
import { modulate } from '../config';
//export const lambdaInvokeCred = ({
//   function_name,
//   source_arn,
//   principal = 'sns.amazonaws.com',
//   statement_id = 'AllowExecutionFromSNS',
//}): AWS => ({
//   resource: {
//      lambda_permission: {
//         statement_id,
//         action: 'lambda:InvokeFunction',
//         function_name,
//         principal,
//         source_arn,
//      },
//   },
//})
//  ,e,
//   "    /~~~8e  888-~88e-~88e
//  888       88b 888  888  888
//  888  e88~-888 888  888  888
//  888 C888  888 888  888  888
//  888  "88_-888 888  888  888
const assumed_role = {
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
const iamRole = ({ name, policy_json, tags = {} }) => ({
    resource: {
        iam_role: {
            name: `-->${name}-role`,
            assume_role_policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
});
const iamPolicy = ({ name, policy_json, tags = {} }) => ({
    resource: {
        iam_policy: {
            name: `-->${name}-policy`,
            policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
});
const iamRolePolicyAttachment = ({ role_name, policy_arn }) => ({
    resource: {
        iam_role_policy_attachment: {
            role: role_name,
            policy_arn,
        },
    },
});
const defaultActions = {
    s3: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
    sns: ['sns:Publish', 'sns:Subscribe'],
    cloudwatch: ['logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents'],
};
const iamStatement = ({ ref, role_arn, actions, type }) => {
    const resources = {
        s3: [`arn:aws:s3:::${ref}`, `arn:aws:s3:::${ref}/*`],
        sns: [ref],
        cloudwatch: [`${ref}:*`, `${ref}:*:*`],
    }[type];
    if (!resources)
        throw new Error(`Unknown IAM statement type: ${type}`);
    return {
        ...(role_arn ? { principals: { identifiers: [role_arn], type: 'AWS' } } : {}),
        effect: 'Allow',
        actions: actions || defaultActions[type],
        resources,
    };
};
export const multiStatementIamPolicyDoc = (configs) => {
    const statements = configs.reduce((acc, cur) => {
        const { ref, role_arn, actions, type } = cur;
        return [...acc, iamStatement({ ref, role_arn, actions, type })];
    }, []);
    return {
        data: {
            iam_policy_document: {
                statement: statements,
                json: '-->',
            },
        },
    };
};
/**
 * ```js
 * const configs_sig = [
 *    {
 *       ref: '${resource.aws_s3_bucket.||| 1 |||.bucket}',
 *       actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
 *       type: 's3',
 *    },
 *    {
 *       ref: '${resource.aws_sns_topic.||| 1 |||.arn}',
 *       actions: ['sns:Publish', 'sns:Subscribe'],
 *       type: 'sns',
 *    },
 *    {
 *       ref: '${resource.aws_sns_topic.||| 2 |||.arn}',
 *       type: 'sns',
 *    },
 *    {
 *       ref: '${resource.aws_cloudwatch_log_group.||| 1 |||.arn}',
 *       type: 'cloudwatch',
 *    },
 * ]
 * ```
 */
const Role = ({ name, configs, tags }, my) => {
    // inject role arn into configs with type === 's3'
    const config = configs
        ? configs.map((config) => {
            const { ref, type, actions } = config;
            return {
                type,
                actions,
                ref,
                ...(type === 's3' ? { role_arn: my?.[`${name}_role`]?.resource?.iam_role?.arn } : {}),
            };
        })
        : null;
    return {
        [`${name}_assumed_role`]: assumed_role,
        [`${name}_role`]: iamRole({
            name,
            policy_json: my?.[`${name}_assumed_role`]?.data?.iam_policy_document?.json,
            tags,
        }),
        [`${name}_allowed`]: multiStatementIamPolicyDoc(config),
        [`${name}_policy`]: iamPolicy({
            name,
            policy_json: my?.[`${name}_allowed`]?.data?.iam_policy_document?.json,
            tags,
        }),
        [`${name}_ps`]: iamRolePolicyAttachment({
            role_name: my?.[`${name}_role`]?.resource?.iam_role?.name,
            policy_arn: my?.[`${name}_policy`]?.resource?.iam_policy?.arn,
        }),
    };
};
export const iamRoleModule = modulate({ iam: Role });
//# sourceMappingURL=iam.js.map