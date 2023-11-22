import { topicModule, bucketModule } from './index';
import { flag } from '../constants';
import { modulate } from '../index';
const dummy = {
    name: 'lambda_name',
    runtime: 'python3.11',
    handler: 'index.handler',
    architectures: ['x86_64'],
    memory: 1024,
    timeout: 120,
    s3: {
        'bucket-name': [
            's3:PutObject',
            's3:GetObject',
            's3:DeleteObject',
            's3:AbortMultipartUpload',
            's3:ListMultipartUploadParts',
            's3:ListBucketMultipartUploads',
        ],
        'bucket-name-2': ['GetObject', 'ListBucket'],
    },
    sns: {
        video: {
            filter_policy: {
                type: ['uploaded'],
            },
            message_attrs: {
                type: {
                    DataType: 'String',
                    StringValue: 'mp4d',
                },
            },
        },
        audio: {
            filter_policy: {
                type: ['uploaded'],
            },
            message_attrs: {
                type: {
                    DataType: 'String',
                    StringValue: 'transcribed',
                },
            },
        },
    },
    api: {
        up: {
            'POST /uploads': {},
            $default: {},
        },
    },
    tags: {
        welcome: 'home',
    },
};
const dummy2 = {
    name: 'lambda_name2',
    runtime: 'python3.11',
    handler: 'index.handler',
    architectures: ['x86_64'],
    memory: 1024,
    timeout: 120,
    s3: {
        'bucket-name': ['s3:GetObject'],
        'bucket-name-3': ['s3:GetObject', 's3:ListBucket'],
    },
    sns: {
        video: {
            filter_policy: {
                type: ['mp4d'],
            },
            message_attrs: {
                type: {
                    DataType: 'String',
                    StringValue: 'transcribered',
                },
            },
        },
    },
    api: {
        up: {
            'POST /uploads': {},
            $default: {},
        },
    },
    tags: {
        welcome: 'home',
    },
};
const buckets = {};
const tags = {};
const topics = {};
const provisionBucket = ({ buckets, name, tags }) => {
    const [BUCKET, BUCKET_REFS] = bucketModule({ name, tags });
    const bucket = BUCKET_REFS[name]?.resource?.s3_bucket?.bucket || '🔥';
    if (!buckets[name]) {
        console.log('provisioning bucket:', name, bucket);
        buckets[name] = BUCKET;
    }
    return bucket;
};
const provisionTopic = ({ topics, name, tags }) => {
    const [TOPIC, TOPIC_REFS] = topicModule({ name, tags });
    const arn = TOPIC_REFS[name]?.resource?.sns_topic?.arn || '🔥';
    if (!topics[name]) {
        console.log('provisioning topic:', name, arn);
        topics[name] = TOPIC;
    }
    return arn;
};
const target_shape = [
    {
        ref: '${resource.aws_s3_bucket.|||||||||.bucket}',
        actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
        type: 's3',
    },
    {
        ref: '${resource.aws_sns_topic.|||||||||.arn}',
        actions: ['sns:Publish', 'sns:Subscribe'],
        type: 'sns',
    },
    {
        ref: '${resource.aws_sns_topic.|||||||||.arn}',
        actions: ['sns:Publish', 'sns:Subscribe'],
        type: 'sns',
    },
    {
        ref: '${resource.aws_cloudwatch_log_group.|||||||||.arn}',
        actions: ['logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents'],
        type: 'cloudwatch',
    },
];
const node_topics = (lambda, sns, tags) => Object.entries(sns).reduce((acc, [topic_key, config]) => {
    const { filter_policy, message_attrs } = config;
    if (!filter_policy && !message_attrs) {
        console.error(`missing \`filter_policy\` or \`message_attrs\` for ${'path'}.micro.json: sns.${topic_key}`);
        return acc;
    }
    else {
        const topic_arn = provisionTopic({ topics, name: topic_key, tags });
        const actions = [
            ...(filter_policy ? ['sns:Subscribe'] : []),
            ...(message_attrs ? ['sns:Publish'] : []),
        ];
        return [
            ...acc,
            {
                lambda,
                ref: `<--${topic_arn}`,
                type: 'sns',
                actions,
                topic_key,
                ...(filter_policy ? { filter_policy } : {}),
                ...(message_attrs ? { message_attrs } : {}),
            },
        ];
    }
}, []);
const node_buckets = (lambda, s3, tags) => Object.entries(s3).reduce((acc, [bucket_key, actions]) => {
    const bucket = provisionBucket({ buckets, name: bucket_key, tags });
    return [
        ...acc,
        {
            lambda,
            ref: `<--${bucket}`,
            type: 's3',
            bucket_key,
            actions,
        },
    ];
}, []);
console.log('\n');
const buckets_out = node_buckets(dummy.name, dummy.s3, tags); //?
console.log('\n');
const buckets_out2 = node_buckets(dummy2.name, dummy2.s3, tags); //?
console.log('\n');
const topics_out = node_topics(dummy.name, dummy.sns, tags); //?
console.log('\n');
const topics_out1 = node_topics(dummy2.name, dummy2.sns, tags); //?
const all_out = [...buckets_out, ...buckets_out2, ...topics_out, ...topics_out1]; //?
/**
 * converts an array of objects into an object with those arrays
 * grouped by a key (default: 'lambda')
 */
