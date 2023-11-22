import { modulate } from '../config';
import { flag } from '../constants';
import { multiStatementIamPolicyDoc } from './iam';
//         _-~88e
//   d88~\    888b
//  C888    __888"
//   Y88b     888e
//    888D    888P
//  \_88P  ~-_88"
export const s3BucketPolicy = ({ bucket, policy_json }) => ({
    resource: {
        s3_bucket_policy: {
            bucket,
            policy: policy_json,
        },
    },
});
/**
 * 🔥 Initial CORS issues when talking to s3 from client upon first deployment
 *
 * The reason this happens (and also the reason why it self-resolves), is that
 * when you set up an S3 bucket, there's a certain time during which the global
 * bucket URL is not available, so AWS redirects to the region-specific URL.
 * From the documentation:
 *
 *     Temporary redirects automatically redirect users who do not have DNS
 *     information for the requested bucket. This occurs because DNS changes take
 *     time to propagate through the Internet. For example, if a user creates a
 *     bucket with a location constraint and immediately stores an object in the
 *     bucket, information about the bucket might not yet have been distributed
 *     throughout the Internet. Because the bucket is a subdomain of
 *     s3.amazonaws.com, Amazon S3 redirects it to the correct Amazon S3 location.
 *
 * The redirect response that Amazon sends back when you request the global URL
 * doesn't have CORS headers, thus...
 *
 * **requests will fail until the DNS has propagated.**
 *
 * Reference: https://github.com/component/s3/issues/7#issuecomment-45581857
 */
export const s3BucketCors = ({ bucket }) => ({
    resource: {
        s3_bucket_cors_configuration: {
            bucket,
            cors_rule: {
                allowed_methods: ['POST', 'GET', 'HEAD', 'PUT', 'DELETE'],
                allowed_origins: ['*'],
                allowed_headers: ['*'],
                expose_headers: ['ETag', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Headers'],
                max_age_seconds: 10,
            },
        },
    },
});
export const s3bucket = ({ name, tags = {} }) => ({
    resource: {
        s3_bucket: {
            bucket: `-->${name}`,
            //id: '-->',
            // @ts-ignore 🐛 FIXME: tick_group failure?
            tags: {
                ...flag,
                ...tags,
            },
        },
    },
});
const Bucket = ({ name, tags, configs }, my) => {
    const kabob_name = name.replace(/_/g, '-');
    const my_bucket = my?.[`${name}_bucket`]?.resource?.s3_bucket?.bucket;
    return {
        [`${name}_bucket`]: s3bucket({
            name: `${kabob_name}-${my?.[`${name}_pet`]?.resource?.random_pet?.id}`,
            tags,
        }),
        [`${name}_pet`]: { resource: { random_pet: { id: '-->' } } },
        [`${name}_allowed`]: multiStatementIamPolicyDoc(configs),
        [`${name}_policy`]: s3BucketPolicy({
            bucket: my_bucket,
            policy_json: my?.[`${name}_allowed`]?.data?.iam_policy_document?.json,
        }),
        [`${name}_bucket_cors`]: s3BucketCors({
            bucket: my_bucket,
        }),
    };
};
/**
 * NOTE:
 * The name of the bucket will be used as root the key. e.g.,
 * ```js
 * const { example } = bucketModule({ name: 'example' })
 * ```
 */
export const bucketModule = modulate({ s3: Bucket });
//# sourceMappingURL=s3.js.map