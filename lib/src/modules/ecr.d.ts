import { AWS } from '../types';
/**
 * Create an ECR repository.
 * One repository can be used for multiple Lambda function images.
 *
 * @param { string } name - name of the repository
 * @param { string } mutability - image tag = `MUTABLE` or `IMMUTABLE`
 * @param { boolean } force_delete - delete the repository even if it contains images.
 * @param { boolean } scan - scan the repository for vulnerabilities after pushing the image.
 * @param { object } tags - A mapping of tags to assign to the resource.
 */
export declare const ecr_repo: ({ name, mutability, force_delete, scan, tags, }: {
    name: any;
    mutability?: string | undefined;
    force_delete?: boolean | undefined;
    scan?: boolean | undefined;
    tags?: {} | undefined;
}) => AWS;
/**
 * See [rules documentation]
 *
 * [rules documentation]: https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters
 */
declare const default_lifecycle_policy: {
    rules: {
        rulePriority: number;
        description: string;
        selection: {
            tagStatus: string;
            countType: string;
            countNumber: number;
        };
        action: {
            type: string;
        };
    }[];
};
/**
 * A JSON formatted ECR lifecycle policy to automate the cleaning up of unused
 * images.
 *
 * @param { string } policy - JSON formatted ECR lifecycle policy. See [docs]
 *
 * [docs]: https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html#lifecycle_policy_parameters
 */
export declare const ecr_lifecycle_policy: ({ policy, repo, }: {
    policy: typeof default_lifecycle_policy;
    repo: string;
}) => AWS;
interface EcrRepository {
    name: string;
    /** options: 'MUTABLE' | 'IMMUTABLE' */
    mutability?: string;
    force_delete?: boolean;
    scan?: boolean;
    policy?: typeof default_lifecycle_policy;
    tags?: object;
}
export declare const ecr_repository: ({ name, mutability, force_delete, scan, policy, tags, }: EcrRepository, my: {
    [key: string]: AWS;
}) => {
    [key: string]: AWS;
};
export declare const ecrRepoModule: (args_0: EcrRepository, ...args_1: [(EcrRepository | undefined)?, ({
    [key: string]: AWS;
} | undefined)?][]) => [{
    [key: string]: AWS;
}, {
    [key: string]: AWS;
}];
export {};
//# sourceMappingURL=ecr.d.ts.map