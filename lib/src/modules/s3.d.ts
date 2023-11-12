import { AWS } from '../constants';
export declare const s3BucketPolicy: ({ bucket_name, policy_json }: {
    bucket_name: any;
    policy_json: any;
}) => AWS;
export declare const s3BucketCors: ({ bucket_name }: {
    bucket_name: any;
}) => AWS;
export declare const s3bucket: ({ name, tags }: {
    name: any;
    tags?: {} | undefined;
}) => AWS;
//# sourceMappingURL=s3.d.ts.map