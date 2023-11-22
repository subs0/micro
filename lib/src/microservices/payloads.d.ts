/**
 * converts an array of objects into an object with those arrays
 * grouped by a key (default: 'lambda')
 */
export declare const groupByKey: (array: any, key?: string) => any;
export declare const configTopics: ({ topics, lambda, sns, tags }: {
    topics: any;
    lambda: any;
    sns: any;
    tags: any;
}) => object[];
export declare const configBuckets: ({ buckets, lambda, configs, s3, tags }: {
    buckets: any;
    lambda: any;
    configs: any;
    s3: any;
    tags: any;
}) => object[];
export declare const configZone: ({ api, apex, zones }: {
    api: any;
    apex: any;
    zones: any;
}) => {};
//# sourceMappingURL=payloads.d.ts.map