const groupByKey = (array, key = 'lambda') => {
    const grouped = array.reduce((acc, cur) => {
        const { [key]: name, ...rest } = cur;
        return {
            ...acc,
            [name]: [...(acc[name] || []), rest],
        };
    }, {});
    return grouped;
};
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
const multiStatementIamPolicyDoc = (configs) => {
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
console.log('\n');
const grouped_topics = groupByKey(all_out, 'lambda'); //?
//const grouped_buckets = groupByKey([...buckets_out, ...buckets_out2], 'lambda') //?
console.log('\n');
topics; //?
//  888-~88e  e88~~8e  Y88b    e    /
//  888  888 d888  88b  Y88b  d8b  /
//  888  888 8888__888   Y888/Y88b/
//  888  888 Y888    ,    Y8/  Y8/
//  888  888  "88___/      Y    Y
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
const dummy_configs = [
    {
        ref: '${resource.aws_s3_bucket.||| 1 |||.bucket}',
        actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
        type: 's3',
    },
    {
        ref: '${resource.aws_sns_topic.||| 1 |||.arn}',
        actions: ['sns:Publish', 'sns:Subscribe'],
        type: 'sns',
    },
    {
        ref: '${resource.aws_sns_topic.||| 2 |||.arn}',
        actions: ['sns:Publish', 'sns:Subscribe'],
        type: 'sns',
    },
    {
        ref: '${resource.aws_cloudwatch_log_group.||| 1 |||.arn}',
        actions: ['logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents'],
        type: 'cloudwatch',
    },
];
const Role = ({ name, configs, tags }, my) => {
    // inject role arn into configs with type === 's3'
    const configs_w_role_for_s3 = configs.map((config) => {
        const { ref, type, actions } = config;
        return {
            type,
            actions,
            ref,
            ...(type === 's3' ? { role_arn: my?.[`${name}_role`]?.resource?.iam_role?.arn } : {}),
        };
    });
    return {
        [`${name}_assumed_role`]: assumed_role,
        [`${name}_role`]: iamRole({
            name,
            policy_json: my?.[`${name}_assumed_role`]?.data?.iam_policy_document?.json,
            tags,
        }),
        [`${name}_allowed`]: multiStatementIamPolicyDoc(configs_w_role_for_s3),
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
const iamRoleModule = modulate({ iam: Role });
const [IAM_ROLE, IAM_ROLE_REFS] = iamRoleModule({
    name: 'lambda1',
    configs: dummy_configs,
    tags,
});
console.log('\n');
JSON.stringify(IAM_ROLE, null, 2); //?
//# sourceMappingURL=scratch.js.map