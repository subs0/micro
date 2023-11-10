import { flag } from '../types';
//  ,e,
//   "    /~~~8e  888-~88e-~88e
//  888       88b 888  888  888
//  888  e88~-888 888  888  888
//  888 C888  888 888  888  888
//  888  "88_-888 888  888  888
export const iam_role = ({ name, policy_json, tags = {} }) => ({
    resource: {
        iam_role: {
            name: `-->${name}-role`,
            assume_role_policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
});
export const iam_role_policy_attachment = ({ role_name, policy_arn }) => ({
    resource: {
        iam_role_policy_attachment: {
            role: role_name,
            policy_arn,
        },
    },
});
export const iam_policy = ({ name, policy_json, tags = {} }) => ({
    resource: {
        iam_policy: {
            name: `-->${name}-policy`,
            policy: policy_json,
            tags: {
                ...flag,
                ...tags,
            },
            arn: '-->',
        },
    },
});
//# sourceMappingURL=iam.js.map