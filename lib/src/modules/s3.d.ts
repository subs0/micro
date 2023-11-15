import { AWS, Statement } from '../constants';
export declare const s3BucketPolicy: ({ bucket, policy_json }: {
    bucket: any;
    policy_json: any;
}) => AWS;
export declare const bucketPolicyStatement: ({ bucket, role_arn }: {
    bucket: any;
    role_arn?: string | undefined;
}) => Statement;
export declare const s3BucketPolicyDocument: ({ bucket, role_arn }: {
    bucket: any;
    role_arn: any;
}) => AWS;
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
export declare const s3BucketCors: ({ bucket }: {
    bucket: any;
}) => AWS;
export declare const s3bucket: ({ name, tags }: {
    name: any;
    tags?: {} | undefined;
}) => AWS;
//# sourceMappingURL=s3.d.ts.map