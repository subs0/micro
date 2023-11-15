import { flag } from '../constants';
export const s3BucketPolicy = ({ bucket, policy_json }) => ({
    resource: {
        s3_bucket_policy: {
            bucket,
            policy: policy_json,
        },
    },
});
export const bucketPolicyStatement = ({ bucket, role_arn = '' }) => ({
    ...(role_arn ? { principals: { identifiers: [role_arn], type: 'AWS' } } : {}),
    effect: 'Allow',
    actions: [
        's3:AbortMultipartUpload',
        's3:ListMultipartUploadParts',
        's3:ListBucketMultipartUploads',
        's3:PutObject',
        's3:GetObject',
        's3:DeleteObject',
        // get cors policy
        's3:GetBucketCORS',
    ],
    resources: [`arn:aws:s3:::${bucket}`, `arn:aws:s3:::${bucket}/*`],
});
export const s3BucketPolicyDocument = ({ bucket, role_arn }) => {
    const statement = bucketPolicyStatement({ bucket, role_arn });
    return {
        data: {
            iam_policy_document: {
                statement,
                json: '-->',
            },
        },
    };
};
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
//# sourceMappingURL=s3.js.map