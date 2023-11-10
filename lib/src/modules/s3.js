import { flag } from '../types';
export const bucket_policy = ({ bucket_name, policy_json }) => ({
    resource: {
        s3_bucket_policy: {
            bucket: bucket_name,
            policy: policy_json,
        },
    },
});
export const bucket_cors = ({ bucket_name }) => ({
    resource: {
        s3_bucket_cors_configuration: {
            bucket: bucket_name,
            cors_rule: {
                allowed_methods: ['POST', 'GET', 'HEAD', 'DELETE', 'PUT'],
                allowed_origins: ['*'],
                allowed_headers: ['*'],
                expose_headers: ['ETag'],
                max_age_seconds: 3000,
            },
        },
    },
});
export const bucket = ({ name, tags = {} }) => ({
    resource: {
        s3_bucket: {
            bucket: `-->${name}`,
            // @ts-ignore 🐛 FIXME: tick_group failure?
            tags: {
                ...flag,
                ...tags,
            },
        },
    },
});
//# sourceMappingURL=s3.js.map