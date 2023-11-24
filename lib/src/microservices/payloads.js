import { topicModule, bucketModule, zoneModule, cloudwatchModule } from '../modules/index';
import { defaultActions } from '../modules/iam';
/**
 * plucks values from an array of objects by a selection of keys
 * @example
 * ```js
 * [
 *   {
 *     "name": "docker_me",
 *     "s3": [],
 *     "sns": [{ "a": 1 }, { "b": 2 }],
 *   },
 *   {
 *     "name": "http_tester",
 *     "s3": [{ "h": 1 }, { "e": 3 }],
 *     "sns": [{ "a": 1 }, { "b": 2 }],
 *   },
 * const plucked = pluck(configs, ['s3', 'sns'])
 * console.log(plucked)
 * // [{ "a": 1 }, { "b": 2 }, { "h": 1 }, { "e": 3 }, { "a": 1 }, { "b": 2 }]
 * ```
 */
export const pluck = (configs, keys) => {
    return configs.reduce((acc, config) => {
        const plucked = keys.reduce((a, key) => {
            const v = config[key];
            return v?.length ? [...a, ...v] : a;
        }, []);
        if (plucked)
            return [...acc, ...plucked];
        else
            return acc;
    }, []);
};
/**
 * converts an array of objects into an object with those arrays
 * grouped by a key (default: 'lambda')
 * @example
 * ```js
 * const configs = [
 *   {
 *     lambda: 'example',
 *     type: 's3',
 *     actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
 *   },
 *   {
 *     lambda: 'example',
 *     type: 'sns',
 *     actions: ['sns:Publish', 'sns:Subscribe'],
 *   },
 * ]
 * const grouped = groupByKey(configs)
 * console.log(grouped)
 * // {
 * //   example: [
 * //     {
 * //       type: 's3',
 * //       actions: ['s3:PutObject', 's3:GetObject', 's3:DeleteObject'],
 * //     },
 * //     {
 * //       type: 'sns',
 * //       actions: ['sns:Publish', 'sns:Subscribe'],
 * //     },
 * //   ],
 * // }
 * ```
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
export const configureCWforNode = ({ path, lambda, cloudwatch, tags }) => {
    const { retention_in_days, actions } = cloudwatch || { retention_in_days: 7 };
    const [, refs] = cloudwatchModule({ name: lambda, retention_in_days, tags });
    const arn = refs[lambda]?.resource?.cloudwatch_log_group?.arn;
    return [
        {
            lambda,
            name: lambda,
            ref: arn,
            type: 'cloudwatch',
            actions: actions || defaultActions['cloudwatch'],
            retention_in_days,
        },
    ];
};
export const provisionCloudwatch = ({ configs, tags }) => {
    return Object.entries(configs).reduce((acc, cur) => {
        const [name, configs] = cur;
        if (!acc[`cw_${name}`]) {
            console.log(`provisioning cloudwatch: ${`cw_${name}`}`);
            const [CW] = cloudwatchModule({
                name,
                tags,
                retention_in_days: configs[0]?.retention_in_days || 7,
            });
            return { ...acc, [`cw_${name}`]: CW };
        }
        else {
            return acc;
        }
    }, {});
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
/**
 * generates configurations with target shape including the reference (topic
 * arn) and actions (publish, subscribe) for each topic
 */
export const configureTopicsForNode = ({ path, lambda, sns, tags }) => {
    return sns
        ? Object.entries(sns).reduce((a, c) => {
            const [name, config] = c;
            const { filter_policy, message_attrs } = config;
            if (!filter_policy && !message_attrs) {
                console.warn(`missing \`filter_policy\` and/or \`message_attrs\`` +
                    `for: ${path}.micro.json: sns.${name}`);
                return a;
            }
            else {
                const [, refs] = topicModule({ name, tags });
                const ref = refs[name]?.resource?.sns_topic?.arn || '🔥';
                const actions = [
                    ...(filter_policy ? ['sns:Subscribe'] : []),
                    ...(message_attrs ? ['sns:Publish'] : []),
                ];
                return [
                    ...a,
                    {
                        lambda,
                        ref,
                        type: 'sns',
                        name,
                        actions,
                        ...(filter_policy ? { filter_policy } : {}),
                        ...(message_attrs ? { message_attrs } : {}),
                    },
                ];
            }
        }, [])
        : [];
};
export const provisionTopics = ({ configs, tags }) => {
    return Object.entries(configs).reduce((acc, cur) => {
        const [name, configs] = cur;
        if (!acc[name]) {
            console.log(`provisioning topic: ${name}`);
            const [TOPIC] = topicModule({
                name,
                tags,
            });
            return { ...acc, [name]: TOPIC };
        }
        else {
            return acc;
        }
    }, {});
};
export const configureBucketsForNode = ({ path, lambda, s3, tags }) => {
    return s3
        ? Object.entries(s3).reduce((a, c) => {
            const [name, actions] = c;
            const [, refs] = bucketModule({ name, tags, configs: [] });
            const ref = refs[`${name}_bucket`]?.resource?.s3_bucket?.bucket || '🔥';
            return [
                ...a,
                {
                    lambda,
                    ref,
                    type: 's3',
                    name,
                    actions,
                },
            ];
        }, [])
        : [];
};
export const provisionBuckets = ({ configs, roles, tags }) => {
    return Object.entries(configs).reduce((acc, cur) => {
        const [name, configs] = cur;
        // inject role_arn into configs with type === 's3'
        const configs_with_role_arn = configs.map((config) => {
            const { lambda, ...rest } = config;
            return {
                lambda,
                role_arn: roles[lambda],
                ...rest,
            };
        });
        if (!acc[name]) {
            console.log(`provisioning bucket: ${name}`);
            const [BUCKET] = bucketModule({
                name,
                configs: configs_with_role_arn,
                tags,
            });
            return { ...acc, [name]: BUCKET };
        }
        else {
            return acc;
        }
    }, {});
};
export const provisionZone = ({ api, apex, zones }) => Object.entries(api).reduce((acc, [subdomain, routes]) => {
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