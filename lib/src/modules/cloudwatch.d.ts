import { AWS } from '../constants';
export declare const cloudwatch: ({ name, retention_in_days, tags }: {
    name: any;
    retention_in_days?: number | undefined;
    tags?: {} | undefined;
}) => AWS;
/**
 * NOTE:
 * The name of the topic will be used as the key. e.g.,
 * ```js
 * const { example } = topicModule({ name: 'example' })
 * ```
 */
export declare const cloudwatchModule: (args_0: {
    name: any;
    retention_in_days?: number | undefined;
    tags?: {} | undefined;
}, ...args_1: [({
    name: any;
    retention_in_days?: number | undefined;
    tags?: {} | undefined;
} | undefined)?][]) => [{
    [x: number]: AWS;
}, {
    [x: number]: AWS;
}];
//# sourceMappingURL=cloudwatch.d.ts.map