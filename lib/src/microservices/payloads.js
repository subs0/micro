import { topicModule, bucketModule, zoneModule } from '../modules/index';
/**
 * converts an array of objects into an object with those arrays
 * grouped by a key (default: 'lambda')
 */
export const groupByKey = (array, key = 'lambda') => {
    const grouped = array.reduce((acc, cur) => {
        const { [key]: name, ...rest } = cur;
        if (!name) {
            return acc;
        }
        else {
            return {
                ...acc,
                [name]: [...(acc[name] || []), rest],
            };
        }
    }, {});
    return grouped;
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
export const configTopics = ({ topics, lambda, sns, tags }) => Object.entries(sns).reduce((acc, [topic_key, config]) => {
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
                ref: topic_arn,
                type: 'sns',
                actions,
                topic_key,
                ...(filter_policy ? { filter_policy } : {}),
                ...(message_attrs ? { message_attrs } : {}),
            },
        ];
    }
}, []);
const provisionBucket = ({ buckets, name, configs, tags }) => {
    const [BUCKET, BUCKET_REFS] = bucketModule({ name, configs, tags });
    const bucket = BUCKET_REFS[name]?.resource?.s3_bucket?.bucket || '🔥';
    if (!buckets[name]) {
        console.log('provisioning bucket:', name, bucket);
        buckets[name] = BUCKET;
    }
    return bucket;
};
export const configBuckets = ({ buckets, lambda, configs, s3, tags }) => Object.entries(s3).reduce((acc, [bucket_key, actions]) => {
    const bucket = provisionBucket({ buckets, name: bucket_key, configs, tags });
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
export const configZone = ({ api, apex, zones }) => Object.entries(api).reduce((acc, [subdomain, routes]) => {
    const [ZONE, ZONE_REFS] = zoneModule({ apex });
    const zone_id = ZONE_REFS?.route53?.data?.route53_zone?.zone_id;
    zones[`${subdomain}.${apex}`] = ZONE;
    return {
        ...acc,
        [subdomain]: {
            apex,
            zone_id,
            routes,
        },
    };
}, {});
//# sourceMappingURL=payloads.js.map