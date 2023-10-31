import { AWS } from '../types';
export declare const bucket_policy: ({ bucket_name, policy_json }: {
    bucket_name: any;
    policy_json: any;
}) => AWS;
export declare const bucket_cors: ({ bucket_name }: {
    bucket_name: any;
}) => AWS;
export declare const bucket: ({ name, tags }: {
    name: any;
    tags?: {} | undefined;
}) => AWS;
//# sourceMappingURL=s3.d.ts.map