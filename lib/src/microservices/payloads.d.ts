import { SharedResource } from '../constants';
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
export declare const pluck: (configs: any, keys: any) => any;
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
export declare const groupByKey: (array: any, key?: string) => any;
export declare const configureCWforNode: ({ path, lambda, cloudwatch, tags }: {
    path: any;
    lambda: any;
    cloudwatch: any;
    tags: any;
}) => SharedResource[];
export declare const provisionCloudwatch: ({ configs, tags }: {
    configs: any;
    tags: any;
}) => {};
/**
 * generates configurations with target shape including the reference (topic
 * arn) and actions (publish, subscribe) for each topic
 */
export declare const configureTopicsForNode: ({ path, lambda, sns, tags }: {
    path: any;
    lambda: any;
    sns: any;
    tags: any;
}) => SharedResource[];
export declare const provisionTopics: ({ configs, tags }: {
    configs: any;
    tags: any;
}) => {};
export declare const configureBucketsForNode: ({ path, lambda, s3, tags }: {
    path: any;
    lambda: any;
    s3: any;
    tags: any;
}) => SharedResource[];
export declare const provisionBuckets: ({ configs, roles, tags }: {
    configs: any;
    roles: any;
    tags: any;
}) => {};
export declare const configZone: ({ api, apex, zones }: {
    api: any;
    apex: any;
    zones: any;
}) => {};
//# sourceMappingURL=payloads.d.ts.map